import React, { Component } from 'react';
import Logo from '../../../static/assets/images/logo.jpg';
import WelcomeMessage from'./welcome-message';
import RedirectButton from "../home-page/redirect-button";

export default class HomePage extends Component {

    render() {
        return(     
            <div>
                <div className="logo-wrapper">
                    <img src={Logo} alt="logo" style={{height:"100%", width: "15rem"}} />
                </div>
                <WelcomeMessage />
                <RedirectButton />
            </div>
        )
    }
}
