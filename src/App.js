import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadCartFromLocalStorage } from './features/cartSlice'; // ควรส่งออกจาก cartSlice
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // สำหรับไอคอน


function App() {
  const dispatch = useDispatch();

  // useEffect เพื่อโหลดข้อมูลจาก LocalStorage ไปยัง Redux store เมื่อแอปเริ่มต้น
  useEffect(() => {
    dispatch(loadCartFromLocalStorage()); // เรียกใช้ฟังก์ชันนี้
  }, [dispatch]);

  return (
    <Router>
      <nav>
        {/* <Link to="/">Home</Link> | <Link to="/cart">Cart</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
