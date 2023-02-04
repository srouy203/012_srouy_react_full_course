import React, { useEffect } from 'react';
import { useState } from 'react';
const FakeStore = () => {
    const [store, setStore] = useState([]);

    const fetchData = async () => {
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            // console.log(response);
            const jsonData = await response.json();
            // console.log(jsonData);
            setStore(jsonData);
        }catch(err){
            if(err.response){
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            }else{
                console.log(`Error: ${err.message}`);
            }
        }
    }


    useEffect(()=>{
        fetchData();
    },)


  return (
    <div>
        <center><h1>FakeStore Api</h1></center>
        {
            store.map((item, index)=> {
                return(
                    <main key={index}>
                        <h1>ID: {item.id}</h1>
                        <p>Title: {item.title}</p><br/>
                        <p>Price: {item.price}</p>
                        <p>description: {item.description}</p>
                        <img src={item.image} alt="" width='200px'/>
                    </main>
                )
            })
        }
    </div>
  )
}

export default FakeStore
