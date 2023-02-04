import React from 'react'
import { connect } from 'react-redux'
import { buyCandy } from './redux/2. index'

function CandyContainer(props) {
  return (
    <div>
        <h2>Buy Candy from the shop - {props.qtyCandy}</h2>
        <button onClick={props.buyCandyy}>Buy Candy</button>

    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        qtyCandy: state.candy.numOfCandy
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buyCandyy: ()=>dispatch(buyCandy())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CandyContainer)
