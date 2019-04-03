import React from 'react';
import MathJax from 'react-mathjax2'



module.exports = (props) => {
    // const tex = props.oQ2
    return (
        <div>
            <MathJax.Context input='tex'>
                <div>
                    <MathJax.Node>{tex}</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
}