import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
//Product filter Pages
import Products from './pages/Products/index';
import AllProducts from './pages/Products/AllProducts';
import Sandals from './pages/Products/Sandals';
import Boots from './pages/Products/Boots';
import Sneakers from './pages/Products/Sneakers';
import ProductDetails from './components/ProductDetail';

//import state from server
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  //render data from mongodb server and express. Transfer to a component later on.
  const [products, setProducts] = useState([]);

  useEffect(()=> {
      axios.get('http://localhost:8888/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  // console.log(products);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home props={products}/>} />
            <Route path="products" element={<Products props={products} />}>
              <Route path='all-products' element={<AllProducts props={products} />}/>
              <Route path='all-products/:productId' element={<ProductDetails props={products}/>} />
              <Route path='sandals' element={<Sandals props={products} />}/>
              <Route path='boots' element={<Boots props={products} />}/>
              <Route path='sneakers' element={<Sneakers props={products} />}/>
            </Route>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
