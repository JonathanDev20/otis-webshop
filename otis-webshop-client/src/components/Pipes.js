import { React, useEffect } from 'react'
import axios from 'axios'


const Pipes = () => {
  let test = ''
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('http://localhost:5000/')
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

	return (
		<div>
			<h1>Detta är sidan för Pipor</h1>
		</div>
	)
}

export default Pipes
