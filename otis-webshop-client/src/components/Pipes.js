import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product.js'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

const Pipes = () => {
	const [responseData, setResponseData] = useState([])

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get('http://localhost:5000/pipes')
				setResponseData(response.data.pipes)
				/*  responseData.forEach(data => {
          console.log(data.title)
        }) */
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
					<Row>
			{responseData.map((data) => (
						<Col>
							<Product
								title={data.title}
								imgSrc={data.imgSrc}
								imgAlt={data.imgAlt}
                price={data.price + 'kr'}
							/>
						</Col>
			))}
      </Row>
    </Container>
		</div>
	)
}

export default Pipes
