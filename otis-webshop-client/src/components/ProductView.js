import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Image, Button,Row } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const ProductView = () => {
	const [responseData, setResponseData] = useState([])
  const { id } = useParams()
  
	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(`http://localhost:5000/products/${id}`)
				setResponseData(response.data.productData)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [])

	return (
		<div>
			<h1>Det här sidan för en enskild produkt</h1>
			<Container>
				{responseData.map((data) => (
					<>
          <Row>
						<div className="productContent">
									<Image
										className="productImage mx-5"
										src={`.${data.imgSrc}`}
										alt={data.imgAlt}
										rounded
									/>
							<div
								className="productDescription m-5"
								style={{ textAlign: 'center'}}>
								<p>{data.title}</p>
								<p>{data.price}kr</p>
								<Button variant="success"><AiOutlineShoppingCart /> Lägg i varukorgen</Button>
							</div>
						</div>
						<div>
							<p style={{ textAlign: 'center' }} >{data.description}</p>
						</div>
            </Row>
					</>
				))}
			</Container>
		</div>
	)
}

export default ProductView
