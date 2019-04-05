import React from 'react';


export default function(props) {

    return(
        <div className="answer-container">
          <button className="answer" onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
        </div>
    )
}