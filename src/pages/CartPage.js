// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cartSlice';
import Navbar from '../components/Navbar'; // Import Navbar
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // สำหรับไอคอน

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    alert("ทำการสั่งซื้อเรียบร้อยแล้ว!");
    // ที่นี่คุณสามารถเพิ่มฟังก์ชันเพิ่มเติม เช่น การเรียก API เพื่อบันทึกข้อมูลการสั่งซื้อ
  };

  return (
    <div>
      <Navbar /> {/* เพิ่ม Navbar ที่นี่ */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">🛒 ตะกร้าสินค้า</h2>
        {cartItems.length === 0 ? (
          <div className="alert alert-warning text-center">ไม่มีสินค้าในตะกร้า</div>
        ) : (
          <div className="card shadow-sm border-light p-4">
            <ul className="list-group list-group-flush mb-4">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="mb-0 text-muted">${item.price}</p>
                  </div>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(item)}>
                    <i className="bi bi-trash"></i> ลบ
                  </button>
                </li>
              ))}
            </ul>
            <div className="d-flex justify-content-between align-items-center">
              <h4>รวมทั้งหมด: <span className="text-success">${totalAmount}</span></h4>
              <button className="btn btn-success btn-lg" onClick={handleCheckout}>
                <i className="bi bi-bag-check"></i> สั่งซื้อ
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
