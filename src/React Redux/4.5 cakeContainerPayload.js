import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from './redux/2. index'


function CakeContainerPayload(props) { // {props.numOfCake}{props.buyCake}
    const [value, setValue] = useState(1)
  return (
    <div>
        <h2>Order cake from the shop - {props.numOfCake}</h2>
        <input 
            type="text" 
            value={value}    
            onChange={(e)=>setValue(e.target.value)}
        />
        <button onClick={()=>props.buyCake(value)}>Buy {value} Cake</button>
    </div>
  )
}

//change state to prop
const mapStateToProps = state => {
  return{
    numOfCake: state.cake.numOfCake
  }
}

//map dispatch to prop
const mapDispatchToProps = dispatch => {
  return {
    buyCake: (value) => dispatch(buyCake(value))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CakeContainerPayload)
