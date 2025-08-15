import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppProvider from './context/AppContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductTable from './components/ProductTable';
import ProductDashboard from './components/ProductDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/table" element={<ProductTable />} />
        <Route path="/admin_dashboard" element={<ProductDashboard />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>,
);
