import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contacts from './pages/Contacts'
import How from './pages/How'
import JoinUs from './pages/JoinUs'
import Help from "./pages/Help";
import AdminPanel from "./AdminPanel";



function Router() {
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleUpload = (image) => {
    setUploadedImages([...uploadedImages, image]);
  };
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About uploadedImages={uploadedImages}/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/how-to" element={<How />} />
        <Route path="/join-us" element={<JoinUs/>} />
        <Route path="/help-us" element={<Help/>} />
        <Route path="admin" element ={<AdminPanel onUpload={handleUpload} />} />
      </Routes>
    </div>
  )
}

export default Router
