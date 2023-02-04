import React from "react";

class Changetext extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            sex: '',
            number: '',
            submit: '',
        };
    }
    changeText=(n)=>{
        this.setState({name: n.target.value});
    }
    Changesex=(s)=>{
        this.setState({sex: s.target.value});
    }
    Changenum=(num)=>{
        this.setState({number: num.target.value});
    }
    Submit=()=>{
        if(this.state.name && this.state.sex && this.state.number){
            this.setState({submit: 'Submit complete!'});
        }else{
            this.setState({submit: 'Please input information'});
        }
    }
    render(){
        return(
            <>
                <h2>បំពេញព័ត៌មានផ្ទាល់ខ្លួន</h2>
                <label>ឈ្មោះ </label>
                <input type="text" onChange={this.changeText} /><br/>
                <label>ភេទ </label>
                <select onChange={this.Changesex}>
                    <option>ប្រុស</option>
                    <option>ស្រី</option>
                </select><br/>
                <label>លេខទូរស័ព្ទ</label>
                <input type="number" onChange={this.Changenum}/><br/>
                <button type="sumit" onClick={this.Submit}>Submit</button>

                <p>Name is: {this.state.name}</p>
                <p>Sex: {this.state.sex}</p>
                <p>Phone number is {this.state.number}</p>
                <h2>{this.state.submit}</h2>
            </> 
        )
    }
}
export default Changetext;