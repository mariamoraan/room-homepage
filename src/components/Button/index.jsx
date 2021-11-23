import React from 'react';
import './styles.css';

import arrowLeft from '../../assets/icon-angle-left.svg';
import arrowRight from '../../assets/icon-angle-right.svg';
const Button = ({type='next', onclick}) => {
    return(
        <button onClick={onclick} className="button"><img src={type === 'next' ? arrowLeft : arrowRight} alt="" /></button>
    )
}

export default Button;