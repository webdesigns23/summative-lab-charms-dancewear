import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductList() {
	const { filteredProducts } = useOutletContext();
	const { setProducts } = useOutletContext();

	//Delete (Buy Now)
	function handleDeleteProduct(id) {
		setProducts((prevProducts) => prevProducts.filter((e) => e.id !== id))
	}

	//Update Favorited
	function handleUpdateProduct(updatedProduct) {
		const updatedList = products.map((product) =>
			drink.id === updatedProduct.id ? updatedProduct : product);
		setProducts(updatedList);
	}


	return (
		<ul className="cards">
			{filteredProducts.map((product) => (
				<ProductCard key={product.id}
					product={product}
					onDeleteProduct={handleDeleteProduct}
					onUpdateProduct={handleUpdateProduct} />
			))}
		</ul>
	)
}