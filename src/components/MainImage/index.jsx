import React, {useState, useEffect} from 'react'
import './styles.css';
import Button from '../Button';
import desktop1 from '../../assets/desktop-image-hero-1.jpg';
import mobile1 from '../../assets/mobile-image-hero-1.jpg';
import desktop2 from '../../assets/desktop-image-hero-2.jpg';
import mobile2 from '../../assets/mobile-image-hero-2.jpg';
import desktop3 from '../../assets/desktop-image-hero-3.jpg';
import mobile3 from '../../assets/mobile-image-hero-3.jpg';

const MainImage = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [actual, setActual] = useState(0);
    const images = [
        {
            'mobile':mobile1,
            'desktop':desktop1
        },
        {
            'mobile':mobile2,
            'desktop':desktop2
        },
        {
            'mobile':mobile3,
            'desktop':desktop3
        },
    ]
    
    const handleNext = () =>{
        console.log("NEXT");
        var next = actual == images.length -1 ? 0 : actual + 1;
        setActual(next);
    }
    const handlePrev = () =>{
        console.log("PREV");
        var prev =  actual - 1 < 0 ? images.length -1 : actual - 1;
        setActual(prev);
    }
    
    
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
      
        return () => {
          window.removeEventListener("resize", handleResize);
        };
    });
    
   
    return(
        <div className="main-image">
            <img src={width < 1440 ? images[actual].mobile : images[actual].desktop} alt="" className="main-image-img"/>
            <nav className="main-descriptio-buttons-nav">
                <Button onclick={handlePrev}/>
                <Button type="right" onclick={handleNext}/>
            </nav>
        </div>
    );
}

export default MainImage;