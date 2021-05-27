// Import React
import React, { useEffect, useState } from 'react'
// Import Axios
import axios from 'axios'
// Import React-Router
import { useParams } from 'react-router-dom'
// Import LoadingSpinner component
import LoadingSpinner from './LoadingSpinner'
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
	Table,
	Form
} from 'react-bootstrap'
// Import react-icons
import { AiOutlineShoppingCart } from 'react-icons/ai'
// Import ProductRating component
import ProductRating from './ProductRating'

/**
 * Represents a page to show a specific product.
 * 
 * @param {Object} - State properties. 
 * @returns {JSX} - A specific product-page.
 */
const ProductView = ({ cart, setCart, quantity, setQuantity }) => {
	const [responseData, setResponseData] = useState([])
	const [productAddedToCart, setProductAddedToCart] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	const [rating, setRating] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		if (productAddedToCart) {
			const timeoutID = setTimeout(() => {
				setProductAddedToCart(false)
			}, 2000)

			return () => {
				clearTimeout(timeoutID)
			}
		}
	}, [productAddedToCart])

	useEffect(() => {
		setTimeout(() => {
			async function getData() {
				try {
					const response = await axios.get(
						`https://otis-api.herokuapp.com/products/${id}`
					)
					setResponseData(response.data.productData)
					setIsLoading(false)
				} catch (error) {
					console.log(error)
				}
			}
			getData()
		}, 200)
	}, [id])

	// Add the product to cart.
	const addToCart = (data) => {
		setProductAddedToCart(true)
		const newProduct = { product: data, quantity }
		const currentIndex = cart.find(
			(product) => product.product.productID === newProduct.product.productID
		)
		if (currentIndex) {
			const newItemsInCart = cart.map((item) => {
				return item.product.productID === newProduct.product.productID
					? {
							product: newProduct.product,
							quantity: newProduct.quantity + item.quantity
					  }
					: item
			})
			setCart(newItemsInCart)
		} else {
			setCart([...cart, newProduct])
		}
	}

	return (
		<div>
			{isLoading ? (
				<LoadingSpinner />
			) : (
				<Container>
					{responseData.map((data) => (
						<>
							<div key={data.productID}>
								<Jumbotron
									style={{
										background:
											'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
									}}>
									<Container className="m-2">
										<h1>{data.title}</h1>
										<p>
											Här hittar du mer information kring den produkten du valde
											att klicka dig in på.
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
											<p style={{ fontSize: '30px', marginBottom: '1rem' }}>
												{data.title}
											</p>
											<p style={{ marginBottom: '1rem' }}>
												ArtikelNr: {data.productID}
											</p>
											<p
												style={{
													color: 'red',
													fontSize: '20px',
													marginBottom: '1rem'
												}}>
												{data.price}kr
											</p>
											<InputGroup>
												<input
													type="number"
													className="form-control"
													min="1"
													max="10"
													value={quantity}
													onChange={(e) => setQuantity(Number(e.target.value))}
												/>
												<Button
													onClick={() => addToCart(data)}
													disabled={productAddedToCart}
													variant="success"
													type="submit">
													<AiOutlineShoppingCart />{' '}
													{productAddedToCart
														? 'Tillagd i varukorgen!'
														: 'Lägg i varukorgen'}
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
												<div
													style={{
														textAlign: 'center',
														fontSize: '1.2rem',
														color: 'red'
													}}>
													<p>
														OBS! Detta är under uppbyggnad och detta är ett
														exempel på hur det kan komma att se ut när det är
														klart.
													</p>
												</div>
												<Table className="moreInfoTable">
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
												<div
													style={{
														textAlign: 'center',
														fontSize: '1.2rem',
														color: 'red'
													}}>
													<p>
														OBS! Detta är under uppbyggnad och detta är ett
														exempel på hur det kan komma att se ut när det är
														klart.
													</p>
												</div>
												<Form>
													<Form.Group>
														<Form.Label style={{ fontWeight: '600' }}>
															Skriv en recension på denna produkt.
														</Form.Label>
														<Form.Control
															as="textarea"
															readOnly
															rows={5}
															placeholder="För tillfället går det inte att skriva en recension..."></Form.Control>
													</Form.Group>
													<Form.Group>
														<Form.Label style={{ fontWeight: '600' }}>
															Skulle du rekommendera denna produkt?
														</Form.Label>
														<Form.Control as="select">
															<option value="Ja">Ja</option>
															<option value="Nej">Nej</option>
															<option value="Vet Ej">Vet Ej</option>
														</Form.Control>
													</Form.Group>
												</Form>
												<ProductRating rating={rating} setRating={setRating} />
												<Button disabled>Skriv Recension</Button>
											</Tab>
										</Tabs>
									</div>
								</Row>
							</div>
						</>
					))}
				</Container>
			)}
		</div>
	)
}

export default ProductView
