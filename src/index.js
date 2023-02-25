import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Home from './pages/mintHome';
// import WhitePaper from './pages/whitePaper';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}> */}
          <Route index element={<Home/>} />
          {/* <Route path="whitePaper" element={<WhitePaper />} />
          <Route path="egonisnoise" element={<Egonisnoise />} /> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
);

