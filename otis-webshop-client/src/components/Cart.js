// Import React
import React from 'react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

// Import React-Router
import { Link  } from 'react-router-dom'

/**
 * A component that represents a shopping cart.
 * 
 * @param {Object} - An Object with state properties.  
 * @returns {JSX} - JSX to represent either an empty cart or a cart with products.
 */
const Cart = ({ cart, setCart, setQuantity }) => {
  const deleteHandler = (product, current) => {
    if(current.quantity <= 1) {
      setCart(cart.filter((el) => el.product.productID !== product))
    } else {
      setCart([...cart], setQuantity(current.quantity -= 1))
    }
	}
  
    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
      totalPrice += (cart[i].product.price * cart[i].quantity)
    }

	// A cart with no products.
	const EmptyCart = () => (
		<div className="cartItems p-3 m-2">
			<div className="emptyCart">
				<div className="emptyCartText">
				<h3>
					Oops.. Här verkade det vara tomt, kom tillbaka med lite produkter
				</h3>
        <Button variant="warning" href="/">Gå tillbaka till startsidan</Button>
				</div>
			</div>
		</div>
	)

	// A cart that contains at least one product.
	const FilledCart = () => (
    <div className="cartItems p-3 m-3">
			<h1 style={{ textAlign: 'center' }} className="logo">Välkommen till din varukorg</h1>
			<Row className="my-3" lg={3} md={3} sm={2} xs={1}>
				{cart.map((product) => (
					<Col key={product.product.productID}>
						<Card className="my-2">
							<Card.Body>
							<Card.Img src={product.product.imgSrc} alt={product.product.ImgAlt} />
								<Card.Title>{product.product.title}</Card.Title>
                <Card.Text className="productQuantityInCart">Antal: {product.quantity}st</Card.Text>
								<Card.Text className="productInCartPrice">{product.product.price}kr</Card.Text>
                <Col className="chooseQuantity">
								<Button
									onClick={() => deleteHandler(product.product.productID, product)}
									size="md"
									variant="outline-danger">
									-
								</Button>
                <Card.Text className="quantityBetween">{product.quantity}</Card.Text>
                <Button onClick={() => setCart([...cart], setQuantity(product.quantity += 1))} variant="outline-success">+</Button>
                </Col>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<Row className="cartActions">
        <Col>
				<h3>Totalt att betala: {totalPrice}kr</h3>
				<Button onClick={() => setCart([])} variant="danger" className="m-1">Rensa Varukorg</Button>
        <Link to="/checkout">
          <Button variant="success">Gå vidare till köp</Button>
        </Link>
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
