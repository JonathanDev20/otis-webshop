import React from 'react'

// Import react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	Button,
	FormControl
} from 'react-bootstrap'

const NavBar = () => {
	return (
		<Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
			<Navbar.Brand href="#">OTIS</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav classname="mr-auto">
					<Nav.Link href="#">Startsida</Nav.Link>
					<NavDropdown title="Kategorier" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#">Pipor</NavDropdown.Item>
						<NavDropdown.Item href="#">Tygkassar</NavDropdown.Item>
						<NavDropdown.Item href="#">Tavlor</NavDropdown.Item>
						<NavDropdown.Item href="#">Övrigt</NavDropdown.Item>
					</NavDropdown>
					<Nav>
						<Nav.Link href="#">About</Nav.Link>
					</Nav>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-info">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavBar
