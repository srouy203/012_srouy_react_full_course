import React from 'react'

const ListChild = ({info}) => {
  const name = {
    color: 'red',
    fontSize: '20px'
  }

  return (
    <div>
        <p style={name}>My name: {info.name}</p>
        <p>Sex: {info.sex}</p>
        <p>Age: {info.age}</p>
    </div>
  )
}

export default ListChild;
