import React from 'react';

import MathJax from 'react-mathjax2'

const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`

module.exports = () => {
    return (
        <div>
            <MathJax.Context input='tex'>
                <div>
                    This is an inline math formula: <MathJax.Node inline>{'a = b'}</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
}