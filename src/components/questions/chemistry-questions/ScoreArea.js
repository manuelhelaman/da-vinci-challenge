import React from 'react';
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';


export default function(props) {
    return(
      <div className="score-area-container">
      
        <div className="total-correct-wrapper">
          <TotalCorrect correct={props.correct} />
        </div>

        <div className="total-incorrect-wrapper">
          <TotalIncorrect incorrect={props.incorrect} />
        </div>

      </div>
    )
}