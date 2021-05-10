import React, { useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { Container, Jumbotron, Row, Col, Image, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Checkout = ({ cart, setCart }) => {
	const [showAlert, setShowAlert] = useState(true)
	let history = useHistory()
	const onApprove = async (data, actions) => {
		const order = await actions.order.capture()
		console.log(order)
	}

	let totalPrice = 0
	for (let i = 0; i < cart.length; i++) {
		totalPrice += cart[i].product.price * cart[i].quantity
	}

	const onError = (err) => {
		console.log(err)
	}

	const createOrder = (data, actions) => {
		return actions.order.create({
			intent: 'CAPTURE',
			purchase_units: [
				{
					amount: {
						currency_code: 'SEK',
						value: totalPrice
					}
				}
			]
		})
	}

	const onSuccess = (details, data) => {
		setCart([])
		history.push('/')
		return (
			<Alert show={showAlert} variant="success" onClose={() => setShowAlert(false)} dismissible>
				Transaction completed by {details.payer.name.given_name}
			</Alert>
		)
	}

	return (
		<Container>
			<Jumbotron style={{ height: '40vh' }} className="paymentPage">
				<h1 className="test">Nu är du snart klar med din beställning!</h1>
			</Jumbotron>

			{cart.map((product) => (
				<Row className="checkoutProducts">
					<Col>
						<Image
							rounded
							src={product.product.imgSrc}
							style={{ width: '10vh', height: '100%' }}
						/>
					</Col>
					<Col>
						<h2 variant="warning">{product.product.title}</h2>
						<h3>{product.product.price}kr</h3>
						<h4>{product.quantity}st</h4>
					</Col>
				</Row>
			))}

			<Row>
				<Col>
					<h3>Att betala: {totalPrice}kr</h3>
				</Col>
				<Col>
					<div className="checkoutWrapper">
						<PayPalButton
							createOrder={(data, actions) => createOrder(data, actions)}
							onApprove={(data, actions) => onApprove(data, actions)}
							onError={(err) => onError(err)}
							amount={totalPrice}
							shippingPreference="NO_SHIPPING"
							onSuccess={(details, data) => onSuccess(details, data)}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Checkout
