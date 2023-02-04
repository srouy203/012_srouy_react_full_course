import axios from 'axios'
import React, { Component } from 'react'

export class HTTPpost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid: "",
         title: "",
         body: ""
      }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })

    }
  render() {
    const {userid, title, body} = this.state
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            UserID: <input type="text" 
                value={userid}
                name="userid"
                onChange={this.handleChange}
            /><br/>
            Title: <input type="text" 
                value={title}
                name="title"
                onChange={this.handleChange}
            /><br/>
            Body: <input type="text" 
                value={body}
                name="body"
                onChange={this.handleChange}
            /><br/>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default HTTPpost
