import { Button, Container } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-container">
      <h1>404</h1>
      <h2 className="mb-3">Vi hittar tyvärr inte sidan du söker</h2>
      <h6 className="mb-3">Detta kan bero på att sidan inte längre finns eller att den har flyttats. Vi ber om ursäkt för besväret. I menyn ovan kan du prova att söka på nytt, eller besöka en av våra populära avdelningar.</h6>
      <Link to="/"><Button>Till startsidan..</Button></Link> 
      </div>
    </div>
  )
}

export default NotFound
