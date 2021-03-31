import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Image, Jumbotron, Button } from 'react-bootstrap'

const MyHeader = () => {
	return (
		<Jumbotron className="startPage">
			<h1 className="company-name">OTIS Design</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
				architecto, porro, molestiae quasi aliquam ducimus nam exercitationem,
				voluptatem nostrum est error rem dolores. Illo eius aperiam, odio unde
				aliquam eum!
			</p>
			<p>
				<Button variant="primary">Learn More!</Button>
			</p>
		</Jumbotron>
	)
}

export default MyHeader
