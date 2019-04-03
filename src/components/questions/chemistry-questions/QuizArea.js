import React from 'react';
import Question from './question';
import AnswerList from './AnswerList';

export default function(props) {
    return(
      <div style={{display:"grid", gridTemplateRows:"2.5fr 4fr"}}className="question-and-options-container">
      
        <div className="question-wrapper">
          <Question dataSet={props.dataSet} />
        </div>

        <div className="options-wrapper">
          <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
        </div>

      </div>
    )
}
