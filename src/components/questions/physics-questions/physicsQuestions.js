import React, { Component } from 'react';
import ScoreArea from './ScoreArea';
import QuizArea from './QuizArea'; 
import Timer from "../../timer";

export default class PhysicsQuestion extends Component {
    constructor(props) {
        super(props)

        var HookLaw = require('../../../../static/assets/images/images-for-questions/ley-de-hook.jpg')
        var Tk = require('../../../../static/assets/images/images-for-questions/Tk.jpg')
        var Battery = require('../../../../static/assets/images/images-for-questions/battery.jpg')
        var SumatoriaF0 = require('../../../../static/assets/images/images-for-questions/sumatoria-f-0.jpg')
        var SumatoriaFMA = require('../../../../static/assets/images/images-for-questions/sumatoria-f-ma.jpg')
        var SumatoriaR0 = require('../../../../static/assets/images/images-for-questions/sumatoria-r-0.jpg')
        var SumatoriaTI = require('../../../../static/assets/images/images-for-questions/sumatoria-t-i.jpg')
        var TKg = require('../../../../static/assets/images/images-for-questions/t-kg.jpg')
        var FiguraRueda = require('../../../../static/assets/images/images-for-questions/figura-rueda.jpg')

        var dataSet = [
            {
                question: "For a constant velocity, the speed is",
                answers: [
                    "Less than the magnitude of the velocity",
                    "Greater than the magnitude of the velocity",
                    "Equal to the magnitude of the velocity vector",
                    "Independent of the velocity magnitude"
                ],
                correct: 2
            },
            {
                question: "If we estimate the acceleration of gravity equals to 9.8 m/s^2 and despising the friction of the air, calculate the time required for a stone thrown upward with an initial velocity of 39.2 m/s to reach its highest point.",
                answers: [
                    "4.0 s",
                    "8.0 s",
                    "9.8 s",
                    "39.2 s"
                ],
                correct: 0
            },
            {
                question: "On a 100kg object are applied two forces, one of 20 N and the other of 30 N with the same direction but different orientation. What is the object's acceleration magnitude?",
                answers: [
                    "0.3 m/s^2",
                    "0.2 m/s^2",
                    "0.1 m/s^2",
                    "0.5 m/s^2"
                ],
                correct: 2
            },
            {
                question: <div style={{marginTop: "-3em"}}>Hooke's law about the relationship between spring's displacement x and the F force, as it's shown in the image, establishes that x is,<div style={{display: "flex", justifyContent:"center"}}><img src={HookLaw} /></div></div>,
                answers: [
                    "Inversely proportional to F",
                    "Directly porportional to F",
                    "Directly proportional to the square of F",
                    "Inversely proportional to the square of F"
                ],
                correct: 1
            },
            {
                question: "A 7.0 kg cannonball is shoot vertically upward with a speed of 120 m/s. How much Kinetic energy Ke does it have when it leaves, and how much Potencial energy Pe does it have in its highest point of the trayectory?",
                answers: [
                    "Ke= 420 J, Pe= 0 J",
                    "Ke= 420 J, Pe= 420 J",
                    "Ke= 50, 400 J, Pe= 0 J",                           
                    "Ke= 50, 400 J, Pe= 50,400 J"
                ],
                correct: 3
            },
            {
                question: "A kid is standing on a little car, both in rest, the kid's weight is 30kg, then he jumps forward to 2m/s, then the little car is thrown backwards to 12m/s. If we dispise the friction, what is the mass of the little car?",
                answers: [
                    "5.0 kg",
                    "6.0 kg",
                    "2.5 kg",
                    "0.8 kg"
                ],
                correct: 1
            },
            {
                question: "A system is in thermal equilibrium when",
                answers: [
                    "In a process, its temperature does not vary",
                    "Its temperature is equal to that of another system with which it is in thermal contact",
                    "It is heated by means of work",
                    "Its preasure and its mass stays constant"
                ],
                correct: 1
            },
            {
                question:   <div style={{display: "grid", gridTemplateRows: "1px", marginLeft:"9em"}}>   
                                To convert a Celsius temperature 
                                <div style={{display:"flex", justifyContent:"center", marginLeft:"15.5em"}}>
                                    <div style={{display:"grid", gridTemplateColumns: "1fr 70fr"}}>
                                        T
                                        <div style={{fontSize: "25px", marginTop:"15px"}}>
                                            c
                                        </div>
                                    </div> 
                                </div>
                                <div>
                                    value to its equivalent value in the Kelvin Tk temperature scale, the expression is used.
                                </div> 
                                
                            </div>,
                answers: [
                    <img src={Tk} />,
                    "Tk = Tc+273",
                    "Tk = Tc-273",
                    "Tk = 1.8(Tc + 273)"
                ],
                correct: 1
            },
            {
                question: "To the amount of heat that a gram of a substance needs to raise its temperature one celisus degree, it is known as",
                answers: [
                    "Thermal capacity",
                    "Latent heat of fusion",
                    "Latent heat of vaporization",
                    "Specific thermal capacity"
                ],
                correct: 3
            },
            {
                question: "A wave formed on a string has a wavelength of 10cm and a period of 2s, at what speed does it propagate?",
                answers: [
                    "20.00 cm/s",
                    "0.25 cm/s",
                    "5.00 cm/s",
                    "2.00 mc/s"
                ],
                correct: 2
            },
            {
                question: "The waves reach the beach and sometimes there are some waves larger than the average. The above is due to the wave behavior of the waves, since one of these characteristics is that",
                answers: [
                    "The waves are refracted",
                    "The waves are polarized",
                    "The waves are reflected",
                    "The waves  are overlap"
                ],
                correct: 3
            },
            {
                question: "For a cable which has an electrical resistance of 10Ω, circulates an electric current of 10 A. What is the voltage of the cable?",
                answers: [
                    "100 V",
                    "20 V",
                    "10 V",
                    "1 V"
                ],
                correct: 0
            },
            {
                question: <div style={{marginTop:"-4em"}}>In the electrical circuit, 3 equal light bulbs connected to a battery are shown. If the filament of light bulb 1 melts, what happens with the remaining light bulbs?", <div style={{display:"flex", justifyContent:"center"}}><img src={Battery} /></div></div>,
                answers: [
                    "Buls 2 goes out and bulbs 3 remains unchanged",
                    "bulbs 2 and bulbs 3 go out",
                    "Light bulbs 2 and 3 remain on",
                    "The light bulb 2 goes out and the light bulb 3 shines more than before"
                ],
                correct: 0
            },
            {
                question: "How long will an Olympic pool 50 m long by 25m wide and 3m deep be filled, if a 40cm diameter tube is used, through which water flows at a speed of 4m/s",
                answers: [
                    "0.0052 hours",
                    "0.020 hours",
                    "1.63 hours",
                    "2.07 hours"
                ],
                correct: 3
            },
            {
                question: "The phenomenon that for the first time revealed the dual wave-particle character of light was",
                answers: [
                    "The production of x-rays",
                    "The photoelectric effect",
                    "The natural radioactivity",
                    "The discovery of cathode rays"
                ],
                correct: 3
            },
            {
                question: "Which of the following options is a postulate of the Bohr atomic model?",
                answers: [
                    "According to beta radiation there must be electrons in the atomic nucleus",
                    "The electrons in circular orbit when accelerated lose energy and fall to the nucleus",
                    "Electrons move in stationary states around the nucleus without losing energy",
                    "An electron in the atom can continuously vary the value of its energy"
                ],
                correct: 2
            },
            {
                question: "A uniform block of 20cm in length and 20cm in height rests on an inclined plane. A small ripple prevents it from sliding on the plane. What is the angle between the inclined plane and the horizontal plane, from which the block begins to turn?",
                answers: [
                    "15°",
                    "45°",
                    "60°",
                    "30°"
                ],
                correct: 1
            },
            {
                question: "Identify the mathematical model of the second condition of static equilibrium of a body",
                answers: [
                    <img src={SumatoriaF0}/>,
                    <img src={SumatoriaFMA}/>,
                    <img src={SumatoriaR0}/>,
                    <img src={SumatoriaTI}/>
                ],
                correct: 2
            },
            {
                question: "the lever arm is",
                answers: [
                    "The vector that unites the center of gravity with the origin",
                    "Is the perpendicular distance from the axis of rotation to the line of action of the force.",
                    "The distance that exist betweenthe origin and travel's final point",
                    "The displacement suffered by the mobile between time 0 and the final time"
                ],
                correct: 1
            },
            {
                question: <div style={{marginTop:"-4em"}}> For the situation shown in the figure, determine T3 in kilograms-force, if the plank is of negligible mass<div style={{display:"flex", justifyContent:"center"}}><img src={TKg} /></div></div>,
                answers: [
                    "200/3",
                    "100/3",
                    "75/3",
                    "50/3"
                ],
                correct: 0
            },
            {
                question: "To determine if a rigid body is in equilibrium, the vector sum of the gravitational force acting on the body's particles can be replaced by a single force that acts on:",
                answers: [
                    "Any point of its periphery",
                    "The geometric center",
                    "The center of mass",
                    "The center of gravity"
                ],
                correct: 3
            },
            {
                question: "What is the average speed of a man walking 70m with a speed of 1m/s and then running 70m with a speed of 3m/s?",
                answers: [
                    "1.00 m/s",
                    "0.75 m/s",
                    "1.25 m/s",
                    "1.50 m/s"
                ],
                correct: 1
            },
            {
                question: "How long does it take for a rock to fall into an abyss the first 50 m, assuming that gravity g=10m/s^2?",
                answers: [
                    "10√10 s",
                    "√10 s",
                    "20 s",
                    "10 s"
                ],
                correct: 1
            },
            {
                question: "If we want to keep a body moving at constant speed, we must apply a force",
                answers: [
                    "Proportional to its mass",
                    "Proportional to its weight",
                    "Proportional to its speed",
                    "Cero"
                ],
                correct: 3
            },
            {
                question: <div style={{marginTop:"-4em"}}>According to the figure, determine the value of the acceleration of the system, considering that the gravity is g=10m/s^2<div style={{display:"flex", justifyContent:"center"}}><img src={FiguraRueda} /></div></div>,
                answers: [
                    "4.33 m/s^2",
                    "3.33 m/s^2",
                    "2.66 m/s^2",
                    "1.33 m/s^2"
                ],
                correct: 1
            },
            {
                question: "Archimedes' principle states that the upward buoyant force that is exerted on a body immersed in a fluid, whether fully or partially submerged, is equal to the ______ of the fluid that the body displaces and acts in the upward direction at the center of mass of the displaced fluid.",
                answers: [
                    "Weight",
                    "Preassure",
                    "Force",
                    "Mass"
                ],
                correct: 0
            },
            {
                question: "Determine the amount of heat in kilocalories that must be supplied to 5 kg of water to raise its temperature from 10°C to 80°C, if the specific heat of the water is 1 kcal / kg° C",
                answers: [
                    "350",
                    "300",
                    "280",
                    "250"
                ],
                correct: 0
            },
            {
                question: "To what law of thermodynamics does the following mathematical expression refer? Q=ΔU + W",
                answers: [
                    "First",
                    "Second",
                    "Third",
                    "Fourth"
                ],
                correct: 0
            },
            {
                question: "The variation of the entropy of the universe ________ in an irreversible process and _______ in the reversible processes",
                answers: [
                    "increases - increases",
                    "increases - is constant",
                    "decreases - increases",
                    "decreases - is constant"
                ],
                correct: 1
            },
            {
                question: "Under electrostatic conditions, the excess load of ________ resides on the surface",
                answers: [
                    "the insulators",
                    "the semiconductors",
                    "the conductors",
                    "all the materials"
                ],
                correct: 2
            },
        ]    

        this.state = {
            current:0, 
            dataSet:dataSet, 
            correct:0, 
            incorrect:0
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(choice) {
        if (choice == this.state.dataSet[this.state.current].correct) {
          this.setState({correct: this.state.correct + 1})
        } else {
          this.setState({incorrect: this.state.incorrect + 1})
        }
        
        if (this.state.current == 29) {
          this.setState({current: 0})
          this.setState({incorrect: 0}) 
          this.setState({correct: 0})
        } else {
            this.setState({current: this.state.current + 1}) 
        }
    }
      
    render() {
        return(
            <div className="score-question-and-options-container">
                <Timer />
                <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
                <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
            </div>
        )
    }
}