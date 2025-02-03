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

  //make a call to the server to get UserData from the db; pass the id down the props to Accounts so new users will be able to increase their id and login useres will have validation

  //local storage items
  // localStorage.setItem('loggedIn', false);
  // const loggedIn = localStorage.getItem('loggedIn');
  // console.log(users);
  // console.log(`logged in: ${loggedIn}.`);

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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
