import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'

const Checkout = (props) => {
	const onApprove = async (data, actions) => {
		console.log(data)
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
						value: props.totalPrice
					}
				}
			]
		})
	}

	return (
		<div className="checkoutWrapper">
			<PayPalButton
				createOrder={(data, actions) => createOrder(data, actions)}
				onApprove={(data, actions) => onApprove(data, actions)}
        onError={(err) => onError(err)}
				amount={props.totalPrice}
				shippingPreference="NO_SHIPPING"
/* 				onSuccess={(details, data) => {
					alert('Transaction completed by ' + details.payer.name.given_name)
				}} */
			/>
		</div>
	)
}

export default Checkout
