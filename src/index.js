import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Loginform from './login';
import Registerform from './register';
import Dashboard from './dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
       <Routes>
        <Route path='/' element={<Loginform />} />
        <Route path='/register' element={<Registerform />} />
        <Route path='/dashboard' element={<Dashboard />} />
       </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
