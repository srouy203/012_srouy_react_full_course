import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: ""
      }
      console.log('B constructor');
    }
    componentDidMount () {
        console.log('B componentDidMount');
    }
    static getDerivedStateFromProps(props,state){
        console.log('B getDerivedStateFromProps');
        return null;
    }

    //UpdateComponent
    shouldComponentUpdate(){
      console.log('B shouldComponenetUpdate' );
      return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('B getSnapShotBeforeUpdate');
      return null;
    }
    componentDidUpdate(){
      console.log('B componenetDidUpdate');
    }


    
  render() {
    console.log('B reder');
    return (
      <div>
        <h1>Lifecycle</h1>
      </div>
    )
  }
}

export default LifecycleB;
