import './App.css'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';
import Photo from './components/Photo.jsx';
import React from 'react';

const loading_img = "https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Home />
          </React.Suspense>
        } />
        <Route path="/gallery" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Gallery />
          </React.Suspense>
        } />
        <Route path="/gallery/:photoId" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Photo />
          </React.Suspense>
        } />
        <Route path="/about" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <About/>
          </React.Suspense>
        } />
        <Route path="/services" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Services />
          </React.Suspense>
        } />
        <Route path="/contact" element={
          <React.Suspense fallback={<img className="loading" src={loading_img} />}>
            <Contact />
          </React.Suspense>
        } />
      </Routes>
      <Nav />
      <Footer />
    </div>
  )
}

export default App
