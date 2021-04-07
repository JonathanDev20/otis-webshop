import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import MyHeader from './MyHeader.js'
import CategoryCard from './CategoryCard.js'
import Product from './Product.js'
 
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
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
				</Row>
				<Row style={{ textAlign: 'center' }}>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
				</Row>
				<Row style={{ textAlign: 'center' }}>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
					<Col className="mb-3"><Product /></Col>
				</Row>
			</Container>
      </Route>

      <Route path="/pipes">
        <h1>Hello World!</h1>
      </Route>
    </Switch>
  )
}

export default Routing
