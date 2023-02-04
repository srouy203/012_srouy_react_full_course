import React, { Component } from 'react'
import axios from 'axios'
class Httpget extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         loading: true
      }
    }

    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
            .then((res)=>{
                console.log(res);
                this.setState({
                    posts: res.data,
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
                <h1>Loading Data....</h1>
            )
        }
        {
            this.state.posts.map((val)=>{
                return(
                    <div key={val.id}>
                        <p>{val.id}. {val.title}. {val.price}</p>
                    </div>
                )
            })
        }
      </div>
    )
  }
}

export default Httpget
