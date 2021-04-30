import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Routing from './components/Routing'

function App() {

	const [cart, setCart] = useState([])
	const [search, setSearch] = useState('')
	
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
	
			<NavBar cart={cart.length} search={search} setSearch={setSearch} />
				<Routing cart={cart} setCart={setCart} search={search} setSearch={setSearch} />
			<Footer />
		</Router>
		</>
	)
}

export default App
