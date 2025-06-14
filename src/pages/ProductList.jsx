import React from "react";
import { useOutletContext, Link } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function ProductList() {
	const {filteredProducts} = useOutletContext();
	
  //Delete (Buy Now)
  const handleDeleteProduct = deletedProductId => setProducts(previousProducts => previousProducts.filter(product => product.id !== deletedProductId))

  //Update Favorited
  function handleUpdateProduct(updatedProduct) {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
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