import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import { MdAddShoppingCart } from 'react-icons/md'

const Product = (props) => {
	const [productAddedToCart, setProductAddedToCart] = useState(false)

	useEffect(() => {
		if (productAddedToCart) {
			const timeoutID = setTimeout(() => {
				setProductAddedToCart(false)
			}, 2000)

			return () => {
				clearTimeout(timeoutID)
			}
		}
	}, [productAddedToCart])

	const addToCart = (data) => {
		setProductAddedToCart(true)
		const newProduct = { product: data, quantity: 1 }
		const currentIndex = props.cart.find(
			(product) => product.product.productID === newProduct.product.productID
		)
		if (currentIndex) {
			const newItemsInCart = props.cart.map((item) => {
				return item.product.productID === newProduct.product.productID
					? {
							product: newProduct.product,
							quantity: newProduct.quantity + item.quantity
					  }
					: item
			})
			props.setCart(newItemsInCart)
		} else {
			props.setCart([...props.cart, newProduct])
		}
	}

	return (
		<Card key={props.productID}>
			<Card.Body>
				<Link to={`/product/${props.id}`}>
					<Card.Img
						className="hover-zoom"
						src={props.imgSrc}
						alt={props.imgAlt}></Card.Img>
				</Link>
				<Card.Title tag="h4">{props.title}</Card.Title>
				<Card.Subtitle tag="h5" className="m-3">
					{props.price}kr
				</Card.Subtitle>
				<Button href={`/product/${props.id}`} variant="dark" size="sm">
					Gå till produkt
				</Button>
			</Card.Body>
			<Button
				disabled={productAddedToCart}
				onClick={() => addToCart(props)}
				variant="success">
				<MdAddShoppingCart />{' '}
				{productAddedToCart ? 'Tillagd i varukorgen!' : 'Köp'}
			</Button>
		</Card>
	)
}

export default Product
