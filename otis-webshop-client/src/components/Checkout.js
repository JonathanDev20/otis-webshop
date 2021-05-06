import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { Container, Col, Form } from 'react-bootstrap'

const Checkout = ({ totalPrice }) => {
  console.log(totalPrice)
	const onApprove = async (data, actions) => {
		const order = await actions.order.capture()
		console.log(order)
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

	return (
		<Container>
      <h1>Vänligen fyll i nedanstående fält</h1>
			<Form>
				<Form.Row>
					<Form.Group as={Col} controlId="formGridEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control required type="email" placeholder="john@doe.com" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridPassword">
						<Form.Label>Fullständigt namn</Form.Label>
						<Form.Control required type="text" placeholder="John Doe" />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress1">
					<Form.Label>Address</Form.Label>
					<Form.Control required placeholder="1234 Main St" />
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Stad</Form.Label>
						<Form.Control required />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridZip">
						<Form.Label>Postnummer</Form.Label>
						<Form.Control required />
					</Form.Group>
				</Form.Row>
			<div className="checkoutWrapper">
				<PayPalButton
					createOrder={(data, actions) => createOrder(data, actions)}
					onApprove={(data, actions) => onApprove(data, actions)}
					onError={(err) => onError(err)}
					amount={totalPrice}
					shippingPreference="NO_SHIPPING"
					onSuccess={(details, data) => {
						alert('Transaction completed by ' + details.payer.name.given_name)
					}}
				/>
			</div>
			</Form>
		</Container>
	)
}

export default Checkout
