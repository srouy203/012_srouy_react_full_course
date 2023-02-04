import React from 'react';
import "jquery-ui-dist/jquery-ui";
import "./1. Draggable.css";
import { useEffect } from 'react';
import $ from 'jquery';

function Draggable() {
    useEffect(()=>{
        $( "#draggable" ).draggable();
    },[])
  return (
    <>
            <div id="draggable" class="ui-widget-content">
                <p>Drag me around</p>   
            </div> 
    </>
  )
}

export default Draggable;
;