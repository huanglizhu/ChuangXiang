import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import 'antd/dist/antd.css';
// basename={process.env.NODE_ENV === 'production' ? "/ChuangXiang" : ""}
ReactDOM.render(
  <BrowserRouter basename="/ChuangXiang">
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
