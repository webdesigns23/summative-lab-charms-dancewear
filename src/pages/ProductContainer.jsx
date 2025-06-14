import React, { useState, useEffect, useContext } from "react";
import NavBar from "../components/NavBar"
import { useOutletContext, Link, useParams, Outlet } from "react-router-dom"
import ProductContext from "../context/ProductContext";
import Search from "../components/Search";

export default function ProductContainer() {
  const { products, setProducts } = useContext(ProductContext);

  //search
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
    return setSearchTerm
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase()
    return productName.includes(lowerCaseSearchTerm)
  });



  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(r => {
        if (!r.ok) { throw new Error("failed to get products") }
        return r.json()
      })
      .then(setProducts)
      .catch(console.log)
  }, [])

  return (
    <>
      <NavBar />
      <Search
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange} />
      <button onClick={() => setSearchTerm('')}>New Style Search</button>
      <main>
        <h1>Dancewear</h1>
        <Outlet context={{ products, filteredProducts }} />
      </main>
    </>
  )
}