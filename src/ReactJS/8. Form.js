import React, { Component } from 'react'

export class Form extends Component {
constructor(props) {
  super(props)

  this.state = {
     name: "",
     comment: "",
     role: "",
  }
}

handleName = (e) => {
    this.setState({
        name: e.target.value
    })
}
handleComment = (e) => {
    this.setState({
        comment: e.target.value
    })
}
handleRole = (e) => {
    this.setState({
        role: e.target.value
    })
}

handleSubmit = (e) =>{
    console.log(this.state.name);
    console.log(this.state.comment);
    console.log(this.state.role);
    e.preventDefault();
}

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input 
                    type="text"
                    value={this.state.name}    
                    onChange={this.handleName}
                />
            </div>
            <div>
                <label htmlFor="">Comment</label><br/>
                <textarea name="" id="" cols="27" rows="5"
                    value={this.state.comment}
                    onChange={this.handleComment}
                ></textarea>
            </div>
            <div>
                <label htmlFor="">Role</label>
                <select value={this.state.role} onChange={this.handleRole}>
                    <option value="Frontend">Front-end</option>
                    <option value="Backend">Back-end</option>
                    <option value="Mobile">Mobile App</option>
                </select>
            </div>

            <button type='submit'>Submit</button>
        </form>
        
      </div>
    )
  }
}

export default Form;
