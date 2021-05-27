// Import React
import React, { useEffect, useState } from 'react'
// Import Axios
import axios from 'axios'
// Import React-Router
import { Switch, Route } from 'react-router-dom'
// Import Bootstrap
import { Container, Row, Col } from 'react-bootstrap'
// Import components
import MyHeader from './MyHeader.js'
import CategoryCard from './CategoryCard.js'
import Product from './Product.js'
import Pipes from './Pipes.js'
import Clothbags from './Clothbags.js'
import Paintings from './Paintings.js'
import Extras from './Extras.js'
import About from './About.js'
import Cart from './Cart.js'
import SpecialOrder from './SpecialOrder.js'
import ProductView from './ProductView.js'
import SearchPage from './SearchPage.js'
import Checkout from './Checkout.js'
import NotFound from './NotFound.js'

/**
 * A component to navigate to correct component.
 * 
 * @param {Object} - State properties. 
 * @returns {JSX} - Links to each component.
 */
const Routing = ({ cart, setCart, quantity, setQuantity }) => {
	const [responseData, setResponseData] = useState([])
	const [categoryData, setCategoryData] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		// Get random products from backend
		async function getData() {
			try {
				const response = await axios.get(process.env.REACT_APP_RANDOM)
				if (response.status !== 200) {
					throw Error('Could not fetch the data for that resource')
				} 
				setResponseData(response.data.productData)
				setError(null)
			} catch (error) {
				setError(error)
			}
		}
		getData()
		getCategories()
	}, [])

	// Get category data
	async function getCategories() {
		try {
			const response = await axios.get(process.env.REACT_APP_CATEGORIES)
			if (response.status !== 200) {
				throw Error('Could not fetch the data for that resource')
			} 
			setCategoryData(response.data.allCategories)
			setError(null)
		} catch (error) {
			setError(error)
		}
	}
	return (
		<Switch>
			<Route exact path="/">
				<MyHeader />
				<Container fluid>
					{ error && <div>{ error }</div> }
					<Row lg={4} md={2} sm={2} xs={1}>
						{categoryData.map((data) => (
							<Col key={data.id} className="mb-3">
								<CategoryCard
									imgSrc={data.imgSrc}
									imgAlt={data.imgAlt}
									title={data.title}
									description={data.description}
									path={data.path}
								/>
							</Col>
						))}
					</Row>
				</Container>
				<div className="m-4" style={{ textAlign: 'center' }}>
					<p style={{ color: 'blue' }}>Produkter</p>
					<h1>Våra Produkter</h1>
				</div>
				<Container fluid>
				{ error && <div>{ error }</div> }
					<Row lg={4} md={3} sm={2} xs={1}>
						{responseData.map((data) => (
							<Col key={data.id} className="mb-3">
								<Product
									id={data.id}
									cart={cart}
									setCart={setCart}
									productID={data.productID}
									title={data.title}
									imgSrc={data.imgSrc}
									imgAlt={data.imgAlt}
									price={data.price}
								/>
							</Col>
						))}
					</Row>
				</Container>
			</Route>
			<Route path="/pipes">
				<Pipes cart={cart} setCart={setCart} />
			</Route>
			<Route path="/clothbags">
				<Clothbags cart={cart} setCart={setCart} />
			</Route>
			<Route path="/paintings">
				<Paintings cart={cart} setCart={setCart} />
			</Route>
			<Route path="/extras">
				<Extras cart={cart} setCart={setCart} />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/special">
				<SpecialOrder />
			</Route>
			<Route path="/cart">
				<Cart cart={cart} setCart={setCart} quantity={quantity} setQuantity={setQuantity} />
			</Route>
			<Route path="/search/:slug">
				<SearchPage cart={cart} setCart={setCart} />
			</Route>
			<Route path="/checkout">
				<Checkout cart={cart} setCart={setCart} />
			</Route>
			<Route
				path="/product/:id"
				render={(props) => (
					<ProductView cart={cart} setCart={setCart} {...props} quantity={quantity} setQuantity={setQuantity} />
				)}></Route>
				<Route path="*">
					<NotFound />
				</Route>
		</Switch>
	)
}

export default Routing
