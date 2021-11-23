import React from 'react'
import AboutImage from '../AboutImage';
import AboutText from '../AboutText';

import './styles.css';

import about1 from '../../assets/image-about-dark.jpg';
import about2 from '../../assets/image-about-light.jpg';

const About = () => {
    return(
        <div className="about">
            <AboutImage image={about1}/>
            <AboutText />
            <AboutImage image={about2}/>
        </div>
    )
}

export default About;