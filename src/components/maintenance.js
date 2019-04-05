import React from 'react';
import {NavLink} from 'react-router-dom';

export default function() {
    return(
        <div>
            <h1 className="maintenance">We so sorry! This quiz is under maintenance :( </h1>
            <iframe src="https://giphy.com/embed/NKLdcqhwo2f8A" width="480" height="145" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/mathematics-sin-pi-NKLdcqhwo2f8A"></a></p>
            <NavLink to="/math-instructions">
                <button className="go-back-from-maintenance">Go back</button>
            </NavLink>
        </div>
    )
}