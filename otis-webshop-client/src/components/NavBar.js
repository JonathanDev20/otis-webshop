import React from 'react'

// Import react-icons
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiSmokingPipe } from 'react-icons/gi'
import { IoBagSharp } from 'react-icons/io5'
import { BsFillImageFill } from 'react-icons/bs'
import { IoIosBulb } from 'react-icons/io'
// Import react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import {
	Navbar,
	Nav,
	NavDropdown,
	Badge
} from 'react-bootstrap'

import Search from './Search.js'

const NavBar = ({ cart, search, setSearch }) => {
	return (
		<Navbar
			className="sticky-top"
			collapseOnSelect
			expand="md"
			bg="primary"
			variant="dark">
			<Navbar.Brand href="/" className="logo">OTIS Webshop</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/" to="/">
						Startsida
					</Nav.Link>
					<NavDropdown title="Produkter" id="collasible-nav-dropdown">
						<NavDropdown.Item to="/pipes" href="/pipes">
							Pipor <GiSmokingPipe />
						</NavDropdown.Item>
						<NavDropdown.Item to="/clothbags" href="/clothbags">
							Tygkassar <IoBagSharp />
						</NavDropdown.Item>
						<NavDropdown.Item to="/paintings" href="/paintings">
							Tavlor <BsFillImageFill />
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item to="/extras" href="/extras">
							Övrigt <IoIosBulb />
						</NavDropdown.Item>
					</NavDropdown>
					<Nav.Link to="/special" href="/special">
						Gör din egen
					</Nav.Link>
					<Nav.Link to="/about" href="/about">
						Om oss
					</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link to="/cart" href="/cart">
						<AiOutlineShoppingCart className="shopping-cart" />
						<Badge style={{fontSize: '0.8rem'}} id="cartQuantity" pill variant="danger">
							{cart}
						</Badge>
					</Nav.Link>
					<Search search={search} setSearch={setSearch} />
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavBar
