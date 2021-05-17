import { useEffect, useState } from 'react'
import axios from 'axios'

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
