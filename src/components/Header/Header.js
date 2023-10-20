import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='header'>
        <div className='company'><h1>MALLARD OIL</h1></div>
        <p className='business-info'>Keeping South Shore MA warm for over 40 years</p>
      <p className='phone-number'>781-740-4767</p>
      <h4 className='motto'>"We don't fly south for the winter!" </h4>
    </div>
  );
}

export default Header;
