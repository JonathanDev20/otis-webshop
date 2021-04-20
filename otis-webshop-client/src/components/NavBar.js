import React from 'react'

// Import react-icons
import { AiOutlineShoppingCart } from 'react-icons/ai'
// Import react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	Button,
	FormControl,
	Badge
} from 'react-bootstrap'

const NavBar = ({ cart }) => {
	return (
			<Navbar
				className="sticky-top"
				collapseOnSelect
				expand="md"
				bg="dark"
				variant="dark">
				<Navbar.Brand href="/">OTIS Webshop</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
							<Nav.Link href="/" to="/">Startsida</Nav.Link>
						<NavDropdown title="Produkter" id="collasible-nav-dropdown">
								<NavDropdown.Item to="/pipes" href="/pipes">Pipor</NavDropdown.Item>
								<NavDropdown.Item to="/clothbags" href="/clothbags">Tygkassar</NavDropdown.Item>
								<NavDropdown.Item to="/paintings" href="/paintings">Tavlor</NavDropdown.Item>
							<NavDropdown.Divider />
								<NavDropdown.Item to="/extras" href="/extras">Övrigt</NavDropdown.Item>
						</NavDropdown>
							<Nav.Link to="/special" href="/special">Gör din egen</Nav.Link>
							<Nav.Link to="/about" href="/about">Om oss</Nav.Link>
					</Nav>
					<Nav>
							<Nav.Link to="/cart" href="/cart">
									<AiOutlineShoppingCart className="shopping-cart" />
								<Badge id="cartQuantity" pill variant="danger">{cart}</Badge>	
							</Nav.Link>
						<Form inline>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
							/>
							<Button variant="outline-info">Search</Button>
						</Form>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
	)
}

export default NavBar
