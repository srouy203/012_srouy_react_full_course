import React, { Component } from 'react'
import axios from 'axios'
export class Httppost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            price: "",
            category: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://fakestoreapi.com/products', this.state)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={this.state.title}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div>
                        <label htmlFor="">Price</label>
                        <input 
                            type="text" 
                            name="price" 
                            value={this.state.price}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div>
                        <label htmlFor="">Category</label>
                        <input 
                            type="text" 
                            name="category" 
                            value={this.state.category}
                            onChange={this.handleChange}
                            />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default Httppost
