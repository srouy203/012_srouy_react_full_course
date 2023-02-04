import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [username,setUsename] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleLogin=()=>{
        setLoading(true);
        setMessage("");
        axios({
            method : "POST",
            url : "https://nitc.cleverapps.io/api/auth/login",
            data : {
                "username" : username,
                "password" : password
            }
        }).then(response=>{
            setLoading(false);
            var data = response.data;

            if(data.message){
                setMessage(data.message);
            }else{
                console.log(data);
            }
        })
    }
  return (
    <>
        <label htmlFor="">Name</label>
        <input type="text" name="usename" id="name"/><br/>
        <label htmlFor="">Password</label>
        <input type="password" name="password" id="password"/><br/>
        <button type="submit" onClick={handleLogin}>Login</button>


    </>
  )
}

export default Login;
