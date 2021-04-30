import React, { useState, useEffect } from 'react'

import axios from 'axios'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormControl, Button } from 'react-bootstrap'
import { Redirect, Route, Link } from 'react-router-dom'
import SearchPage from './SearchPage'

const Search = ({ search, setSearch }) => {

	const buttonHandler = () => {
		return (
			<Redirect to={{ pathname: '/searchPage', state: { search: search } }} />
		)
	}

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
				<Button onClick={() => buttonHandler()} variant="outline-info">
					Sök
				</Button>
			</Link>
		</Form>
	)
}

export default Search
