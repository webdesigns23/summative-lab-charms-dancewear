import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductList() {
	const { products } = useOutletContext();

	//  const displayProducts = products.map(p => (
	//     <li key={p.id}><Link to={p.id}>{p.name}</Link></li>
	// ))

	return (
		<ul className="cards">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))};
		</ul>
	)
}