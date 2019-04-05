import React from 'react';
import Answer from './answer';

export default function(props) {
    var answers = []
    for (let i = 0; i < props.dataSet.answers.length; i++) {
      answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
    }
    
    return(
      <div>
        {answers}
      </div>
    )
}