import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const { carts } = props;
  // calculate total using array reduce mathod 
  const total = carts.reduce((pre, cart)=> pre + cart.salary,0)

  return (
    <div className='cart-main' >
      <h4>Total Selected: {carts.length}</h4>
      {
        // display single programmer name and sallry
        carts.map((cart) => {
          const {name, salary,img,key} = cart
          return (
            <div key={key} className='single-item '>
                <h6><img className='single-item-img' src={img} alt="" /> {name}</h6>
              
              <h6>${salary}</h6>
            </div>
          )
        })
      }
      
      <hr />
      {/* display total cost  */}
       <div className='d-flex justify-content-between'>
        <h6>Total</h6>
        <h6>$ {total}</h6>
      </div> 
    </div>
  );
};

export default Cart;