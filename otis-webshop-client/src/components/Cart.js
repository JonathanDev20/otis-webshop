import React from 'react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Cart = ({ cart, setCart }) => {
  const deleteHandler = (product) => {
    setCart(cart.filter(el => el.productID !== product))
  }

  const EmptyCart = () => (
    <div className="cartItems p-3 m-2">
      <div className="emptyCart">
      <h3>Oops.. Här verkade det vara tomt, kom tillbaka med lite produkter</h3>
      </div>
    </div>
  )

  const FilledCart = () => (
    <div className="cartItems p-3 m-2">
        <h3>Detta är dina produkter!</h3>
				<Row className="my-3" lg={4} md={3} sm={2} xs={1}>
					{cart.map((product) => (
            <Col>
						<Card className="m-2">
							<Card.Img src={product.imgSrc} alt={product.ImgAlt} />
							<Card.Body>
								<Card.Title className="m-3">{product.title}</Card.Title>
								<Card.Text>{product.price}kr</Card.Text>
								<Button onClick={() => deleteHandler(product.productID)} size="md" variant="danger">
									Ta bort
								</Button>
							</Card.Body>
						</Card>
            </Col>
					))}
				</Row>
        </div>
  )

	return (
		<div>
			<h1>Detta är sidan för Varukorgen.</h1>
			<Container>
        {!cart.length ? <EmptyCart /> : <FilledCart />}
			</Container>
		</div>
	)
}

export default Cart
