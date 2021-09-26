import React from 'react';

const Fooder = () => {

  const footerStyle = {
    padding: '20px',
    borderTop: '1px solid gray',
    marginTop:'20px'
    
  }
  return (
    <div style={footerStyle}>
      <p className='text-center text-white m-0'> Copyright © 2021 DeveloperPoints </p>
    </div>
  );
};

export default Fooder;