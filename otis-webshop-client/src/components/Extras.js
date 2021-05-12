import React from 'react'
import Product from './Product.js'
import useFetch from './useFetch.js'
import LoadingSpinner from './LoadingSpinner.js'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row, Jumbotron } from 'react-bootstrap'

const Extras = () => {
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
							<h1 className="logo">Övrigt</h1>
							<p>
								Här hittar du vårt fina utbud av övriga produkter. Välj bland
								olika stilar och produkter.
							</p>
						</Container>
					</Jumbotron>
					<Row xl={3} lg={4} md={2} sm={2} xs={1}>
						{responseData.map((data) =>
							data.productCategory === 'extras' ? (
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
							) : null
						)}
					</Row>
				</Container>
			)}
		</div>
	)
}

export default Extras
