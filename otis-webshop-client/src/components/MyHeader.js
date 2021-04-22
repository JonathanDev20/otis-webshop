import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Jumbotron, Button } from 'react-bootstrap'

const MyHeader = () => {
	return (
		<div className="jumbotron">
			<Jumbotron style={{ minHeight: '85vh' }} className="startPage">
        <div className="company-div">
				<h1 className="company-name">OTIS Design</h1>
				<p className="company-description">
				OTIS Design började som en hobby-verksamhet där jag tyckte om att tillverka egen-designade produkter. Det började med mindre teckningar som växte till tavlor, pipor, tygkassar och idag finns det en stor blandning av produkter.
				</p>
				<p className="company-button">
					<Button href="/about" variant="primary">Vill du veta mer?</Button>
				</p>
        </div>
			</Jumbotron>
		</div>
	)
}

export default MyHeader
