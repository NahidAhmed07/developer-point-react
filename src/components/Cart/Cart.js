import React from 'react';

const Cart = (props) => {
  const { carts } = props;
  // calculate total using array reduce mathod 
  const total = carts.reduce((pre, cart)=> pre + cart.salary,0)

  return (
    <div style={{color:'white', position:'sticky', top:'100px'}}>
      <h4>Total Selected: {carts.length}</h4>
      {
        // display single programmer name and sallry
        carts.map((cart, index) => {
          return (
            <div className='d-flex justify-content-between'>
              <h6>{index + 1}. {cart.name}</h6>
              <h6>&#2547; {cart.salary}</h6>
            </div>
          )
        })
      }
      
      <hr />
      {/* display total cost  */}
       <div className='d-flex justify-content-between'>
        <h6>Total</h6>
        <h6>&#2547; {total}</h6>
      </div>


      
    </div>
  );
};

export default Cart;