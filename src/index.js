import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Albums from './Albums.js';
import BottomBar from './BottomBar';
import SideBar from './SideBar';
import Songs from './Songs';
import Artists from './Artists';
import TopBar from './TopBar';


function START() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <BottomBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Songs />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Albums" element={<Albums />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);