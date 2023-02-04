import React from 'react';
import { useEffect } from 'react';
import "./1. Draggable.css";
import $ from 'jquery';
function Droppable() {
    useEffect(()=>{
        $( "#draggable1" ).draggable();
        $( "#droppable" ).droppable({
          drop: function( event, ui ) {
            $( this )
              .addClass( "ui-state-highlight" )
              .find( "p" )
                .html( "Dropped!" );
          }
        });
    },[])
  return (        //not working
    <>
    <div id="draggable1" class="ui-widget-content">
        <p>Drag me to my target</p>
    </div>
        
    <div id="droppable" class="ui-widget-header">
        <p>Drop here</p>
    </div>
    </>
  )
}

export default Droppable;
