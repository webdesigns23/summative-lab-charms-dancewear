import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductContext from "./context/ProductContext"
import Home from "./pages/Home"
import About from "./pages/About"
import Admin from "./pages/Admin"
import ProductCard from "./pages/ProductCard"
import ProductContainer from "./pages/ProductContainer"
import ProductForm from "./pages/ProductForm"
import ProductList from "./pages/ProductList"
import UpdatePrice from "./pages/UpdatePrice"


export default function App() {
    const [products, setProducts] = useState([]);
    
  return (
    <BrowserRouter>
      <ProductContext.Provider value={{ products, setProducts }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} >
            <Route path="new" element={<ProductForm />} />
            <Route path="/admin/update" element={<UpdatePrice />} />
          </Route>
          <Route path="/products" element={<ProductContainer />}>
            <Route path="" element={<ProductList />} />
            <Route path=":id" element={<ProductCard />} />
          </Route>
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  )
};




