import React from 'react'
import './styles.css';

import close from '../../assets/icon-close.svg';

const MenuMobile = ({state, toggle}) => {
    return( 
        <div className={state ? "menu-mobile-expanded" : "none"}>
            <nav>
                <button onClick={()=>{toggle(!state)}}><img src={close} alt="close menu"/></button>
                <ul>
                    <li><a href="/">home</a></li>
                    <li><a href="/">shop</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuMobile;