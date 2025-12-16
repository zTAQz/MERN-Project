import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  // --- SỬA DÒNG NÀY ---
  // Thay link Vercel bằng link Render của bạn:
  const API_URL = 'https://mern-project-yu11.onrender.com/api/products';
  // --------------------

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log("Lỗi fetch:", err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Danh sách sản phẩm (MERN)</h1>
      <ul>
        {products.map(p => (
          // Thêm dấu ? để tránh lỗi nếu dữ liệu chưa kịp về
          <li key={p._id || p.id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;