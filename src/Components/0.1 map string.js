import React from "react";
import { ReactDOM } from "react-dom";

const name=["Hannah","Tola","Mesa","Dara"]
const list=name.map((val,id)=>{
    return <li key={id}>{val}</li>;
})

class Map_string extends React.Component{    
    render(){
        return(
            <>
                <ul>{list}</ul>
            </>
        )
    }
}
export default Map_string;