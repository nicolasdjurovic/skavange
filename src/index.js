import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Pricing from './Pricing';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<App />} /> 

      <Route path='/pricing' element={<Pricing />} /> 

      <Route path='/login' element={<Login />} /> 

      <Route path='/register' element={<Register />} />

      <Route path='/dashboard' element={<Dashboard />} />



      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
