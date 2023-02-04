import React from 'react'
import './FakeStore2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const FakeStore2 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState([]);
    //https://fakestoreapi.com/products


    useEffect(()=>{
        setLoading(true);
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products"
        })
            .then((res)=>{
                console.log(res.data);
                setData(res.data);
            })
            .catch((e) => console.log(e))
            .finally(()=>setLoading(false));
    },[]);

  return (
    <main>
        <div className="navbar">
            <div className="navbar-contain">
                <Link to='' className='logo'>Product</Link>

                <ul className='navbar-menu'>
                    <li className='navbar-item'>
                        <Link to='' className='navbar-list'>Home</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='' className='navbar-list'>About</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='' className='navbar-list'>Category</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link to='' className='navbar-list'>List</Link>
                    </li>
                </ul>
            </div>
        </div>
        <Container>
            {loading && (
                    <div className='loading'>
                        {" "}
                        <h1>Loading...</h1>
                    </div>
            )}
            {
                data.map((item, index)=>{
                    return(
                        <>
                            <Row>
                                <Col className="Product">
                                    <img src={item.image} alt=""/>
                                    <h6>{item.title}</h6>
                                    <small>{item.price}</small>
                                    <p>{item.description}</p>
                                </Col>
                                
                                
                            </Row>
                        </>
                    )
                })
            }
                
            
        </Container>
    </main>
  )
}

export default FakeStore2

