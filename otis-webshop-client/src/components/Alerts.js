import React from 'react'
import { Alert, Modal, Button } from 'react-bootstrap'
import { AlertContext } from '../context/AlertContext.js'

const Alerts = () => {
  const { show, type, setShow, setType, msg, setMsg } = React.useContext(AlertContext)
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
