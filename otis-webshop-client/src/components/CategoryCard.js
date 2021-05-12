import React from 'react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'

const CategoryCard = (props) => {
  return (
    <Card style={{ width: '20rem', margin: '0 auto'}}>
      <Card.Img variant="top" src={props.imgSrc} alt={props.imgAlt} />
      <Card.Body>
        <Card.Title className="mb-3">{props.title}</Card.Title>
        <Card.Text className="mb-3">
          {props.description}
        </Card.Text>
        <Button href={props.path} variant="primary">Ta mig till {props.title}</Button>
      </Card.Body>
    </Card>
  )
}

export default CategoryCard
