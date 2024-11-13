// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // ใช้ ReactDOM.createRoot
import './styles/index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // สำหรับไอคอน



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* เพิ่ม Provider ที่ห่อหุ้มแอป */}
      <App />
    </Provider>
  </React.StrictMode>
);
