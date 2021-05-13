import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Product from './Product.js'
import {
	Container,
	Col,
	Row,
	Button,
	Jumbotron
} from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner.js'

const SearchPage = () => {
	const [products, setProducts] = useState([])
	const [isLoading, setIsLoading] = useState(true)
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
							<h1 className="logo">Sökresultat</h1>
							<p>Visar resultatet av "{slug}".</p>
						</Container>
					</Jumbotron>
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
			) : (
					<div className="not-found">
						<div className="not-found-container">
							<h1>404</h1>
							<h2>Tyvärr hittade vi inga resultat för "{slug}"</h2>
							<p>
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
