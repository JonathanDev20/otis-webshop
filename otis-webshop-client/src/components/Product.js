import React from 'react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'

const Product = () => {

  const product = {
    productID: 'Artikelnummer',
    imgSrc: 'En bild', 
    imgAlt: 'Beskrivning',
    title: 'En title',
    price: 'Ett pris'
  }
  return (
      <Card>
        <Card.Body>
          <Card.Img className="hover-zoom" src="../images/IMG_6205.JPG"></Card.Img>
          <Card.Title tag="h5">Matt Pipa</Card.Title>
          <Card.Subtitle tag="h6" className="m-3">500kr</Card.Subtitle>
          <Button variant="primary" size="sm">Gå till produkt</Button>
        </Card.Body>
      </Card>
  )
}

export default Product