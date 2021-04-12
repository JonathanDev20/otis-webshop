import React, { useState } from 'react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container } from 'react-bootstrap'

const SpecialOrder = () => {
  const [productCategory, setProductCategory] = useState('pipes')

  const categoryHandler = (e) => {
    setProductCategory(e.target.value)
  }
	return (
		<>
			<h1>Detta är sidan för special</h1>

			<Container>
				<Form>
					<Form.Group>
						<Form.Label>E-post adress</Form.Label>
						<Form.Control
							type="email"
							placeholder="Fyll i din e-post här..."></Form.Control>
					</Form.Group>
          <Form.Group>
            <Form.Label>Vad vill du beställa?</Form.Label>
            <Form.Control onChange={categoryHandler} as="select">
              <option value="pipes">Pipa</option>
              <option value="clothbags">Tygkasse</option>
              <option value="paintings">Tavla</option>
              <option value="extras">Övrigt</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>blahblah</Form.Label>
            {
              productCategory === 'pipes' ? (
                <Form.Control as="select">
                  <option value="mattpipe">Matt pipa</option>
                  <option value="longpipe">Lång pipa</option>
                  <option value="">Räfflig pipa</option>
                  <option value="">Något annat</option>
                </Form.Control>
              ) : productCategory === 'clothbags' ? ( <Form.Control as="select">
              <option value="small">Liten</option>
              <option value="medium">Mellan</option>
              <option value="large">Stor</option>
              <option value="x-large">Extra stor</option>
            </Form.Control>) : console.log('aaaaaaaa')
            }
          </Form.Group>
				</Form>
			</Container>
		</>
	)
}

export default SpecialOrder
