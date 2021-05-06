import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserContext } from './context/UserContext.js'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Routing from './components/Routing'


function App() {

	const [cart, setCart] = useState([])
	const [quantity, setQuantity] = useState(1)
	const [search, setSearch] = useState('')
	const [totalPrice, setTotalPrice] = useState(0)
	
	// Use Effect
	useEffect(() => {
    getLocalTodos()
  }, [])

   useEffect(() => {
     saveLocalTodos()
   }, [cart])

	 // Save to localStorage
	 const saveLocalTodos = () => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}
	
	const getLocalTodos = () => {
		if(localStorage.getItem('cart') === null) {
			localStorage.setItem('cart', JSON.stringify([]))
		} else {
			let cartFromLocal = JSON.parse(localStorage.getItem('cart'))
			setCart(cartFromLocal)
		}
	}

	return (
		<>
		<Router>
			<UserContext.Provider value={[search, setSearch]}>
			<NavBar cart={cart.reduce((total, obj) => obj.quantity + total,0)} />
				<Routing totalPrice={totalPrice} setTotalPrice={setTotalPrice} cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} />
			<Footer />
			</UserContext.Provider>
		</Router>
		</>
	)
}

export default App
