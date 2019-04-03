import React from 'react';
import MathJax from 'react-mathjax2'



module.exports = (props) => {
    const ascii = props.oQ2
    const ascii2 = props.o2Q2
    return (
        <div>
            <MathJax.Context input='ascii'>
                <div>
                    <MathJax.Node inline>
                        { ascii }
                        { ascii2 }
                    </MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
}