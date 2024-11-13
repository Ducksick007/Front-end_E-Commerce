import React, { useEffect } from 'react';
import { House, Cart, InfoCircle, Telephone } from 'react-bootstrap-icons';
import { useSelector, useDispatch } from 'react-redux';
import { loadCartFromLocalStorage } from '../features/cartSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  // ดึงข้อมูลสินค้าในตะกร้าจาก Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);

  // คำนวณจำนวนสินค้าทั้งหมดในตะกร้า
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // โหลดข้อมูลจาก localStorage เมื่อคอมโพเนนต์โหลด
  useEffect(() => {
    dispatch(loadCartFromLocalStorage());
  }, [dispatch]);

  return (
    <header className="p-3 bg-dark text-white shadow-sm">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          {/* Logo and E-Commerce Name */}
          <a href="/" className="d-flex align-items-center text-white text-decoration-none me-5">
            {/* <img src="https://via.placeholder.com/40x40?text=🛒" alt="Logo" className="rounded-circle me-2" /> */}
            {/* <span className="fs-4 fw-bold">E-Computer</span> */}
          </a>

          {/* Navbar Links */}
          <ul className="nav me-auto">
            <li>
              <a href="/" className="nav-link px-3 text-white hover-underline-animation d-flex align-items-center">
                <House className="me-2" /> หน้าหลัก
              </a>
            </li>
            <li>
              <a href="/cart" className="nav-link px-3 text-white hover-underline-animation d-flex align-items-center">
                <Cart className="me-2" /> ตะกร้า
                {/* แสดงจำนวนสินค้าทางขวาของไอคอน */}
                {totalItems > 0 && (
                  <span className="badge bg-light text-dark ms-2">{totalItems}</span>
                )}
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link px-3 text-white hover-underline-animation d-flex align-items-center">
                <InfoCircle className="me-2" /> เกี่ยวกับ
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link px-3 text-white hover-underline-animation d-flex align-items-center">
                <Telephone className="me-2" /> ติดต่อ
              </a>
            </li>
          </ul>

          {/* Search Form */}
          <form className="d-flex me-3">
            <input
              type="search"
              className="form-control form-control-dark border-0 rounded-pill"
              placeholder="ค้นหาสินค้า..."
              aria-label="Search"
              style={{ width: '250px' }}
            />
          </form>

          {/* Login and Sign-up Buttons */}
          <div className="d-flex align-items-center">
            <button type="button" className="btn btn-outline-light rounded-pill me-2 px-4">Login</button>
            <button type="button" className="btn btn-warning rounded-pill px-4 text-dark fw-semibold">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
