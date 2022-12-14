import React from 'react';
import '../styles/Card.css'

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  return <div className='card'>
    <button onClick={onClose}>X</button>
    <div>
    <span>{name}</span>
    </div>
    <div>
    <div>
      <span>{min}</span>
      <span></span>
    </div>
    <div>
      <span>{max}</span>
      <span></span>
    </div>
    <div>
      <img src= {`http://openweathermap.org/img/wn/${img}@2x.png`} alt="clima" />
    </div>
  </div>
  </div>
};