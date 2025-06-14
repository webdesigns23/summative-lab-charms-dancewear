import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductList() {
	const {filteredProducts} = useOutletContext();


	return (
		<ul className="cards">
			{filteredProducts.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</ul>
	)
}