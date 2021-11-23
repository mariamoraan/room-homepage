import React, {useState} from 'react'
import './styles.css';
import menu from '../../assets/icon-hamburger.svg';
import MenuMobile from '../MenuMobile';


const Menu = () => {
    const [menuState, setMenuState] = useState(false);
    return(
        <div>
            <nav className="menu">
                <nav className="menu-mobile-icon">
                    <button onClick={()=>{setMenuState(!menuState)}}><img alt="menu" src={menu}/></button>
                </nav>
                <h1>room</h1>
                <ul className="menu-expanded">
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
                
            </nav>
            <MenuMobile state={menuState} toggle={setMenuState}/>
        </div>
    );
}
export default Menu;