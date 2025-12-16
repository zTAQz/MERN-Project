import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  // URL_BACKEND: Sau này deploy xong sẽ thay bằng link Render
  // Hiện tại cứ để trống hoặc localhost để code không lỗi !!
  const API_URL = 'https://mern-project-oetq.vercel.app/api/products';

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Danh sách sản phẩm (MERN)</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;