import React from 'react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'

const Product = (props) => {
  return (
      <Card key={props.id}>
        <Card.Body>
          <Card.Img className="hover-zoom" src={props.imgSrc} alt={props.imgAlt}></Card.Img>
          <Card.Title tag="h5">{props.title}</Card.Title>
          <Card.Subtitle tag="h6" className="m-3">{props.price}</Card.Subtitle>
          <Button href="/product/:id" variant="primary" size="sm">Gå till produkt</Button>
        </Card.Body>
      </Card>
  )
}

export default Product
