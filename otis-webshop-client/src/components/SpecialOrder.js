import React, { useState } from 'react'
import { BlockPicker } from 'react-color'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Container, Button, Jumbotron } from 'react-bootstrap'

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
			<Container>
				<Jumbotron
					style={{
						background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
					}}>
					<Container className="m-2">
						<h1 className="logo">Gör din egna beställning</h1>
						<p>Fyll i fälten nedan och designa din egna stil på din produkt.</p>
						<p>Pris avgörs efter godkänd beställning</p>
					</Container>
				</Jumbotron>
				<Form>
					<Form.Group>
						<Form.Label>E-post adress</Form.Label>
						<Form.Control
							required="true"
							type="email"
							placeholder="Fyll i din e-post här..."></Form.Control>
							<Form.Text size="sm" className="text-muted">Vi kommer inte dela din e-post med någon!</Form.Text>
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
								<Form.Group>
									<Form.Label>Välj modell</Form.Label>
									<Form.Control as="select">
										<option value="mattpipe">Matt pipa</option>
										<option value="longpipe">Lång pipa</option>
										<option value="">Räfflig pipa</option>
										<option value="">Något annat</option>
									</Form.Control>
								</Form.Group>
								<Form.Group>
									<Form.Label>Välj bas färg</Form.Label>
									<BlockPicker
										color={color}
										onChangeComplete={(e) => handleChangeComplete(e.hex)}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label>Önskemål om mönster</Form.Label>
									<Form.Control
										as="textarea"
										type="text"
										rows={3}
										maxLength={500}
										placeholder="Ex. Randig eller Prickig i blå färg.."></Form.Control>
								</Form.Group>
								<Form.Group>
									<Form.File label="Ladda upp en egen bild för att underlätta din design."></Form.File>
								</Form.Group>
								<Form.Group>
									<Form.Label>Övrig specification eller information</Form.Label>
									<Form.Control
										as="textarea"
										type="text"
										maxLength={500}
										rows={4}
										placeholder="Din text här.."></Form.Control>
								</Form.Group>
								<Button size="lg" variant="primary">
									Skicka förfrågan
								</Button>
							</>
						) : productCategory === 'clothbags' ||
						  productCategory === 'paintings' ? (
							<>
								<Form.Group>
									<Form.Label>Välj storlek</Form.Label>
									<Form.Control as="select">
										<option value="small">Liten</option>
										<option value="medium">Mellan</option>
										<option value="large">Stor</option>
										<option value="x-large">Extra stor</option>
									</Form.Control>
								</Form.Group>
								<Form.Group>
									<Form.Label>Välj din design</Form.Label>
									<Form.Control
										as="textarea"
										rows={4}
										maxLength={200}
										placeholder="Här kan du antingen skriva en design som redan finns eller beskriva en egen."></Form.Control>
								</Form.Group>

								<Form.Group>
									<Form.File label="Ladda upp en bild för en bättre beskrivning av din design."></Form.File>
								</Form.Group>
								<Button variant="primary">Skicka förfrågan</Button>
							</>
						) : (
							<>
								<Form.Group>
									<Form.Label>Beskriv önskad produkt</Form.Label>
									<Form.Control
										as="textarea"
										maxLength={500}
										rows={5}
										placeholder="Ge en beskrivning av vad för produkt du är intresserad av.."></Form.Control>
								</Form.Group>
								<Form.Group>
									<Form.File label="Ladda upp en bild för en bättre beskrivning av din design."></Form.File>
								</Form.Group>
								<Button variant="primary">Skicka förfrågan</Button>
							</>
						)}
					</Form.Group>
				</Form>
			</Container>
		</>
	)
}

export default SpecialOrder
