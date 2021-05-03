import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext.js'

import axios from 'axios'

import Product from './Product.js'
import { Container, Col, Row, Button } from 'react-bootstrap'

const SearchPage = () => {
	const [products, setProducts] = useState([])
	const [search] = useContext(UserContext)

	useEffect(() => {
		async function getData() {
      console.log(search.value)
			try {
				const response = await axios.get(
					`http://localhost:5000/products/search/${search}`
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
							Tyvärr hittade vi inga resultat för "{search}", vänligen försök med något annat.
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
