import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Jumbotron, Button } from 'react-bootstrap'

const MyHeader = () => {
	return (
		<div className="jumbotron">
			<Jumbotron style={{ minHeight: '80vh' }} className="startPage">
				<h1 className="company-name">OTIS Design</h1>
				<p className="company-description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
					architecto, porro, molestiae quasi aliquam ducimus nam exercitationem,
					voluptatem nostrum est error rem dolores. Illo eius aperiam, odio unde
					aliquam eum!
				</p>
				<p className="company-button">
					<Button variant="primary">Learn More!</Button>
				</p>
			</Jumbotron>
		</div>
	)
}

export default MyHeader
