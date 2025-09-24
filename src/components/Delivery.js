
import React from 'react';

function Delivery() {
  return (
    <section id="delivery">
      <div className="heading">
        <span className="span">Get Now</span>
        <h1 className="order">Order With Uber Eats</h1>
      </div>
      <div className="container">
        <div className="delivery-img">
          <img
            id="delivery-img1"
            src="https://www.edume.com/hubfs/Seamlessness%20Campaign%20%283%29.png#keepProtocol"
            alt="Delivery"
          />
        </div>
        <div className="delivery-text">
          <h2>Today deserve delivery</h2>
          <p>Lorem Ipsum is simply dummy text of the </p>
          <p>Lorem Ipsum has been the industry's 1500s.</p>
          <a href="#" className="btn">Order Now</a>
        </div>
      </div>
    </section>
  );
}

export default Delivery;