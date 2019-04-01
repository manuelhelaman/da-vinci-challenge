import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Timer extends Component {
    constructor(){
        super()

        this.state = {
            countDown: 6
        }
    }

    componentDidMount(){
        this.myInterval = setInterval(() =>{
            this.setState(prevState => ({
                countDown: prevState.countDown - 1
            }))
        }, 1000)
    }

    // if (this.state.countDown === 0) {
    //     <NavLink to="/time-up"/>;
    // }

    render() {
        const {countDown} = this.state
        return(
            <h1 style={{color: "white"}}>You have {countDown} seconds left</h1>
        )
    }
}