import React, { Component } from 'react';

export default class Timer extends Component {
    constructor(){
        super()

        this.state = {
            countDown: 2400
        }

    }

    componentDidMount(){
        this.myInterval = setInterval(() =>{
            this.setState(prevState => ({
                countDown: prevState.countDown - 1
            }))
        }, 1000)

    }

    componentDidUpdate(){    
        if (this.state.countDown === 0) {
            window.location.href = "/time-up";
        }
    }

    render() {
        const {countDown} = this.state
        return(
            <h1 className="timer-container">You have {countDown} seconds left</h1>
        )
    }
}