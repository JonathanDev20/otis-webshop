import React from 'react'
import Product from './Product.js'
import useFetch from './useFetch.js'
import LoadingSpinner from './LoadingSpinner.js'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Jumbotron } from 'react-bootstrap'

const Pipes = ({ cart, setCart }) => {
	const [responseData, isLoading, error] = useFetch(process.env.REACT_APP_URL)
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
					<Row xl={3} lg={4} md={2} sm={2} xs={1}>
						{responseData.map((data) =>
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
