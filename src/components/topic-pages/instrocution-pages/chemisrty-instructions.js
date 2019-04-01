import React from 'react';
import IntroducingHeisenberg from "../../../../static/assets/images/introducing-heisenberg.jpg"
import ImageFadeIn from 'react-image-fade-in'
import Typing from 'react-typing-animation'; 
import {NavLink} from 'react-router-dom';

export default function() {
    return(
        <div className="chemistry-instructions-container">
            <div className="image-fade-in-heisenberg-wrapper">
                <ImageFadeIn style={{borderRadius:"100px", marginTop:"10px"}} width={300} height={200} opacityTransition={5} src={IntroducingHeisenberg} />
            </div>

            <div className="instructions-chemistry-wrapper">
                <Typing>
                    <Typing.Delay ms={3000} />
                    Knowledge is a valuable thing. You can whether do good, or do evil. I choose this way, but you are in time to go back and pretend this never happend.
                    <Typing.Delay ms={5000} /> 
                    <hr style={{marginTop:"-10px"}}/>
                    If you decided to stay, you better pass this challenge. <Typing.Delay ms={500} /> Life is full of hard decisions, and so this challenge. <Typing.Delay ms={500} /> Sometimes you wont have the answer of all
                    <hr style={{marginTop:"-10px"}}/>
                    the questions that you will face. Questions whith four options, and only one is the right answer.<Typing.Delay ms={500} /> You better have to be ready. 
                    <Typing.Delay ms={500} />
                    <hr style={{marginTop:"-10px"}}/>
                    Be cause I know chemistry is not as easy as many people think, I will give you a periodic table that you can see whenever you want. Other recomendations
                    <hr style={{marginTop:"-10px"}}/>
                    that I can give are: Work as fast as posible, do not try to make calculations in your head, write them down. You can answer first the questions you 
                    <hr style={{marginTop:"-10px"}}/>
                    know and after the questions that you do not, but that is up to you. <Typing.Delay ms={500} /> If you are ready, you can start the quiz, good luck.
                </Typing>
            </div>

            <div className="buttons-wrapper-chemistry-instructions">
                <div className="go-back-button-container">
                    <NavLink to="/chemistry">
                        <button className="go-back-button">Go back</button>
                    </NavLink>
                </div>
                <div className="next-page-button-container">    
                    {/* <NavLink to="/chemistry-instructions"> */}
                        <button className="next-page-button">start quiz</button>
                    {/* </NavLink> */}
                </div>
            </div>
        </div>
    )
}