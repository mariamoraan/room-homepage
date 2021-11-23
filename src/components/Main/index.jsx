import React from 'react'
import MainDescription from '../MainDescription';
import MainImage from '../MainImage';


import './styles.css';

const Main = () => {
    return(
        <div className="main">
            <MainImage />
            <MainDescription />
        </div>
    );
}

export default Main;