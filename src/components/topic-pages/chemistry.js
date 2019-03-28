import React, { Component } from 'react';
import IntroducingGauss from "../../../static/assets/images/introducing-heisenberg.jpg";
import {NavLink} from 'react-router-dom';
import Typing from 'react-typing-animation'; 

export default class Chemistry extends Component {
    render() {
        return(
            <div className="square-dialog-container">
                <img src={IntroducingGauss} style={{marginTop: "35px", marginLeft: "30px", borderRadius:"100px", width: "70%", height: "70%"}}/>

                <div className="square-dialog-wrapper">
                    <div className="square-dialog" style={{height: "450px"}}>
                        <Typing>
                            <div style={{color: "white"}}>
                            <div>Hey you! Don't run away! I know who you are and where you live. Now you have to listen to me carefully.</div>
                            <hr />
                            <Typing.Delay ms={1000} />
                            <div>
                                I'm Heisenberg and I'm looking for a pupil to cook some... <Typing.Delay ms={1000} /> well, I assume that you know. 
                                <hr style={{ marginTop: "0"}}/>
                                I will put you under a challenge where you will show that you are capable. <Typing.Delay ms={500} /> You will only dispose with 40 minutes to complete the challenge. 
                                <hr style={{ marginTop: "0"}}/>
                                You have to master the following topics so we can work together. They are: 
                                <Typing.Delay ms={1000} /> 
                                <hr style={{ marginTop: "0"}}/>  
                                Atomic structure and matter
                                <hr style={{ marginTop: "0"}}/>  
                                Chemical bond
                                <hr style={{ marginTop: "0"}}/>
                                Stoichiometry, inorganic chemical reactions and balancing
                                <hr style={{ marginTop: "0"}}/>
                                Structure of organic compounds
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
            </div>
        );
    }
}