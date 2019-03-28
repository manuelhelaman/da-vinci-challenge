import React, { Component } from 'react';
import Typing from 'react-typing-animation'; 

export default class WelcomeMessage extends Component {
    constructor(){
        super()
        this.state = {
            messages: [    
                "Welcome to the Da Vinci challenge",
                "Another voyager! Come in, if you dare",
                "No one has survived to this challenge, and live to tell it",
                "Ha, ha, ha! Why are you staring at the screen that way? Come in! The party is going to start",
                "Who sent you here? Manuel Soto? That guy is so stubborn to take the challenge by himself!",
                "The line is large! But we allways have room for another voyager",
                "The time is now to conquer the world! Don't waste your time",
                "Are you back from your vacations? Ha, ha! We thought you would not return since your last time here",
                "Manuel! Another varmint has entered here!",
                "Consult your doctor before to start this challenge"
            ]
        }

        this.randomShowUp = this.randomShowUp.bind(this);
    }

    randomShowUp = () => { 
        var random =  this.state.messages[Math.floor(Math.random() *this.state.messages.length)]   
        return random
    }
    render() {
        return(
            <div>
                <div className="welcome-message-wrapper">
                    <Typing>
                        <span className="welcome-message">{this.randomShowUp()}</span>
                        <Typing.Backspace count={0} />
                    </Typing>
                </div>
            </div>
        );
    }
}