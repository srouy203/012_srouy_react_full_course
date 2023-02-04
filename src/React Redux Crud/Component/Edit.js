import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../Redux/action/crudAction';
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  const {id} = useParams();
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const navigate = useNavigate()

  const contact = useSelector(state => state.addCon)
  const dispatch = useDispatch()
  
  const conValue = contact[id]        //noted
   
  useEffect(()=>{
    setName(conValue.name);
    setEmail(conValue.email);
    setPhone(conValue.phone);
  },[conValue]);

  const handleEdit = (e) => {
    e.preventDefault();
    const data = {
      id: conValue.id,
      name,
      email,
      phone
    }

    dispatch(updateContact(data));

    navigate('/')
  }
  return (
    <div className='container'>
      <h1 className='text-center my-5'>Edit Contact</h1>
      <form action="" onSubmit={handleEdit}>
        <div className="form-group my-3">
          <input 
            type="text" 
            className='form-control'
            placeholder='Name'
            value={name}
            onChange={e=>setName(e.target.value)}
          />
        </div>
        <div className="form-group my-3">
          <input 
            type="email" 
            className='form-control'
            placeholder='email'
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group my-3">
          <input 
            type="text" 
            className='form-control'
            placeholder='Phone'
            value={phone}
            onChange={e=>setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input 
            className='form-control btn btn-success my-3'
            type="submit"
            value="Save"
          />
        </div>

      </form>
    </div>
  )
}

export default Edit
