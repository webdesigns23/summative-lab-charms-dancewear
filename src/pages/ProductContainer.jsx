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
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (response.ok) {
          const products = await response.json();
          setProducts(products);
        } else {
          console.log("failed to get products");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />
      <Search
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange} />
      <button onClick={() => setSearchTerm('')}>New Style Search</button>
      <main>
        <h1>Dancewear</h1>
        <Outlet context={{ products, setProducts, filteredProducts }} />
      </main>
    </>
  )
}