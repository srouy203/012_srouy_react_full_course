import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../Redux/action/crudAction'
import { useNavigate } from 'react-router-dom'

const AddContact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone ] = useState('')
  const navigate = useNavigate()

  const contact = useSelector(state => state.addCon)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: contact.length > 0 ? contact[contact.length - 1].id + 1 : 0,
      name,
      email,
      phone,
    }
    dispatch(addContact(data));
    navigate('/');
  }
  
  return (
    <div className='container'>
      <h1 className='text-center my-5'>Add Contact</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <input 
            type="text" 
            className='form-control'
            placeholder='Name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="form-group my-3">
          <input 
            type="email" 
            className='form-control'
            placeholder='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group my-3">
          <input 
            type="text" 
            className='form-control'
            placeholder='Phone'
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input 
            className='form-control btn btn-dark my-3'
            type="submit"
            value="Submit"
          />
        </div>

      </form>
    </div>
  )
}

export default AddContact
