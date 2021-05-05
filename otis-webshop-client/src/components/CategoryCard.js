import React from 'react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'

const CategoryCard = (props) => {
  return (
    <Card style={{ width: '18rem', margin: '0 auto'}}>
      <Card.Img variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button href={props.path} variant="primary">Ta mig till {props.title}</Button>
      </Card.Body>
    </Card>
  )
}

export default CategoryCard
