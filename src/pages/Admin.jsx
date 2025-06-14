import React from "react";
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom";

export default function Admin() {
	return (
		<>
		<NavBar />
		<h1>Admin Portal</h1>
		<Outlet />
		</>
	)
}