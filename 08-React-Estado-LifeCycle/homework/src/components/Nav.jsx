import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav class="navbar navbar-dark bg-primary">
      <div className='container-fluid'>
        <img src={Logo} alt={''} />
        <span>Weather App</span>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Nav;
