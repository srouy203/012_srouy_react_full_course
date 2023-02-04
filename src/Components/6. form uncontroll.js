import React, { useState,useRef } from 'react'

// export default class Alert extends React.Component{
//     text = React.createRef();
//     alert=()=>{
//         alert(this.text.current.value);
//     }
//     render(){
//         return(
//             <>
//                 <input type="text" defaultValue="123" ref={this.text}/>
//                 <button onClick={this.alert}>Press</button>       
//             </>
//         )
//     }
// }

const Alert = () => {
    const text = useRef()
  return (
    <div>
        <input type="text" ref={text}/>
        <button onClick={()=>
            alert(text.current.value)
        }>Click me</button>
      
    </div>
  )
}

export default Alert
