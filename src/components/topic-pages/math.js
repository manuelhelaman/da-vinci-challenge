import React from 'react';
import IntroducingGauss from "../../../static/assets/images/introducing-gauss.jpg";
import {NavLink} from 'react-router-dom';
import Typing from 'react-typing-animation'; 

export default function() {
    return(
        <div className="square-dialog-container">
            <img src={IntroducingGauss} style={{marginTop: "35px", marginLeft: "30px", borderRadius:"100px"}}/>
            <div className="square-dialog-wrapper">
                <div className="square-dialog">
                    <Typing>
                        <div style={{color: "white"}}>
                            <div>Hello , my name is Johann Friedrich Carl Gauss. I was born in Germany and today I will be your instructor for this quiz.</div>
                            <hr />
                            <Typing.Delay ms={1000} />
                            <div>
                                In order to be more ready for this quiz, you must have a pencil and a pice of paper. 
                                <hr style={{ marginTop: "0"}}/>
                                You will only dispose with forty minutes to complete this challenge. The following topics will be: 
                                <hr style={{ marginTop: "0"}}/>
                                Algebra
                                <hr style={{ marginTop: "0"}}/>  
                                Analytic Geometry
                                <hr style={{ marginTop: "0"}}/>  
                                Mathematical Reasoning 
                                <hr style={{ marginTop: "0"}}/>
                                Differential and Integral Calculus
                            </div>
                        </div>
                    </Typing>
                </div>
            </div>    

            <div className="go-back-button-container">
                <NavLink exact to="/">
                    <button className="go-back-button">Go back</button>
                </NavLink>
            </div>
            <div className="next-page-button-container">    
                <NavLink to="/math-instructions">
                    <button className="next-page-button">Next Page</button>
                </NavLink>
            </div>

        </div>
    );
}
