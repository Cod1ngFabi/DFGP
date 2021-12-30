import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Imprint from './imprint';
import Privacy from './privacy';
import NotFound from './notFound';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/Impressum" element={<Imprint />}/>
      <Route path="Datenschutz" element={<Privacy />}></Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
