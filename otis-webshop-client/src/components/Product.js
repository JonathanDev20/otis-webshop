import React from 'react'
import { Link } from 'react-router-dom'


// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import { MdAddShoppingCart } from 'react-icons/md'

const Product = (props) => {

	const buttonHandler = () => {
		// console.log(props)
		// props.setCart([...props.cart, { product: props, quantity: 1}])
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
					{props.price}
				</Card.Subtitle>
				<Button href={`/product/${props.id}`} variant="dark" size="sm">
					Gå till produkt
				</Button>
			</Card.Body>
			<Button onClick={() => buttonHandler()} variant="success">
				Köp <MdAddShoppingCart />
			</Button>
		</Card>
	)
}

export default Product
