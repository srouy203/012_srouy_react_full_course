import React, { useState } from 'react'
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';
import $ from 'jquery';
import "./1. Draggable.css";

function Sortable() {
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  }


    useEffect(()=>{
        $( "#sortable" ).sortable();
        // handleClick();
    },[])
  return (
    <>
    <ul id="sortable">
        <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 1</li>
        <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 2</li>
        <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 3</li>
        <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 4</li>
        <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 5</li>
        <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 6</li>
        <li class="ui-state-default"><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 7</li>
    </ul>
    <button 
        type='submit'
        onClick={handleClick}
    >Increase</button>

      <p>{click}</p>
    </>
  )
}

export default Sortable;
