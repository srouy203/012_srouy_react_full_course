import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './redux/2. index'



function CakeContainer(props) { // {props.numOfCake}{props.buyCake}
  return (
    <div>
        <h2>Order cake from the shop - {props.numOfCake}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
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
    buyCake: () => dispatch(buyCake())
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CakeContainer)
