import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar"
import {useOutletContext, Link, useParams, Outlet} from "react-router-dom"

export default function ProductContainer() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(r => {
                if (!r.ok) { throw new Error("failed to fetch products") }
                return r.json()
            })
            .then(setProducts)
            .catch(console.log)
    }, [])
	return (
		  <>
            <NavBar />
            <main>
                <h1>View Products!</h1>
                <Outlet context={{products}}/>
            </main>
        </>
	)
}