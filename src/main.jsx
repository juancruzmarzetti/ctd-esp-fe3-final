import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from "./Routes/Contact";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='contacto' element={<Contact/>}/>
          <Route path='dentista/:id' element={<Detail/>}/>
          <Route path='favs' element={<Favs/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


