import React, { useState } from 'react'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormControl, Button } from 'react-bootstrap'

const Search = () => {
  const [search, setSearch] = useState('')

	return (
		<Form inline>
			<FormControl
				type="text"
				placeholder="Sök produkter.."
				className="mr-sm-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
			/>
			<Button onClick={() => console.log(search)} variant="outline-info">Sök</Button>
		</Form>
	)
}

export default Search
