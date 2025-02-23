import './App.css'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/gallery" element={
          <Gallery />
        } />
        <Route path="/about" element={
          <About />
        } />
        <Route path="/services" element={
          <Services />
        } />
        <Route path="/contact" element={
          <Contact />
        } />
      </Routes>
      <Nav />
      <Footer />
    </div>
  )
}

export default App
