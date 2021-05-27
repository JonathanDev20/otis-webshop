// Import React
import React, { useState, useEffect } from 'react'
// Import Axios
import axios from 'axios'
// Import Bootstrap
import { Container, Col, Row, Button, Jumbotron } from 'react-bootstrap'
// Import React-Router
import { useParams, Link } from 'react-router-dom'
// Import components
import Product from './Product.js'
import LoadingSpinner from './LoadingSpinner.js'
import Sorting from './Sorting.js'

/**
 * Represents a page with search results.
 * 
 * @param {Object} - State properties.
 * @returns - A page to show result from a search.
 */
const SearchPage = ({ cart, setCart }) => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [filteredProducts, setFilteredProducts] = useState([])
	const [sort, setSort] = useState('default')
	let { slug } = useParams()

	useEffect(() => {
		setTimeout(() => {
			async function getData() {
				try {
					setIsLoading(isLoading)
					const response = await axios.get(
						`https://otis-api.herokuapp.com/products/search/${slug}`
					)
					setIsLoading(false)
					setProducts(response.data.products)
				} catch (error) {
					console.log(error)
				}
			}
			getData()
		}, 500)
	}, [slug, isLoading])

	return (
		<div>
			{isLoading ? (
				<LoadingSpinner />
			) : products.length > 0 ? (
				<Container>
					<Jumbotron
						style={{
							background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
						}}>
						<Container className="m-2">
							<h1 className="logo mb-2">Sökresultat</h1>
							<p>Visar resultatet av "{slug}".</p>
						</Container>
					</Jumbotron>
					<Sorting
						sort={sort}
						setSort={setSort}
						filteredProducts={filteredProducts}
						setFilteredProducts={setFilteredProducts}
						responseData={products}
					/>
					<Row xl={3} lg={4} md={2} sm={2} xs={1}>
						{filteredProducts.map((data) => (
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
			) : (
				<div className="not-found">
					<div className="not-found-container">
						<h1>404</h1>
						<h2 className="mb-3">
							Tyvärr hittade vi inga resultat för "{slug}"
						</h2>
						<p className="mb-3">
							Vänligen försök med något annat eller gå tillbaka till startsidan.
						</p>
						<Link to="/">
							<Button>Till startsidan..</Button>
						</Link>
					</div>
				</div>
			)}
		</div>
	)
}

export default SearchPage
