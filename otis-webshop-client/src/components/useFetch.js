// Import React
import { useEffect, useState } from 'react'
// Import Axios
import axios from 'axios'

/**
 * Represents a custom hook to make requests to backend.
 * 
 * @param {String} url - A string that represent the URL to fetch. 
 * @returns - A custom hook for API calls.
 */
const useFetch = (url) => {
	const [responseData, setResponseData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		setTimeout(() => {
			async function getData() {
				try {
					const response = await axios.get(url)
          if (response.status !== 200) {
            throw Error('Could not fetch the data for that resource')
          } 
					setResponseData(response.data.allProducts)
          setIsLoading(false)
          setError(null)
				} catch (error) {
					setError(error)
          setIsLoading(false)
				}
			}
			getData()
		}, 500)
	}, [url])

  return [ responseData, isLoading, error, setResponseData ]
}

export default useFetch
