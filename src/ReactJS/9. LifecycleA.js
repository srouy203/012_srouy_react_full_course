import React, { Component } from 'react'
import LifecycleB from './9.1 LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: ""
      }
      console.log('A constructor');
    }
    
    componentDidMount () {
        console.log('A componentDidMount');
    }

    static getDerivedStateFromProps(props,state){
        console.log('A getDerivedStateFromProps');
        return null;
    }

    //UpdateComponent
    shouldComponentUpdate(){
      console.log('A shouldComponenetUpdate');
      return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('A getSnapShotBeforeUpdate');
      return null;
    }
    componentDidUpdate(){
      console.log('A componenetDidUpdate');
    }

    handlClick () {
      this.setState({
        value: "Hello Bro"
      })
    }
    
  render() {
    console.log('A reder');
    return (
      <div>
        <h1>Lifecycle</h1>
        <button onClick={this.handlClick.bind(this)}>Click me</button>
        <LifecycleB/>
      </div>
    )
  }
}
 
export default LifecycleA;
