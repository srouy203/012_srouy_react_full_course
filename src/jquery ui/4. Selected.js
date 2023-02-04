import React from 'react'
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';
import $ from 'jquery';
import "./1. Draggable.css";

function Selected() {
    useEffect(()=>{
        $( "#selectable" ).selectable();
    },[])
  return (
    <>
    <ol id="selectable">
        <li class="ui-widget-content">Item 1</li>
        <li class="ui-widget-content">Item 2</li>
        <li class="ui-widget-content">Item 3</li>
        <li class="ui-widget-content">Item 4</li>
        <li class="ui-widget-content">Item 5</li>
        <li class="ui-widget-content">Item 6</li>
        <li class="ui-widget-content">Item 7</li>
    </ol>
    </>
  )
}
export default Selected;
