import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         condit : true,
      }
    }
    
  render() {


    return(
        <>
        {
            this.state.condit && <div>Hello True</div>
        }


        {/* {
            this.state.condit ? (
                <div>Hello true</div>
            ) : (   
                <div>Hello false</div>
            )
        } */}
        
        </>
    )
  }
}

export default Conditional;
