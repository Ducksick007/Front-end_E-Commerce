import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, sortByPrice } from '../features/productsSlice'; // เพิ่มการนำเข้า sortByPrice
import { addToCart } from '../features/cartSlice'; 
import { Link } from 'react-router-dom'; // เพิ่มการนำเข้า Link สำหรับไปที่ตะกร้า

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.filteredItems);
  const cartItems = useSelector((state) => state.cart.cartItems); // ดึงข้อมูลจำนวนสินค้าที่อยู่ในตะกร้า

  useEffect(() => {
    const mockProducts = [
      { id: 1, name: 'Intel CPU Core i3', price: 5900, category: 'A', image: '/images/i3.webp' },
      { id: 2, name: 'Intel CPU Core i5', price: 7900, category: 'A', image: '/images/i5.webp' },
      { id: 3, name: 'Intel CPU Core i7', price: 7900, category: 'A', image: '/images/i5.webp' },
      { id: 4, name: 'Intel CPU Core i9', price: 9900, category: 'A', image: '/images/i9.webp' },
      { id: 5, name: 'Ram Corsair 16 GB Bus 5200Mhz', price: 2500, category: 'B', image: '/images/ram.webp' },
      { id: 6, name: 'Ram Corsair 32 GB Bus 5200Mhz', price: 4500, category: 'B', image: '/images/ram.webp' },
      { id: 7, name: 'Ram Corsair 64 GB Bus 5200Mhz', price: 5500, category: 'B', image: '/images/ram.webp' },
      { id: 8, name: 'Ram Corsair 128 GB Bus 5200Mhz', price: 8500, category: 'B', image: '/images/ram.webp' },
      { id: 9, name: 'Nvidia RTX 4060', price: 11900, category: 'C', image: '/images/4060.webp' },
      { id: 10, name: 'Nvidia RTX 4070 TI', price: 15900, category: 'C', image: '/images/4070.webp' },
      { id: 11, name: 'Nvidia RTX 4080 TI', price: 18900, category: 'C', image: '/images/4080.webp' },
      { id: 12, name: 'Nvidia RTX 4090 TI', price: 49000, category: 'C', image: '/images/4090.webp' },
    ];
    dispatch(setProducts(mockProducts));

    // เรียงสินค้าจากราคาต่ำไปสูง
    dispatch(sortByPrice('low-to-high'));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#333' }}>
        รายการสินค้า
      </h2>

      {/* ปุ่มไปที่ตะกร้าและจำนวนสินค้าที่อยู่ในตะกร้า */}
      {/* <div className="text-end mb-3">
        <Link to="/cart" className="btn btn-warning position-relative">
          ไปที่ตะกร้า
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItems.length}
          </span>
        </Link>
      </div> */}

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card custom-card border-0 shadow-lg rounded-3 overflow-hidden d-flex flex-column h-100">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top product-img"
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title product-title" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                  {product.name}
                </h5>
                <p className="card-text product-price" style={{ fontSize: '1.2rem', color: '#FF5733', fontWeight: 'bold' }}>
                  ฿{product.price}
                </p>
                {/* ปรับขนาดของปุ่มให้เต็มการ์ดและความสูงเท่ากัน */}
                <button
                  className="btn btn-primary w-100 mt-auto"
                  onClick={() => handleAddToCart(product)}
                  style={{
                    backgroundColor: '#007bff',
                    border: 'none',
                    fontWeight: '600',
                    height: '40px', // กำหนดความสูงของปุ่ม
                  }}
                >
                  <i className="fas fa-cart-plus"></i> เพิ่มลงในตะกร้า
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
