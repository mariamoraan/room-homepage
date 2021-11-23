import React from 'react'

import './styles.css';



const AboutImage = ({image}) => {
    return(
        <img src={image} alt="" className="about-image"/>
    )
}

export default AboutImage;