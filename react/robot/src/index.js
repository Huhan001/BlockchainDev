import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import reportWebVitals from '../reportWebVitals';
import 'tachyons';
import App from "./containers/App";



ReactDOM.createRoot(document.getElementById('root')).render(<App/>)

//// so we shall always want to return one thing when using react.
//
//// If you want to start measuring performance in your app, pass a function
//// to log results (for example: reportWebVitals(console.log))
//// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
