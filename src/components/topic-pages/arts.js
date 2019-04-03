import React from 'react';
import IntroducingMatisse from "../../../static/assets/images/introducing-matisse.jpg";
import {NavLink} from 'react-router-dom';
import Typing from 'react-typing-animation'; 

export default function() {
    return(
        <div className="square-dialog-container">
            <img src={IntroducingMatisse} style={{marginTop: "35px", marginLeft: "10px", borderRadius:"100px", width:"433.66px", height: "80%"}}/>

            <div className="square-dialog-wrapper">
                <div className="square-dialog">
                    <Typing>
                        <div style={{color: "white"}}>
                            <div>Hello, my name is Henri Émile Benoît Matisse. I am a French artist and today I will be your instructor for this quiz.</div>
                            <hr />
                            <Typing.Delay ms={1000} />
                            <div>
                                For this quiz you will have to answer 20 questions of Universal History, and 10 questions of Literature.
                                <hr style={{ marginTop: "0"}}/>
                                You will only dispose with forty minutes to complete this challenge. The topics will be: 
                                <hr style={{ marginTop: "0"}}/>
                                The Bourgeois revolution
                                <hr style={{ marginTop: "0"}}/>  
                                The imperialism 
                                <hr style={{ marginTop: "0"}}/>  
                                World war l and ll 
                                <hr style={{ marginTop: "0"}}/>
                                Literature Periods and Movements
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
                    <NavLink to="/arts-instructions">
                        <button className="next-page-button">Next Page</button>
                    </NavLink>
            </div>

        </div>
    );
}