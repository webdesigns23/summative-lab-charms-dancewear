import React, { useContext } from "react";
import NavBar from "../components/NavBar"
import { Outlet, Link, } from "react-router-dom";
import ProductContext from "../context/ProductContext";



export default function Admin() {
	const { products, setProducts } = useContext(ProductContext);

	//update price
	const updatePrice = (updatedProductPrice) => {
		setProducts(previousProduct => previousProduct.map(product => {
			if (product.id === updatedDirector.id) {
				return updatedProductPrice
			}
			return product
		}))
	}

	return (
		<>
			<NavBar />
			<h1>Admin Portal</h1>
			<Link to="new">Add New Product</Link>
			<br></br>
			<Link to="update">Update Product Price</Link>
			<Outlet context={{ products, setProducts, updatePrice }} />
		</>
	)
}