import React from 'react'

// Import react-icons
import { AiOutlineShoppingCart } from 'react-icons/ai'
// Import React Router
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
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
		<Router>
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
						<Link to="/">
							<Nav.Link href="/">Startsida</Nav.Link>
						</Link>
						<NavDropdown title="Produkter" id="collasible-nav-dropdown">
							<Link to="/pipes">
								<NavDropdown.Item href="/pipes">Pipor</NavDropdown.Item>
							</Link>
							<Link to="/clothbags">
								<NavDropdown.Item href="/clothbags">Tygkassar</NavDropdown.Item>
							</Link>
							<Link to="/paintings">
								<NavDropdown.Item href="/paintings">Tavlor</NavDropdown.Item>
							</Link>
							<NavDropdown.Divider />
							<Link to="/extras">
								<NavDropdown.Item href="/extras">Övrigt</NavDropdown.Item>
							</Link>
						</NavDropdown>
						<Link to="/about">
							<Nav.Link href="/about">Om oss</Nav.Link>
						</Link>
					</Nav>
					<Nav>
						<Link to="/cart">
							<Nav.Link href="/cart">
								<AiOutlineShoppingCart className="shopping-cart" />
							</Nav.Link>
						</Link>
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

			<Switch>
				<Route path="/"><h1>Hello World!</h1></Route>
			</Switch>
		</Router>
	)
}

export default NavBar
