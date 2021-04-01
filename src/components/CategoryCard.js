import React from 'react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'

const CategoryCard = () => {
  return (
    <Card style={{ width: '18rem', margin: '0 auto'}}>
      <Card.Img variant="top" src="../images/IMG_7154.JPEG" />
      <Card.Body>
        <Card.Title>Pipor</Card.Title>
        <Card.Text>
          Kika gärna på våra egentillverkade pipor. Vissa modeller går även att få i special versioner.
        </Card.Text>
        <Button variant="secondary">Köp Pipor</Button>
      </Card.Body>
    </Card>
  )
}

export default CategoryCard
