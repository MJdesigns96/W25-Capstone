import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//layout tabs
import Layout from './pages/Layout';
import Home from './pages/Home';
import Brand from './pages/Brand';
//Blog filter Pages
import Blogs from './pages/Blogs';
import ShortBlogs from './pages/Blogs/ShortBlogs';
import BlogPost from './pages/Blogs/BlogPost';
//Product filter Pages
import Products from './pages/Products/index';
import AllProducts from './pages/Products/AllProducts';
import Sandals from './pages/Products/Sandals';
import Boots from './pages/Products/Boots';
import Sneakers from './pages/Products/Sneakers';
import ProductDetails from './components/ProductDetail';
//Account filter Pages
import Accounts from './pages/Account';
import Details from './pages/Account/Details'
import Register from './pages/Account/Register';
import Login from './pages/Account/Login';
//checkout page
import Checkout from './pages/Checkout/index';
//Admin pages
import Admin from './pages/Admin';
import Dashboard from './pages/Admin/Dashboard';
import ListProducts from './pages/Admin/ListProducts';
import AddProduct from './pages/Admin/AddProduct';

//import state from server
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  //render data from mongodb server and express. Transfer to a component later on.
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8888/users')
    .then(response => setUsers(response.data))
    .catch(error => console.error(error))
  }, []);

  useEffect(()=> {
      axios.get('http://localhost:8888/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
      axios.get('http://localhost:8888/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error(error))
  }, []);

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
            <Route path="brand" element={<Brand />} />
            <Route path='blogs' element={<Blogs props={blogs} />}>
              <Route path="short-blogs" element={<ShortBlogs props={blogs}/>}/>
              <Route path=':blogId' element={<BlogPost props={blogs} />} />
            </Route>
            <Route path="accounts" element={<Accounts props={users} />}>
              <Route path="details" element={<Details />} />
              <Route path='login' element={<Login />} />
              <Route path="register" element={<Register props={users} />} />
            </Route>
            <Route path="checkout" element={<Checkout />} />
            <Route path="admin"element={<Admin props={products} />}>
              <Route path='dashboard' element={<Dashboard />} />
              {/* product admin features */}
              <Route path='list-products' element={<ListProducts props={products} />} />
              <Route path='add-product' element={<AddProduct props={products} />} />
              <Route path='update-product' />
              <Route path='delete-product' />
              {/* order admin features */}
              <Route path='users-list' />
              <Route path='orders-list' />
              <Route path='stock-list' />
              {/* blog admin features */}
              <Route path='blogs-list' />
              <Route path='blogs-add' />
              <Route path='blogs-delete' />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
