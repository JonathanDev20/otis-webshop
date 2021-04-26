import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {
	Container,
	Image,
	Button,
	Row,
	InputGroup,
	Tabs,
	Tab,
	Jumbotron,
	Table
} from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const ProductView = ({ cart, setCart }) => {
	const [responseData, setResponseData] = useState([])
	const { id } = useParams()

	const input = React.createRef()

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
			<Container>
				{responseData.map((data) => (
					<>
						<Jumbotron style={{ background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)' }}>
							<Container className="m-2">
								<h1>{data.title}</h1>
								<p>
									Här hittar du mer information kring den produkten du valde att klicka dig in på.
								</p>
							</Container>
						</Jumbotron>
						<Row>
							<div className="productContent">
								<Image
									className="productImage mx-5"
									src={data.imgSrc}
									alt={data.imgAlt}
									rounded
								/>
								<div
									className="productDescription m-5"
									style={{ textAlign: 'center' }}>
									<p style={{ fontSize: '30px' }}>{data.title}</p>
									<p>Product ID: {data.productID}</p>
									<p style={{ color: 'red', fontSize: '20px' }}>
										{data.price}kr
									</p>
									<InputGroup>
										<input
											ref={input}
											type="number"
											className="form-control"
											min="1"
											max="10"
											placeholder="1"
										/>
										<Button
											onClick={() => setCart([...cart, data])}
											variant="success"
											type="submit">
											<AiOutlineShoppingCart /> Lägg i varukorgen
										</Button>
									</InputGroup>
								</div>
							</div>
							<div className="container m-5">
								<Tabs className="my-2" defaultActiveKey="description">
									<Tab eventKey="description" title="Beskrivning">
										{data.description}
									</Tab>
									<Tab eventKey="moreInfo" title="Mer Info">
										<Table>
											<thead>
												<tr>
												<td> Material</td>
												<td>Ek</td>
												</tr>
												<tr>
													<td>Färg</td>
													<td>Röd</td>
												</tr>
												<tr>
													<td>Tilkommer tygkasse</td>
													<td>Ja</td>
												</tr>
											</thead>
										</Table>
									</Tab>
									<Tab eventKey="review" title="Recensioner">
										blahblah
									</Tab>
								</Tabs>
							</div>
						</Row>
					</>
				))}
			</Container>
		</div>
	)
}

export default ProductView
