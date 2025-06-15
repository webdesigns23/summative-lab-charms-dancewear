
import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function ProductCard({ product, onDeleteProduct, onUpdateProduct }) {
	const { id, likes } = product;

	//Delete-Buy Now:
	function handleDeleteClick() {
		fetch(`http://localhost:3000/products/${product.id}`, {
			method: "DELETE"
		})
			.then(r => {
				if (!r.ok) { throw new Error("failed to delete toy") }
				onDeleteProduct(id)
			})
			.catch(error => console.log(error.message))
	}

	//Update Favorited:
	function handleLikeClick() {
		fetch(`http://localhost:3000/products/${product.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ likes: likes + 1 }),
		})
			.then((res) => res.json())
			.then((updatedProduct) => onUpdateProduct(updatedProduct));
	}

	return (
		<li className="card" data-testid="product-item">
			<img src={product.image} width={"50px"} alt={product.name} />
			<h4>{product.name}</h4>
			<ul>Price: ${product.price}</ul>
			<p>{product.description}</p>
			<p>{likes} Favorited </p>
			<button className="like-btn" onClick={handleLikeClick}>Favorite</button>
			<br></br>
			<button className="del-btn" onClick={handleDeleteClick}>Buy Now</button>
		</li>
	)
}