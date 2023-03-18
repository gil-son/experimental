import React, { useState, useEffect } from 'react';
import './styles.css';
import Image from './../../assets/images/matrizero.png';

const Circle = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      setTimeout(() => setIsVisible(true), 500);
    }, []);
  
    return (
        <svg className={`spin ${isVisible ? 'fade-in' : ''}`} style={{transformOrigin: 'center', position: 'absolute', top: 19, left: 200, zIndex: 9999, width: 140, height:140}}>
        <image href={Image} width="25%" height="25%" />
      </svg>
    );
  };

export default Circle;