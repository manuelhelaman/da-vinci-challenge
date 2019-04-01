import React from 'react';
import ImageFadeIn from 'react-image-fade-in'
import {NavLink} from 'react-router-dom';
import Typing from 'react-typing-animation'; 
import MathFormulas from '../instrocution-pages/math-formulas';
import IntroducingGaus from "../../../../static/assets/images/introducing-gauss.jpg";




export default function() {
    const asymptoteFunction = "f(x)=2log(x-3)"
    return(
        <div className="math-instructions-container">

            <div className="image-and-question">
                <div className="question-and-formula" style={{color:"white"}}>
                    What is the equation of the vertical asymptote of the function? <MathFormulas asymptote={asymptoteFunction}/>
                    <div>
                        <div>A) x= 3</div>
                        <div>B) y= -3</div>
                        <div>C) x= -3</div>
                        <div>D) y= 3</div>
                    </div>
                </div>
                <div className="image-fade-in-and-text-gaus-container">
                    <div className="image-fade-in-and-text-gaus-wrapper">
                        <ImageFadeIn style={{borderRadius:"100px", marginTop:"10px"}} width={300} height={150} opacityTransition={5} src={IntroducingGaus} />               
                    </div>
                    <div style={{color:"#6fe1e7", fontSize:"large", marginTop:"-70px", marginRight: "60px"}}>
                        <Typing speed={10}>
                            <Typing.Delay ms={5000} />
                            Is that question a little bit hard?<Typing.Delay ms={500} /> The right answer is the option A) x=3.
                            <Typing.Delay ms={500} />
                            <hr style={{ marginTop: "0"}}/>
                            As you saw in this example, I asked a question about logarithmic functions, graphs and asymptotes. <Typing.Delay ms={500} /> 
                            Just one option was the right answer, and it will be the same way for
                            <hr style={{ marginTop: "-15px"}}/>
                             the rest of the questions in this quiz.
                            <Typing.Delay ms={500} />
                            <hr style={{ marginTop: "0"}}/>
                            Evidently you will face with harder questions than others.<Typing.Delay ms={500} /> You can answer first the questions you know and after the questions that you do not,
                            but that is up to you.
                            <Typing.Delay ms={500} />
                            <hr style={{ marginTop: "-15px"}}/>
                             Work as quickly and carefully as posible without taking too much time in each question.
                            <Typing.Delay ms={500} />
                             Avoid to make extensive calculations. <Typing.Delay ms={500} /> Remember to analize carefully 
                             <hr style={{ marginTop: "-15px"}}/>
                             the questions and 
                            look for an eficient way to select the right answer among the different options. <Typing.Delay ms={500} />
                            Do not forget to take notes, and if you do not know the answer, make your best guess! <Typing.Delay ms={500} />
                            You can start the quiz whenever you are ready. <Typing.Delay ms={100} /> Good look! 
                        </Typing>
                    </div> 
                </div>
            </div>


            <div className="buttons-wrapper">
                <div className="go-back-button-container">
                    <NavLink to="/math">
                        <button className="go-back-button" style={{marginTop:"50px"}}>Go back</button>
                    </NavLink>
                </div>

                <div className="next-page-button-container">    
                    <button className="next-page-button" style={{marginTop:"50px"}}>Next Page</button>
                </div>
            </div>

        </div>
    )
}

// Recuerda que debes de implementar una función o una manera que evite que el usuario pueda ir a otras partes de la aplicaión poniendo algo en el url cuando esté en el quiz.