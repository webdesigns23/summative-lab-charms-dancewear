import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Admin from "./pages/Admin"
import ProductCard from "./pages/ProductCard"
import ProductContainer from "./pages/ProductContainer"
import ProductForm from "./pages/ProductForm"
import ProductList from "./pages/ProductList"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} > 
          <Route path="new" element={<ProductForm />} />
        </Route>
        <Route path="/products" element={<ProductContainer />}>
          <Route path="" element={<ProductList />} />
          <Route path=":id" element={<ProductCard />} />
        </Route>        
      </Routes>
    </BrowserRouter>
  )
};


