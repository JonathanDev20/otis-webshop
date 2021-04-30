import React, {useState, useEffect} from 'react'

import axios from 'axios'

import Product from './Product.js'
import { Container, Col, Row } from 'react-bootstrap'

const SearchPage = ({ search }) => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    async function getData() {
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
  },[])

  return (
    <div>
      <Container>
      <Row xl={3} lg={4} md={2} sm={2} xs={1}>
					{products.map((data) =>
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
					)}
				</Row>
			</Container>
    </div>
  )
}

export default SearchPage
