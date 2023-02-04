import React from 'react'
import Navbar from './Component/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import Edit from './Component/Edit'
import AddContact from './Component/AddContact'

import "./crudApp.css"
const CrudApp = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/addcontact' element={<AddContact/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default CrudApp
