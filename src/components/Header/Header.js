import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'

const Header = () => {
  return (
    <header style={{color:'white',textAlign:'center'}}>

      <Navbar> </Navbar>

      <div className='header-container container-fluid'>
        <h2 className='mt-5 pt-4 text-center'>Make a Professional Developer Team</h2>
        <p><small> — We can help you to build high-quality software solutions and products as well as deliver a wide range of related professional services.</small></p>
        <h3>Total baget: $100000</h3>
      </div>
    </header>
  );
};

export default Header;