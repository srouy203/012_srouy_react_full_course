import React from "react";

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: ['Home','About','News','Home']
        }
    }
    render(){
        return(
            <>
                <h1>TODO</h1>
                <ul>
                    {this.state.data.map((val, id)=>
                        <li key={id}>{val}</li>    
                    )}
                </ul>
            </>
        )
    }
}
export default Todo;