import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image } from 'react-bootstrap'

const MyHeader = () => {
	return (
		<>
			<Image src="../images/Header.jpg" alt="Header" className="header-image" />
			<div className="header-text">OTIS Design</div>
		</>
	)
}

export default MyHeader
