import React from 'react';

function Button(props) {
    
    return (
        <button className={"button " + props.styleclass} onClick={props.onClick}>
            {props.label}
        </button>
    );
  }
  
  export default Button;