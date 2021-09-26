import React from 'react';
import Rating from 'react-rating';
import './Card.css'


const Card = (props) => {
  // distucaring using js object distucating mathod 
  const { addBtnHandelar, programmer } = props;
  const { name, img, rating, skill, experience, salary,country } = programmer;
  
  return (
   <div className="col">
    <div className="card h-100">
        <img src={img} className="card-img-top cart-img rounded-circle" alt="programmer" />
        {/* display card information  */}
      <div className="card-body">
          <h5 className="card-title text-center"> {name}</h5>
          <h6 className="card-text">Skills: {skill}</h6>
          <h6>Experience : {experience}</h6>
          <h6>Salary : $ {salary}</h6>
          <h6>Country : {country}</h6>
          {/* display rating using react rating  */}
           <h6>Rating : <Rating
            emptySymbol="fa fa-star-o rating-icon"
            fullSymbol="fa fa-star rating-icon "
            fractions={2}
            initialRating={rating}
            readonly
          ></Rating></h6>
          {/* social icon  */}
          <div className='social-icon-parent'>
            <i className="fab fa-facebook-square social-icon"></i>
            <i className="fab fa-twitter-square social-icon"></i>
            <i className="fab fa-linkedin social-icon"></i>
            <i className="fab fa-instagram-square social-icon"></i>
            <i className="fab fa-github-square social-icon"></i>
          </div>
        </div>
        {/* add or selected button  */}
      <div className="card-footer text-center">
        <button onClick={()=> addBtnHandelar(programmer)} className='btn btn-secondary text-center'> <i className="fab fa-opencart"></i> select for Hire</button>
      </div>
    </div>
  </div>
  );
};

export default Card;