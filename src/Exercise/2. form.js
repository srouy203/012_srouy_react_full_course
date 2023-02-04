import React, {useState} from 'react';
import './css/2. form.css';
function From() {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [address, setAddress] = useState("");
  const [more, setMore] = useState("");

  const [data, setData] = useState([]);

  const handleAdd = () =>{
    var Stuff={
      "name": name,
      "sex": sex,
      "address": address,
      "more": more,
    }
    setData([...data,Stuff]);
  }


  return (
    <>
    <div className="form">
      <h2>Suff Information</h2>
      <input 
        type="text" 
        onChange={(event)=> {
          setName(event.target.value);
        }}
        placeholder='Usename'/>

      <input 
        type="text" 
        onChange={(event)=>{
          setSex(event.target.value);
        }}
        placeholder='Sex'/>

      <input 
        type="text" 
        onChange={(event)=>{
          setAddress(event.target.value);
        }}
        placeholder='Address'/>

      <input 
        type="text" 
        onChange={(event)=>{
          setMore(event.target.value);
        }}
        placeholder='More'/>

      <button type='submit' onClick={handleAdd}>Submit</button>
    </div>

    <div className="data">
      {data.map((val,id)=>{
        return(
        <>
          <p>Name: {val.name}</p>
          <p>Sex: {val.sex}</p>
          <p>Address: {val.address}</p>
          <p>More: {val.more}</p>
        </>
        );
      })}
    </div>

    </>
  )
}

export default From;
