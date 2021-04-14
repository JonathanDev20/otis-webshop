import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Image } from 'react-bootstrap'

const ProductView = () => {
	const [responseData, setResponseData] = useState([])
	const { id } = useParams()

	useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(`http://localhost:5000/${id}`)
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
						<div className="productContent">
								<div>
									<Image
										className="productImage mx-5"
										src={`.${data.imgSrc}`}
										alt={data.imgAlt}
										rounded
									/>
								</div>
							<div
								className="productDescription mx-auto"
								style={{ textAlign: 'center'}}>
								<p>{data.title}</p>
								<p>{data.price}</p>
								<p>Add to cart</p>
							</div>
						</div>
						<div>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Explicabo, at architecto dolorum iure similique consectetur libero
							sunt placeat minima nulla magnam quam aliquid facilis quas iusto
							voluptatibus! Unde, animi velit.
						</div>
					</>
				))}
			</Container>
		</div>
	)
}

export default ProductView
