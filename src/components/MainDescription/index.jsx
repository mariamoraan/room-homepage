import React from 'react';

import './styles.css';

import ArrowIcon from '../ArrowIcon';

const MainDescription = () => {
    return(
        <div className="main-description">  
            <h1>Discover innovative ways to decorate</h1>
            <p>
                We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in your 
                own style with our collection and make your property a reflection of you and what you love.
            </p>   
            <a className="main-description-a" href="#">SHOP NOW  <ArrowIcon/></a>
           
        </div>
    );
}

export default MainDescription;