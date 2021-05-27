// Import React
import React from 'react'
// Import Bootstrap
import { Alert, Modal, Button } from 'react-bootstrap'
// Import Context
import { AlertContext } from '../context/AlertContext.js'

/**
 * A component to show a message for user after a certain event. 
 * 
 * @returns {JSX} - Alert and Modal component to show message. 
 */
const Alerts = () => {
  const { show, type, setShow, msg } = React.useContext(AlertContext)
  return (
    <>
      <Alert show={show} variant={type} onClose={() => setShow(false)} dismissible>{msg}</Alert>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{msg}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Hoppas du blir nöjd med ditt köp, bekräftelsen och mer information hittar du i din E-post.</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)}>Stäng</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Alerts
