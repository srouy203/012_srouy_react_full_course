import React, { Component } from 'react'
import axios from 'axios'
export class HTTPget extends Component {
    //https://jsonplaceholder.typicode.com/posts
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         loading: true
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res.data)
            this.setState({
                posts: res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            this.setState({
                loading: false,
            })
        })
    }
    
  render() {
    return (
      <div>
        {
            this.state.loading && (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        }
        {
            this.state.posts.map((val)=>{
                return(
                    <div key={val.id}>
                        {val.id}. {val.title}
                    </div>
                )
            })
        }
        
      </div>
    )
  }
}

export default HTTPget

