import React from 'react'
import { connect } from 'react-redux'
import { decrease, increase, reset } from './5. Redux/index'
function Count(props) {
  return (
    <div>
        <h1>Value: {props.value}</h1>
        <button onClick={props.increase}>Increase</button>
        <button onClick={props.decrease}>Decrease</button>
        <button onClick={props.reset}>Reset</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        value: state.value,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease()),
        reset: () => dispatch(reset()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Count)
