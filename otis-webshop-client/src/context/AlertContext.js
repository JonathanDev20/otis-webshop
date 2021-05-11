import React, { useState, createContext } from 'react'

export const AlertContext = createContext(null)

export default function GlobalState({ children }) {
  const [show, setShow] = useState(false)
  const [type, setType] = useState('')
  const [msg, setMsg] = useState('')

  const state = {
    show,
    setShow,
    type,
    setType,
    msg,
    setMsg
  }

  return (
    <AlertContext.Provider value={state}>
      {children}
    </AlertContext.Provider>
  )
}