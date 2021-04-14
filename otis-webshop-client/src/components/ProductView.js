import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

const ProductView = () => {
  const [responseData, setResponseData] = useState('')

  const { id } = useParams()
  useEffect(() => {
		async function getData() {
			try {
				const response = await axios.get(`http://localhost:5000/${id}`)
				setResponseData(response.data)
        console.log(response.data)
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [])

  return (
    <div>
      <h1>Det här sidan för en enskild produkt {id}</h1>
      <Container>
      <div className="productContent" style={{ display: 'flex', margin: '10px' }}>
        <div className="productImage">
          <img src="/images/matt-pipe.JPG" alt="matt pipa" width="450" />
        </div>
        <div className="productDescription" style={{ textAlign: 'center', width: '450px' }}>
          <p>Title</p>
          <p>Price</p>
          <p>Add to cart</p>
        </div>
      </div>
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, at architecto dolorum iure similique consectetur libero sunt placeat minima nulla magnam quam aliquid facilis quas iusto voluptatibus! Unde, animi velit.</div>
      </Container>
    </div>
  )
}

export default ProductView
