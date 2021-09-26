import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header style={{color:'white',textAlign:'center'}}>

      <Navbar></Navbar>

      <h2 className='mt-5 pt-5 text-center'>DeveloperPoints</h2>
      <h2>Total baget: $100000</h2>

      
      
    </header>
  );
};

export default Header;