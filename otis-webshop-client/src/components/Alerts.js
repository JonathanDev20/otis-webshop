import React, {useState} from 'react'
import { Alert } from 'react-bootstrap'

const Alerts = ({show, type, msg, setShow}) => {
  return (
      <Alert show={show} variant={type} onClose={() => setShow(false)} dismissible>{msg}</Alert>
  )
}

export default Alerts
