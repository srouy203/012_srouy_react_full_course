import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {delContact} from '../Redux/action/crudAction'

const Home = () => {
  const contact = useSelector(state => state.addCon)
  const dispatch = useDispatch()
  
  return (
    <div className='container'>
      <Link to='addcontact'>
        <button className='btn btn-primary my-2'>
          Add Contact
        </button>
      </Link>

      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {
            contact.length > 0 ? contact.map(({id,name,email,phone})=>{
              return(
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>
                  <Link to={`edit/${id}`} className='btn btn-warning'>
                      Edit
                  </Link> 
                  <button 
                    type='button' 
                    className='btn btn-success mx-3'
                    onClick={()=>dispatch(delContact(id))}
                    >Delete
                    </button>
                  </td>
                </tr>
              )
              
            }) : (
              <tr>No contact found</tr>
            )
          }
          
        </tbody>
      </table>
    </div>
  )
}

export default Home
