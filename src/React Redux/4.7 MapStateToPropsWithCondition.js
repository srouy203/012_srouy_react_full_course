import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from './redux/2. index'
import { buyCandy } from './redux/2. index'


function MapStateToPropsWithCondition(props) {
  return (
    <div>
      <h2>Value: {props.item}</h2>
      <button onClick={props.dispatch}>Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: ownProps.cake 
        ? state.cake.numOfCake 
        : state.candy.numOfCandy
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        dispatch: ownProps.cake 
        ? () => dispatch(buyCake())
        : () => dispatch(buyCandy())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps)
(MapStateToPropsWithCondition)
