import React from 'react';
import ImageFadeIn from 'react-image-fade-in'
import {NavLink} from 'react-router-dom';
import Typing from 'react-typing-animation'; 
import IntroducingMatisse from "../../../../static/assets/images/introducing-matisse.jpg";

export default function() {
    return(
        <div className="square-dialog-container">
            <ImageFadeIn style={{borderRadius:"100px"}} width={433.66} height={412} opacityTransition={2} src={IntroducingMatisse} />

            <div className="square-dialog-wrapper">
                <div className="square-dialog">
                    <Typing>
                        <div style={{color: "white", marginTop:"-42px"}}>
                            <div>Instructions</div>
                            <hr />
                            <Typing.Delay ms={1000} />
                            <div>
                                This will be a multi choice quiz with four options of which just one is the right answer.<Typing.Delay ms={1000} /> You can wether answer it or skip to the next question, but it will count as wrong answer.
                                <Typing.Delay ms={1000} />
                                 Here you have a little example of the kind of questions that you will face through this quiz.
                                <Typing.Delay ms={1000} />
                                <hr style={{ marginTop: "0"}}/>
                                The purpose of the Encyclopedism of the eighteenth-century was
                                <Typing.Delay ms={500} />
                                <hr style={{ marginTop: "0"}}/>
                                <div style={{display:"grid", gridTemplateColumns: "1fr 1fr"}}>
                                    <div>A) To focus on the religious thought</div> <Typing.Delay ms={500} /> <div>B) To include the philosophic thought</div>
                                </div>
                                <hr style={{ marginTop: "0"}}/>  
                                <div style={{display:"grid", gridTemplateColumns: "1fr 1fr"}}>
                                    <div>C) Concentrate all the knowledge of the time</div> <Typing.Delay ms={500} /> <div>D) To Refer to the dogmas of the church</div>
                                </div>
                                <hr style={{ marginTop: "0"}}/>  
                                Remember to take some seconds to examine all the options before you make a decision.<Typing.Delay ms={700} /> You can take notes.<Typing.Delay ms={700} /> Work as quickly and carefully as posible without taking too much time in each question.
                                <Typing.Delay ms={500} /> 
                                <hr style={{ marginTop: "0"}}/>
                                Whenever you are ready you can start the quiz. Good luck!
                            </div>
                        </div>
                    </Typing>
                </div>
            </div>    

            <div className="go-back-button-container">
                <NavLink to="/arts">
                    <button className="go-back-button" style={{marginTop:"50px"}}>Go back</button>
                </NavLink>
            </div>

            <div className="next-page-button-container">    
                <button className="next-page-button" style={{marginTop:"50px"}}>Start quiz</button>
            </div>
        </div>
    )
}

