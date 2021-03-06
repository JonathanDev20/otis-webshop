// Import React
import React, { useState } from 'react'
// Import Product component
import Product from './Product.js'
// Import Custom Hook
import useFetch from './useFetch.js'
// Import LoadingSpinner component
import LoadingSpinner from './LoadingSpinner.js'
// Import Sorting component
import Sorting from './Sorting.js'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Jumbotron } from 'react-bootstrap'

/**
 * Represents a page to show product that belongs to the category "Clothbags".
 * 
 * @param {Object} - State properties.
 * @returns {JSX} - A page to show clothbag products.
 */
const Clothbags = ({ cart, setCart }) => {
	const [responseData, isLoading, error] = useFetch(process.env.REACT_APP_URL)
	const [filteredProducts, setFilteredProducts] = useState([])
	const [sort, setSort] = useState('default')
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
							<h1 className="logo mb-2">Tygkassar</h1>
							<p>
								Här hittar du vårt fina utbud av tygkassar. Välj bland olika
								stilar och färger.
							</p>
						</Container>
					</Jumbotron>
					<Sorting
						sort={sort}
						setSort={setSort}
						filteredProducts={filteredProducts}
						setFilteredProducts={setFilteredProducts}
						responseData={responseData}
					/>
					<Row xl={3} lg={4} md={2} sm={2} xs={1}>
						{filteredProducts.map((data) =>
							data.productCategory === 'clothbag' ? (
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
							) : null
						)}
					</Row>
				</Container>
			)}
		</div>
	)
}

export default Clothbags
