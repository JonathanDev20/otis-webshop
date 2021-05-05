import React from 'react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'


const Cart = ({ cart, setCart }) => {
  const deleteHandler = (product) => {
    setCart(cart.filter((el) => el.product.productID !== product))
	}
  
	let totalPrice = 0
	for (let i = 0; i < cart.length; i++) {
		totalPrice += (cart[i].product.price * cart[i].quantity) 
	}
  
	const EmptyCart = () => (
		<div className="cartItems p-3 m-2">
			<div className="emptyCart">
				<h3>
					Oops.. Här verkade det vara tomt, kom tillbaka med lite produkter
				</h3>
			</div>
		</div>
	)

	const FilledCart = () => (
		<div className="cartItems p-3 m-2">
			<h3>Välkommen till din varukorg</h3>
			<Row className="my-3" lg={3} md={3} sm={2} xs={1}>
				{cart.map((product) => (
					<Col key={product.product.productID}>
						<Card className="m-2">
							<Card.Img src={product.product.imgSrc} alt={product.product.ImgAlt} />
							<Card.Body>
								<Card.Title className="m-3">{product.product.title}</Card.Title>
                <Card.Text>Antal: {product.quantity}</Card.Text>
								<Card.Text>{product.product.price}kr</Card.Text>
								<Button
									onClick={() => deleteHandler(product.product.productID)}
									size="md"
									variant="outline-danger">
									Ta bort
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<Row className="align-items-center">
        <Col>
				<h4>Totalt: {totalPrice}kr</h4>
        </Col>
        <Col>
				<Button onClick={() => setCart([])} variant="danger" className="m-1">Rensa Varukorg</Button>
        <Button variant="success">Gå vidare till köp</Button>
        </Col>
			</Row>
		</div>
	)

	return (
		<div>
			<Container>{!cart.length ? <EmptyCart /> : <FilledCart />}</Container>
		</div>
	)
}

export default Cart
