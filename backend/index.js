const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
// Lấy link DB từ biến môi trường hoặc dùng localhost nếu chạy máy nhà
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mern_db';

// 1. Kết nối MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ Đã kết nối MongoDB'))
    .catch(err => console.error('❌ Lỗi kết nối MongoDB:', err));

// 2. Trang chủ (Fix lỗi Cannot GET /)
app.get('/', (req, res) => {
    res.send('<h1>Backend MERN đang chạy ngon lành!</h1>');
});

// 3. API dữ liệu
app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: "Laptop Gaming", price: 2000 },
        { id: 2, name: "Chuột không dây", price: 50 },
        { id: 3, name: "Bàn phím cơ", price: 100 }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server chạy tại port ${PORT}`);
});