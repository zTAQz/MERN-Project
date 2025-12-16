const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern_db';

// 1. Kết nối MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Đã kết nối MongoDB thành công'))
    .catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));

// --- BƯỚC MỚI: ĐỊNH NGHĨA MODEL (KHUNG DỮ LIỆU) ---
// Tạo quy ước: Một sản phẩm phải có tên (name) và giá (price)
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});
const Product = mongoose.model('Product', productSchema);
// ---------------------------------------------------

// 2. Trang chủ
app.get('/', (req, res) => {
    res.send('<h1>Backend MERN đang chạy và kết nối Database!</h1>');
});

// --- BƯỚC MỚI: API LẤY DỮ LIỆU TỪ DB THẬT ---
app.get('/api/products', async (req, res) => {
    try {
        // Lệnh này sẽ tìm toàn bộ dữ liệu trong bảng 'products' của MongoDB
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
    }
});

// --- API PHỤ: ĐỂ TẠO DỮ LIỆU TEST (CHẠY 1 LẦN) ---
app.get('/api/seed', async (req, res) => {
    try {
        // Xóa dữ liệu cũ nếu có
        await Product.deleteMany({});

        // Thêm dữ liệu mới vào DB
        await Product.insertMany([
            { name: "iPhone 15 Pro Max (Từ DB)", price: 1500 },
            { name: "Samsung S24 Ultra (Từ DB)", price: 1200 },
            { name: "MacBook M3 (Từ DB)", price: 2000 }
        ]);
        res.send("Đã thêm dữ liệu mẫu vào Database thành công!");
    } catch (err) {
        res.status(500).send("Lỗi tạo dữ liệu: " + err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server chạy tại port ${PORT}`);
});