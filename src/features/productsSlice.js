// src/features/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // รายการสินค้าทั้งหมด
  filteredItems: [], // รายการสินค้าที่กรองแล้ว
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload; // กำหนดสินค้าทั้งหมด
      state.filteredItems = action.payload; // กำหนดสินค้าเริ่มต้นที่จะแสดงเป็นสินค้าทั้งหมด
    },
    filterByCategory: (state, action) => {
      if (action.payload === "") {
        // แสดงสินค้าทั้งหมดเมื่อเลือก "All Categories"
        state.filteredItems = state.items;
      } else {
        // กรองสินค้าตามหมวดหมู่ที่เลือก
        state.filteredItems = state.items.filter(
          product => product.category === action.payload
        );
      }
    },
    sortByPrice: (state, action) => {
      // จัดเรียงสินค้าโดยใช้ราคา (จากต่ำไปสูง หรือจากสูงไปต่ำ)
      state.filteredItems = [...state.filteredItems].sort((a, b) => {
        if (action.payload === 'low-to-high') {
          return a.price - b.price;
        } else if (action.payload === 'high-to-low') {
          return b.price - a.price;
        }
        return 0; // ถ้าไม่มีการเลือกตัวเลือกการจัดเรียง
      });
    },
  },
});

export const { setProducts, filterByCategory, sortByPrice } = productsSlice.actions;

export default productsSlice.reducer;
