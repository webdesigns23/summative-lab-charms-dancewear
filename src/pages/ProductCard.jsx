
import React from "react";
import { useOutletContext, useParams} from "react-router-dom";

export default function ProductCard({product}) {
	// const { id } = useParams()
	// const { products } = useOutletContext()

	// const product = products.find((p) => p.id === parseInt(id))

	// if (!product) {
	// 	return <h2>Product not found.</h2>
	// }

	return (
		<li className="card" data-testid="product-item">
			<img src={product.image} width={"50px"} alt={product.name} />
			<h4>{product.name}</h4>
			<ul>Price: ${product.price}</ul>
			<p>{product.description}</p>
		</li>
	)
}