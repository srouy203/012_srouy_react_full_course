import React from 'react'
import ReactDOM from 'react-dom'

function Portal() {
  return ReactDOM.createPortal(
    <>
    <h1>Hello world</h1>
    <p>This is a portal</p>
    </>,
    document.getElementById('portal-root')
  )
}

export default Portal
