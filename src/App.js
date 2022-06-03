import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Layouts/Navbar'
import { Home } from './Routes/Home';
import ProductInfo from './Routes/ProductInfo';
import Footer from './Layouts/Footer';
import './Styles/App.scss';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product-info' element={<ProductInfo />}></Route>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
