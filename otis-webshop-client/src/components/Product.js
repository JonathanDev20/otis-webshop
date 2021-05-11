import React from 'react'
import { Link } from 'react-router-dom'


// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import { MdAddShoppingCart } from 'react-icons/md'

const Product = (props) => {
	return (
		<Card key={props.productID}>
			<Card.Body>
				<Link to={`/product/${props.id}`}>
					<Card.Img
						className="hover-zoom"
						src={props.imgSrc}
						alt={props.imgAlt}></Card.Img>
				</Link>
				<Card.Title tag="h5">{props.title}</Card.Title>
				<Card.Subtitle tag="h6" className="m-3">
					{props.price}
				</Card.Subtitle>
				<Button href={`/product/${props.id}`} variant="dark" size="sm">
					Gå till produkt
				</Button>
			</Card.Body>
			<Button variant="success">
				Köp <MdAddShoppingCart />
			</Button>
		</Card>
	)
}

export default Product
