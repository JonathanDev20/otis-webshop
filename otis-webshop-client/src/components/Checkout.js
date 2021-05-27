// Import React
import React from 'react'
// Import PayPalButton
import { PayPalButton } from 'react-paypal-button-v2'
// Import Bootstrap
import { Container, Jumbotron, Row, Col, Image, Button } from 'react-bootstrap'
// Import React-Router
import { useHistory } from 'react-router-dom'
// Import Context
import { AlertContext } from '../context/AlertContext.js'
// Import Axios
import axios from 'axios'

/**
 * A component to represent a checkout-page and payment.
 * 
 * @param {Object} - State properties. 
 * @returns - A page to checkout products. 
 */
const Checkout = ({ cart, setCart }) => {
	const { setShow, setMsg, setType } = React.useContext(AlertContext)

	let history = useHistory()
	const onApprove = async (data, actions) => {
		await actions.order.capture()
	}

	let totalPrice = 0
	for (let i = 0; i < cart.length; i++) {
		totalPrice += cart[i].product.price * cart[i].quantity
	}

	const onError = (err) => {
		console.log(err)
	}

	// Creates the order.
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

	// Get data from successful payment.
	const getPaymentData = async (details) => {
		const paymentObject = {
			id: details.id,
			payerEmail: details.payer.email_address,
			payerName: details.purchase_units[0].shipping.name.full_name,
			amount: details.purchase_units[0].amount.value,
			payerAddressStreet: details.purchase_units[0].shipping.address.address_line_1,
			payerAddressCity: details.purchase_units[0].shipping.address.admin_area_2,
			payerAddressCountry: details.purchase_units[0].shipping.address.admin_area_1,
			payerAddressPostalCode: details.purchase_units[0].shipping.address.postal_code,
			products: cart,
			totalPrice: totalPrice
		}

		// Post data to backend.
		try {
			await axios(process.env.REACT_APP_ORDERSPECIFICATION, {
				method: 'POST',
				data: paymentObject
			})
		} catch (error) {
			console.log(error)
		}
	}

	// Listen for a successful payment.
	const onSuccess = (details, data) => {
		getPaymentData(details)
		setCart([])
		history.push('/')
		setShow(true)
		setMsg('Tack För Ditt Köp')
		setType('success')
	}

	return cart.length < 1 ? (
		<div className="cartItems p-3 m-2">
			<div className="emptyCart">
				<div className="emptyCartText">
					<h3>
						Det verkar som att du inte har några produkter i din varukorg.
					</h3>
					<Button variant="warning" href="/">
						Gå tillbaka till startsidan
					</Button>
				</div>
			</div>
		</div>
	) : (
		<Container>
			<Jumbotron style={{ height: '40vh' }} className="paymentPage">
				<h1 className="checkoutHeaderText">
					Nu är du snart klar med din beställning!
				</h1>
			</Jumbotron>

			{cart.map((product) => (
					<div className="checkoutProducts">
						<Image
							rounded
							src={product.product.imgSrc}
							style={{ width: '10vh', height: '100%', objectFit: 'cover' }}
						/>
						<div style={{ textShadow: '2px 10px 20px' }}>
						<h4 style={{ color: 'black' }}>{product.quantity} st</h4>
						<h2 style={{ marginLeft: '5px' }}>{product.product.title}</h2>
						</div>
						<h3>{product.product.price}kr</h3>
					</div>
			))}

			<Row>
				<Col>
					<h3 style={{ textShadow: '5px 4px 10px #666' }}>Att betala: {totalPrice}kr</h3>
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
