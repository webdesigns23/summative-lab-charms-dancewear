
import React from "react";
import { useOutletContext, useParams} from "react-router-dom";

export default function ProductCard({product}) {

	return (
		<li className="card" data-testid="product-item">
			<img src={product.image} width={"50px"} alt={product.name} />
			<h4>{product.name}</h4>
			<ul>Price: ${product.price}</ul>
			<p>{product.description}</p>
		</li>
	)
}