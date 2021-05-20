import React, { useState, useEffect } from 'react'
import { BlockPicker } from 'react-color'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {
	Form,
	Container,
	Button,
	Jumbotron,
	Modal
} from 'react-bootstrap'

const SpecialOrder = () => {
	const [productCategory, setProductCategory] = useState('pipes')
	const [color, setColor] = useState('#d9e3f0')
	const [status, setStatus] = useState('Skicka förfrågan')
	const [formData, updateFormData] = useState({})
	const [show, setShow] = useState(false)
	const [message, setMessage] = useState('')
	let history = useHistory()

	useEffect(() => {
		setColor(color)
	}, [color])

	const handleSubmit = async (e) => {
		e.preventDefault()
		setStatus('Skickar...')
		const initialFormData = {
			from_email: '',
			category_pick: 'pipes',
			pipes_model: '',
			pipes_color: '',
			pipes_details: '',
			file: '',
			pipes_extras: '',
			bag_paint_size: '',
			bag_paint_design: '',
			extras_details: ''
		}
		try {
			const response = await axios(process.env.REACT_APP_SPECIALORDEREMAIL, {
				method: 'POST',
				data: { ...initialFormData, ...formData, pipes_color: color }
			})
			setStatus('Skicka förfrågan')
			const result = await response.data
			setMessage(result.status)
			setShow(true)
			updateFormData(initialFormData)
		} catch (error) {
			console.log(error)
		}
	}

	const categoryHandler = (e) => {
		setProductCategory(e.target.value)
	}

	const handleModalClose = () => {
		setShow(false)
		history.push('/')
	}

	const handleChange = (e) => {
		updateFormData({
			...formData,
			pipes_color: color,
			[e.target.name]: e.target.value.trim()
		})
	}
	return (
		<>
			<Container>
				<Modal
					backdrop="static"
					keyboard={false}
					show={show}
					onHide={() => handleModalClose()}>
					<Modal.Header closeButton>
						<Modal.Title>Tack för ditt mejl!</Modal.Title>
					</Modal.Header>
					<Modal.Body>{message}</Modal.Body>
					<Modal.Footer>
						<Button variant="success" onClick={() => handleModalClose()}>
							Uppfattat
						</Button>
					</Modal.Footer>
				</Modal>
				<Jumbotron
					style={{
						background: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'
					}}>
					<Container className="m-2">
						<h1 className="logo mb-2">Gör din egna beställning</h1>
						<p>Fyll i fälten nedan och designa din egna stil på din produkt.</p>
						<p>Pris avgörs efter godkänd beställning</p>
					</Container>
				</Jumbotron>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<Form.Group>
						<Form.Label htmlFor="from_email">E-post adress</Form.Label>
						<Form.Control
							name="from_email"
							required={true}
							type="email"
							onChange={(e) => handleChange(e)}
							placeholder="Fyll i din e-post här..."></Form.Control>
						<Form.Text size="sm" className="text-muted">
							Vi kommer inte dela din e-post med någon!
						</Form.Text>
					</Form.Group>
					<Form.Group>
						<Form.Label htmlFor="category_pick">
							Vad vill du beställa?
						</Form.Label>
						<Form.Control
							name="category_pick"
							onChange={(e) => {
								categoryHandler(e)
								handleChange(e)
							}}
							as="select">
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
									<Form.Label htmlFor="pipes_model">Välj modell</Form.Label>
									<Form.Control
										name="pipes_model"
										onChange={(e) => handleChange(e)}
										as="select">
										<option value="mattpipe">Matt pipa</option>
										<option value="longpipe">Lång pipa</option>
										<option value="rafflig">Räfflig pipa</option>
										<option value="annat">Något annat</option>
									</Form.Control>
								</Form.Group>
								<Form.Group>
									<Form.Label htmlFor="pipes_color">Välj bas färg</Form.Label>
									<input
										type="hidden"
										value={color}
										onChange={(e) => handleChange(e)}
										name="pipes_color"
									/>
									<BlockPicker
										color={color}
										onChangeComplete={(e) => setColor(e.hex)}
									/>
								</Form.Group>
								<Form.Group>
									<Form.Label htmlFor="pipes_details">
										Önskemål om mönster
									</Form.Label>
									<Form.Control
										onChange={(e) => handleChange(e)}
										name="pipes_details"
										as="textarea"
										type="text"
										rows={3}
										maxLength={500}
										placeholder="Ex. Randig eller Prickig i blå färg.."></Form.Control>
								</Form.Group>
								<Form.Group onChange={(e) => handleChange(e)} name="file">
									<Form.File label="Ladda upp en egen bild för att underlätta din design."></Form.File>
								</Form.Group>
								<Form.Group>
									<Form.Label htmlFor="pipes_extras">
										Övrig specification eller information
									</Form.Label>
									<Form.Control
										onChange={(e) => handleChange(e)}
										name="pipes_extras"
										as="textarea"
										type="text"
										maxLength={500}
										rows={4}
										placeholder="Din text här.."></Form.Control>
								</Form.Group>
								<Button type="submit" size="lg" variant="primary">
									{status}
								</Button>
							</>
						) : productCategory === 'clothbags' ||
						  productCategory === 'paintings' ? (
							<>
								<Form.Group>
									<Form.Label>Välj storlek</Form.Label>
									<Form.Control
										onChange={(e) => handleChange(e)}
										name="bag_paint_size"
										as="select">
										<option value="small">Liten</option>
										<option value="medium">Mellan</option>
										<option value="large">Stor</option>
										<option value="x-large">Extra stor</option>
									</Form.Control>
								</Form.Group>
								<Form.Group>
									<Form.Label>Välj din design</Form.Label>
									<Form.Control
										onChange={(e) => handleChange(e)}
										name="bag_paint_design"
										as="textarea"
										rows={4}
										maxLength={200}
										placeholder="Här kan du antingen skriva en design som redan finns eller beskriva en egen."></Form.Control>
								</Form.Group>

								<Form.Group onChange={(e) => handleChange(e)} name="file">
									<Form.File label="Ladda upp en bild för en bättre beskrivning av din design."></Form.File>
								</Form.Group>
								<Button type="submit" variant="primary">
									{status}
								</Button>
							</>
						) : (
							<>
								<Form.Group>
									<Form.Label>Beskriv önskad produkt</Form.Label>
									<Form.Control
										name="extras_details"
										as="textarea"
										maxLength={500}
										rows={5}
										placeholder="Ge en beskrivning av vad för produkt du är intresserad av.."></Form.Control>
								</Form.Group>
								<Form.Group name="file">
									<Form.File label="Ladda upp en bild för en bättre beskrivning av din design."></Form.File>
								</Form.Group>
								<Button type="submit" variant="primary">
									{status}
								</Button>
							</>
						)}
					</Form.Group>
				</Form>
			</Container>
		</>
	)
}

export default SpecialOrder
