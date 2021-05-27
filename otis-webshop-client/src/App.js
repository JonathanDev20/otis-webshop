// Import React
import React, { useState, useEffect } from 'react'
// Import CSS
import './App.css'
// Import React-Router
import { BrowserRouter as Router } from 'react-router-dom'
// Import Context
import { UserContext } from './context/UserContext.js'
import GlobalState from './context/AlertContext.js'
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// Import Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Routing from './components/Routing'
import Alerts from './components/Alerts'

/**
 * Starting point of the application.
 * 
 * @returns - The application
 */
function App() {
	const [cart, setCart] = useState([])
	const [quantity, setQuantity] = useState(1)
	const [search, setSearch] = useState('')
	const [totalPrice, setTotalPrice] = useState(0)

	// Use Effect
	useEffect(() => {
		getLocalCart()
	}, [])

	useEffect(() => {
		saveLocalCart()
	}, [cart])

	// Save to localStorage
	const saveLocalCart = () => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}

	const getLocalCart = () => {
		if (localStorage.getItem('cart') === null) {
			localStorage.setItem('cart', JSON.stringify([]))
		} else {
			let cartFromLocal = JSON.parse(localStorage.getItem('cart'))
			setCart(cartFromLocal)
		}
	}

	return (
		<>
			<GlobalState>
				<Router>
					<UserContext.Provider value={[search, setSearch]}>
						<NavBar
							cart={cart.reduce((total, obj) => obj.quantity + total, 0)}
						/>
						<Alerts type="success" show={false} msg='hej' />
						<Routing
							totalPrice={totalPrice}
							setTotalPrice={setTotalPrice}
							cart={cart}
							setCart={setCart}
							quantity={quantity}
							setQuantity={setQuantity}
						/>
						<Footer />
					</UserContext.Provider>
				</Router>
			</GlobalState>
		</>
	)
}

export default App
