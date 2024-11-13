import React from 'react';
import Navbar from '../components/Navbar'; // เชื่อมโยง Navbar
import ProductList from '../components/ProductList'; // เชื่อมโยง ProductList
import ProductFilter from '../components/ProductFilter'; // เชื่อมโยง ProductFilter
import '../styles/Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // สำหรับไอคอน

const HomePage = () => {
  return (
    <>
      <Navbar /> {/* เพิ่ม Navbar ที่นี่ */}
      <div className="container my-5">
        {/* <h1 className="text-center mb-4">Welcome to E-Commerce</h1> */}
        
        <ProductFilter /> {/* แสดงฟิลเตอร์ */}
        
        <div className="row">
          {/* แสดงรายการสินค้าทั้งหมด */}
          <ProductList />
        </div>
      </div>
    </>
  );
};

export default HomePage;
