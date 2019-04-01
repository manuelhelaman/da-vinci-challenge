import React from 'react';
import MathJax from 'react-mathjax2'

module.exports = (props) => {
    const expression = props.asymptote

    return (
        <div>            
            <MathJax.Context input='ascii'>
                <div style={{color: "white"}}>
                    <MathJax.Node>
                        {expression}
                    </MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
}


