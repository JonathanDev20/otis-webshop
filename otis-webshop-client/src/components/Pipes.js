import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product.js'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col } from 'react-bootstrap'

const Pipes = () => {
	const [responseData, setResponseData] = useState([])

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get('http://localhost:5000/pipes')
				setResponseData(response.data.pipes)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [])

	return (
		<div>
			<h1>Detta är sidan för Pipor</h1>
			<Container>
				{responseData.map((data) => (
					<Col className="mb-3">
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
			</Container>
		</div>
	)
}

export default Pipes
