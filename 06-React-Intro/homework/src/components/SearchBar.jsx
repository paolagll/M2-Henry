import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return <div>
    <input type="text" />
    <button onClick={() => onSearch('city')}>Agregar</button>
  </div>
};