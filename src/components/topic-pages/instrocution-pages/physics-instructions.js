import React from 'react';
import {NavLink} from 'react-router-dom';
import Typing from 'react-typing-animation'; 

export default function() {
    return(
        <div className="physics-instructions-container">
            
            <div className="gif-and-text-container">
                <div className="galileo-instructions">
                    <Typing>
                        <Typing.Delay ms={2000} />
                        We are so close to the end of the second decade of the twenty first century. Many things have happend since the revolution of physics,
                        like the relativity and the quantum, more than one hundred years ago. As well as the arrival of the theory of everything , the superstrings
                        and the M Theory, almost fifty years ago. <Typing.Delay ms={300} /> We have to ask ourselves, where are we? but especially, where are we going? What great ideas are
                        waiting for us?
                        <Typing.Delay ms={500} />
                        <hr style={{marginTop:"0px"}}/>
                        In this quiz, you will have the oportunity to demonstrate your capabilities. Maybe you can be the next who will help to give the next step
                        that will change everything.
                        <Typing.Delay ms={500} /> 
                        <hr style={{marginTop:"0px"}}/>
                        The pattern is simple. You will have four options which just one is the right answer. I recommend you to analize carefully each question 
                        before to make a decision. Work as quickly and carefully as posible without taking too much time in each question.
                        You can answer first the questions you know and after the questions that you do not, but that is up to you.
                        <Typing.Delay ms={500} /> 
                        <hr style={{marginTop:"0px"}}/>
                        All truths are easy to understand once they are discovered; the point is to discover them. Feel free to retake this quiz whenever you want.
                        <Typing.Delay ms={500} /> 
                        <hr style={{marginTop:"0px"}}/>
                        When you feel ready, you can start this quiz. Good luck!
                    </Typing>
                </div>

                <div>
                    <div className="gif-galileo-embeded">    
                        <iframe 
                            src="https://giphy.com/embed/HownivTlA9noY" 
                            width="250" 
                            height="250"  
                            className="giphy-embed" 
                        >
                        </iframe>
                    </div>
                </div>

            </div>

            <div className="buttons-wrapper-physics-instructions">
                <div className="go-back-button-container">
                    <NavLink to="/physics">
                        <button className="go-back-button">Go back</button>
                    </NavLink>
                </div>
                <div className="next-page-button-container">    
                    <NavLink to="/physics-questions">
                        <button className="next-page-button">Start quiz</button>
                    </NavLink>
                </div>
            </div>
            
        </div>
    )
}