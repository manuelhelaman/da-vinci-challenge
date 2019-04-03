import React from 'react';
import MathJax from 'react-mathjax2'

module.exports = (props) => {
    const expression = props.asymptote
    // const question1 = props.firstQ  //firstQ stands for first question
    // const o1F = props.oA1 // o1F stands for option one first
    // const o2F = props.oA2
    // const o3F = props.oA3
    // const o4F = props.oA4
    // 
    const question2 = props.secondQ

    return (
        <div>            
            <MathJax.Context input='ascii'>
                <div className="mathematical-expressions" style={{color: "white"}}>
                    <MathJax.Node>
                        {expression}
                        {/* {question1}
                        {o1F}
                        {o2F}
                        {o3F}
                        {o4F}
                        {question2} */}
                    </MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
}


