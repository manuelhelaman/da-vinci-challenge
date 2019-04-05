import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Typing from 'react-typing-animation'; 

export default class RedirectButton extends Component {
    constructor(){
        super()

        this.state = {
            gauss: false,
            gaussMessage: false,
            mathLink: false,
            galileo: false,
            galileoMessage: false,
            physicsLink: false,
            heisenberg: false,
            heisenbergMessage: false,
            chemistryLink: false,
            matisse: false,
            matisseMessage: false,
            artsLink: false
        }
        this.displayMath = this.displayMath.bind(this);
        this.displayPhysics = this.displayPhysics.bind(this);
        this.displayChemistry = this.displayChemistry.bind(this);
        this.displayArts = this.displayArts.bind(this);
    }

    displayMath = () => {
        this.setState({
            gauss: !this.state.gauss,
            gaussMessage: !this.state.gaussMessage,
            mathLink: !this.state.mathLink
        })
    }

    displayPhysics = () => {
        this.setState({
            galileo: !this.state.galileo,
            galileoMessage: !this.state.galileoMessage,
            physicsLink: !this.state.physicsLink
        })
    }

    displayChemistry = () => {
        this.setState({
            heisenberg: !this.state.heisenberg,
            heisenbergMessage: !this.state.heisenbergMessage,
            chemistryLink: !this.state.chemistryLink
        });
    }

    displayArts = () => {
        this.setState({
            matisse: !this.state.matisse,
            matisseMessage: !this.state.matisseMessage,
            artsLink: !this.state.artsLink
        });
    }

    render() {
        var gauss = require("../../../static/assets/images/carl-frierich-gauss.jpg")
        var galileo = require("../../../static/assets/images/galileo.jpg")
        var heisenberg = require("../../../static/assets/images/heisenberg.jpg")
        var matisse = require("../../../static/assets/images/henri-matisse.jpg")
        
        return(
            <div className="images-and-buttons-container">
                <div className="images-and-buttons-wrapper">

                    <div className="flexbox-for-image-and-button">

                        <div className="image-and-button-container">
                            <button onClick={() => this.displayMath()} className="button">Mathematics</button>
                            <div className="image-and-text">    
                                <div style={{width:"100%"}}>   
                                    <div className="image-scientist">                     
                                        {this.state.gauss ? <img src={gauss} alt="gauss" /> : " " }
                                    </div>
                                    {this.state.gaussMessage ? <Typing style={{color: "white"}}>For this Quiz, Carl Friedrich Guass is going to be with you.</Typing>  : " " } 
                                    {this.state.mathLink ? <NavLink to="/math" style={{color: "#e83e8c"}}>Click here to start the challenge</NavLink> : " "}
                                </div>                               
                            </div>
                        </div>

                        <div className="image-and-button-container">
                            <button onClick={() => this.displayPhysics()} className="button">Physics</button>   
                            <div className="image-and-text">    
                                <div style={{width:"100%"}}>   
                                    <div className="image-scientist">                      
                                        {this.state.galileo ? <img src={galileo} alt="galileo" style= {{height:"280px"}}/> : " "}
                                    </div>
                                    {this.state.galileoMessage ? <Typing style={{color: "white"}}>For this Quiz, Galileo Galilei is going to be with you.</Typing>  : " " }
                                    {this.state.physicsLink ? <NavLink to="/physics" style={{color: "#e83e8c"}}>Click here to start the challenge</NavLink> : " "}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="images-and-buttons-wrapper">

                    <div className="flexbox-for-image-and-button">

                        <div className="image-and-button-container">
                            <button onClick={() => this.displayChemistry()} className="button">Chemistry</button>
                            <div className="image-and-text">
                                <div style={{width:"100%"}}>
                                    <div className="image-scientist">
                                        {this.state.heisenberg ? <img src={heisenberg} alt="heisenberg" style= {{height:"280px", marginBottom: "30px"}}/> : " "}
                                    </div>
                                    {this.state.heisenbergMessage ? <Typing style={{color: "white"}}>For this Quiz, Heisenberg is going to be with you.</Typing>  : " " }
                                    {this.state.chemistryLink ? <NavLink to="/chemistry" style={{color: "#e83e8c"}}>Click here to start the challenge</NavLink> : " "}
                                </div>
                            </div>    
                        </div>

                        <div className="image-and-button-container">
                            <button onClick={() => this.displayArts()} className="button">History and literature</button>
                            <div className="image-and-text">
                                <div style={{width:"100%"}}>
                                    <div className="image-scientist">
                                        {this.state.matisse ? <img src={matisse} alt="matisse" style= {{height:"280px", marginBottom: "30px"}}/> : " "}
                                    </div>
                                    {this.state.matisseMessage ? <Typing style={{color: "white"}}>For this Quiz, Henri Matisse is going to be with you.</Typing>  : " " }
                                    {this.state.artsLink ? <NavLink to="/arts" style={{color: "#e83e8c"}}>Click here to start the challenge</NavLink> : " "}
                                </div>    
                            </div>    
                        </div>

                    </div>

                </div>

            </div>    
        );
    }
}