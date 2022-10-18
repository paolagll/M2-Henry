import React from 'react';
import { Button } from 'bootstrap';
import '../styles/SearchBar.css';


export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div className = 'container'>
    <input type="text" />
    <button className='btnSearch' onClick={() => onSearch('city')}>Agregar</button>
  </div>
};