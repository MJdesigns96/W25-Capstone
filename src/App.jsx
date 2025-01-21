import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
//Product filter Pages
import Products from './pages/Products/index';
import Sandals from './pages/Products/Sandals';
import Boots from './pages/Products/Boots';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />}>
              <Route path='sandals' element={<Sandals />}/>
              <Route path='boots' element={<Boots />}/>
            </Route>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
