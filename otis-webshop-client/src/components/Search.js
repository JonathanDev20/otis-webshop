import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext.js'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormControl, Button } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'

const Search = () => {

  const [search, setSearch] = useContext(UserContext)

	return (
		<Form inline>
			<FormControl
				type="text"
				placeholder="Sök produkter.."
				className="mr-sm-2"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Link to="/searchPage">
				<Button variant="outline-info">
					Sök
				</Button>
			</Link>
		</Form>
	)
}

export default Search
