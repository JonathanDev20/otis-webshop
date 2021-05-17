import React, { useState, useEffect } from 'react'
import Product from './Product.js'
import useFetch from './useFetch.js'
import LoadingSpinner from './LoadingSpinner.js'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Jumbotron } from 'react-bootstrap'

const Pipes = ({ cart, setCart }) => {
	const [responseData, isLoading, error] = useFetch(process.env.REACT_APP_URL)
	const [filteredProducts, setFilteredProducts] = useState(responseData)
	const [sort, setSort] = useState(null)

	useEffect(() => {
		console.log(sort)
		setFilteredProducts(responseData)
		sortProducts()
	}, [sort, responseData])

	const sortProducts = async () => {
		if (sort === 'price') {
			 setFilteredProducts(
				filteredProducts.sort((a, b) => (a.price > b.price ? 1 : -1))
			)
		} else if (sort === 'alphabetic') {
			 setFilteredProducts(
				filteredProducts.sort((a, b) => (a.title > b.title ? 1 : -1))
			)
		} else {
			setFilteredProducts(responseData)
		}
	}
	return (
		<div>
			{error && <div>{error}</div>}
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<Container>
					<Jumbotron
						style={{
							background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
						}}>
						<Container className="m-2">
							<h1 className="logo">Pipor</h1>
							<p>
								Här hittar du vårt fina utbud av pipor. Välj bland olika stilar
								och färger.
							</p>
						</Container>
					</Jumbotron>
					<div>
						<select onChange={(e) => setSort(e.target.value)}>
							<option>Sortera produkter</option>
							<option value="price">Pris stigande</option>
							<option value="alphabetic">A-Ö</option>
						</select>
					</div>
					<Row xl={3} lg={4} md={2} sm={2} xs={1}>
						{filteredProducts.map((data) =>
							data.productCategory === 'pipes' ? (
								<Col key={data.id} className="mb-3">
									<Product
										cart={cart}
										setCart={setCart}
										id={data.id}
										productID={data.productID}
										title={data.title}
										imgSrc={data.imgSrc}
										imgAlt={data.imgAlt}
										price={data.price + 'kr'}
									/>
								</Col>
							) : null
						)}
					</Row>
				</Container>
			)}
		</div>
	)
}

export default Pipes
