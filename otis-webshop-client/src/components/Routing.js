import React from 'react'

import { Switch, Route } from 'react-router-dom'
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

const Routing = () => {
	return (
		<Switch>
			<Route exact path="/">
				<MyHeader />
				<Container fluid>
					<Row style={{ textAlign: 'center' }}>
						<Col className="mb-3">
							<CategoryCard />
						</Col>
						<Col className="mb-3">
							<CategoryCard />
						</Col>
						<Col className="mb-3">
							<CategoryCard />
						</Col>
						<Col className="mb-3">
							<CategoryCard />
						</Col>
					</Row>
				</Container>
				<div className="m-4" style={{ textAlign: 'center' }}>
					<p style={{ color: 'blue' }}>Produkter</p>
					<h1>Våra Produkter</h1>
				</div>
				<Container fluid>
					<Row style={{ textAlign: 'center' }}>
						<Col className="mb-3">
							<Product />
						</Col>
						<Col className="mb-3">
							<Product />
						</Col>
						<Col className="mb-3">
							<Product />
						</Col>
						<Col className="mb-3">
							<Product />
						</Col>
					</Row>
					<Row style={{ textAlign: 'center' }}>
						<Col className="mb-3">
							<Product />
						</Col>
						<Col className="mb-3">
							<Product />
						</Col>
						<Col className="mb-3">
							<Product />
						</Col>
						<Col className="mb-3">
							<Product />
						</Col>
					</Row>
					<Row style={{ textAlign: 'center' }}>
						<Col className="mb-3">
							<Product />
						</Col>
						<Col className="mb-3">
							<Product />
						</Col>
						<Col className="mb-3">
							<Product />
						</Col>
						<Col className="mb-3">
							<Product />
						</Col>
					</Row>
				</Container>
			</Route>
			<Route path="/pipes">
				<Pipes />
			</Route>
			<Route path="/clothbags">
				<Clothbags />
			</Route>
			<Route path="/paintings">
				<Paintings />
			</Route>
			<Route path="/extras">
				<Extras />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/special">
				<SpecialOrder />
			</Route>
			<Route path="/cart">
				<Cart />
			</Route>
		</Switch>
	)
}

export default Routing
