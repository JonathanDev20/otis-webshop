import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Product.js'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Col, Row } from 'react-bootstrap'

const Extras = () => {
  const [responseData, setResponseData] = useState([])

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get('http://localhost:5000/products/load')
				setResponseData(response.data.allProducts)
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
			<Row lg={3} md={2} sm={2} xs={1}>
			{responseData.map((data) => data.productCategory === 'extras' ? (
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
			):null)}
			</Row>
    </Container>
    </div>
  )
}

export default Extras
