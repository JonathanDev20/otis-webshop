// Import React
import React, { useContext } from 'react'
// Import Cotnext
import { UserContext } from '../context/UserContext.js'
// Import React-Router
import { useHistory } from 'react-router-dom'

// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, FormControl, Button } from 'react-bootstrap'

/**
 * A component that represents a search field.
 * 
 * @returns {JSX} - A search field to search for product.
 */
const Search = () => {
  const [search, setSearch] = useContext(UserContext)
  let history = useHistory()

  const buttonHandler = (e) => {
    history.push(`/search/${search}`)
    e.preventDefault()
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
				<Button onClick={() => buttonHandler()} type="submit" variant="outline-info">
					Sök
				</Button>
		</Form>
	)
}

export default Search
