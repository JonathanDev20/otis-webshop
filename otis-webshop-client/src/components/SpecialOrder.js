import React, { useState } from 'react'
import { BlockPicker } from 'react-color'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container } from 'react-bootstrap'

const SpecialOrder = () => {
	const [productCategory, setProductCategory] = useState('pipes')
	const [color, setColor] = useState('#d9e3f0')

	const handleChangeComplete = (color) => {
		setColor(color)
	}

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
							required="true"
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
						{productCategory === 'pipes' ? (
							<>
								<Form.Label>Välj modell</Form.Label>
								<Form.Control as="select">
									<option value="mattpipe">Matt pipa</option>
									<option value="longpipe">Lång pipa</option>
									<option value="">Räfflig pipa</option>
									<option value="">Något annat</option>
								</Form.Control>
								<Form.Group>
								<Form.Label>Välj bas färg</Form.Label>
								<BlockPicker color={ color } onChangeComplete={(e) => handleChangeComplete(e.hex)} />
								</Form.Group>
								<Form.Label>Önskemål om mönster</Form.Label>
								<Form.Control as="textarea" row={3} placeholder="T.ex. Randig eller Prickig i blå färg.."></Form.Control>
								<Form.File label="Ladda upp en egen bild för att underlätta din design."></Form.File>
							</>
						) : productCategory === 'clothbags' || productCategory === 'paintings' ? (
							<>
								<Form.Label>Välj storlek</Form.Label>
								<Form.Control as="select">
									<option value="small">Liten</option>
									<option value="medium">Mellan</option>
									<option value="large">Stor</option>
									<option value="x-large">Extra stor</option>
								</Form.Control>
							</>
						) : (
							console.log('aaaaaaaa')
						)}
					</Form.Group>
				</Form>
			</Container>
		</>
	)
}

export default SpecialOrder
