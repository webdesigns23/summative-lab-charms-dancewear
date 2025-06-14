import { useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom"


export default function ProductForm() {
	const { setProducts } = useOutletContext
	const navigate = useNavigate();	
	const [productData, setProductData] = useState({
		name: "",
		image: "",
		description: "",
		category: "",
		price: ""
	})

	function handleAddProduct(newProduct) {
		setProducts(previousProduct => [...previousProduct, newProduct])
	}

	const handleSubmit = event => {
		event.preventDefault()
		const newProduct = {
			...productData,
			likes: 0
		}
		fetch("http://localhost:3000/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(newProduct)
		})
			.then(r => {
				if (!r.ok) { throw new Error("failed to add product") }
				return r.json()
			})
			.then(newProduct => {
				handleAddProduct(newProduct)
				setProductData({
					name: "",
					image: "",
					description: "",
					category: "",
					price: ""
				})
				navigate("/admin")
			})
			.catch(console.error)
	}

	const handleChange = event => {
		setProductData(previousData => ({
			...previousData,
			[event.target.name]: event.target.value
		}))
	};

	return (
		<div className="container">
			<h2>Add New Product</h2>
			<form className="add-product-form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="Enter Style Name..."
					value={productData.name}
					onChange={handleChange}
					required/>
				<input
					type="text"
					name="image"
					placeholder="Enter Product Image..."
					value={productData.image}
					onChange={handleChange}
					required/>
				<input
					type="text"
					name="description"
					placeholder="Enter Product Description..."
					value={productData.description}
					onChange={handleChange}
					required/>
				<input
					type="text"
					name="category"
					placeholder="Enter Product Category..."
					value={productData.category}
					onChange={handleChange}
					required/>
				<input
					type="text"
					name="price"
					placeholder="Enter Product Price..."
					value={productData.price}
					onChange={handleChange}
					required/>
				<button type="submit">Add Product</button>
			</form>
		</div>
	)
};


