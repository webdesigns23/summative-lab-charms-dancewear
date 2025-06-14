import React from "react";
import NavBar from "../components/NavBar"
import { Outlet, Link } from "react-router-dom";


export default function Admin() {

	return (
		<>
		<NavBar />
		<h1>Admin Portal</h1>
		<Link to="new">Add New Product</Link>
		<br></br>
		<Link to="update">Update Product Price</Link>
		<Outlet/>
		</>
	)
}