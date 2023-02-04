import React from 'react';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';
import $ from 'jquery';
import "./1. Draggable.css";

function Resizable() {
    useEffect(()=>{
        $( "#resizable" ).resizable();
    },[])
  return (
    <>
        <div id="resizable" class="ui-widget-content">
            <h3 class="ui-widget-header">Resizable</h3>
        </div> 
    </>
  )
}

export default Resizable;
