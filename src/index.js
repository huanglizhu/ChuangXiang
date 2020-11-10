import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import 'antd/dist/antd.css';

ReactDOM.render(
  <BrowserRouter basename="/ChuangXiang">
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
