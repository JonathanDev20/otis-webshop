import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Product from './Product.js'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const SearchPage = () => {
	const [products, setProducts] = useState([])
  let { slug } = useParams()

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(
					`https://otis-api.herokuapp.com/products/search/${slug}`
				)
				setProducts(response.data.products)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [])

	return (
		<div>
			{products.length === 0 ? 
				<Container>
					<div>
						<h1 className="notFoundTitle">404</h1>
						<p className="notFoundText">
							Tyvärr hittade vi inga resultat för "{slug}", vänligen försök med något annat.
						</p>
						<Button href="/" size="lg" className="m-3" variant="warning">Gå tillbaka</Button>
					</div>
				</Container>
			 : 
				<Container>
					<Row xl={3} lg={4} md={2} sm={2} xs={1}>
						{products.map((data) => (
							<Col key={data.id} className="mb-3">
								<Product
									id={data.id}
									productID={data.productID}
									title={data.title}
									imgSrc={data.imgSrc}
									imgAlt={data.imgAlt}
									price={data.price + 'kr'}
								/>
							</Col>
						))}
					</Row>
				</Container>
			}
		</div>
	)
}

export default SearchPage
