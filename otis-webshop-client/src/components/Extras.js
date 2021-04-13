import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product.js'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

const Extras = () => {
  const [responseData, setResponseData] = useState([])

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get('http://localhost:5000/extras')
				setResponseData(response.data.extras)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [])
  return (
    <div>
      <h1>Detta är sidan för Övrigt.</h1>
      <Container>
			{responseData.map((data) => (
						<Col className="mb-3">
							<Product
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

export default Extras
