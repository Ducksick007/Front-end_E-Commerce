import { createSlice } from '@reduxjs/toolkit';

// ข้อมูลเริ่มต้นของตะกร้า
const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],  // โหลดตะกร้าจาก localStorage หากมี
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // เพิ่มสินค้าในตะกร้า
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // ถ้ามีสินค้าตัวนี้แล้วเพิ่มจำนวน
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // ถ้ายังไม่มีเพิ่มสินค้าใหม่
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems)); // บันทึกข้อมูลใน localStorage
    },

    // ลบสินค้าออกจากตะกร้า
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(state.cartItems)); // บันทึกข้อมูลใน localStorage
    },

    // โหลดข้อมูลตะกร้าจาก localStorage
    loadCartFromLocalStorage: (state) => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        state.cartItems = JSON.parse(savedCart);
      }
    },

    // เคลียร์ตะกร้าทั้งหมด
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cart'); // เคลียร์ข้อมูลใน localStorage
    },
  },
});

export const { addToCart, removeFromCart, loadCartFromLocalStorage, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
