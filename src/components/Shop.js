import React from 'react';

function Shop() {
  return (
    <section className="shop" id="shop">
      <div className="heading">
        <span>Shop Now</span>
        <h1>Shop Coffee</h1>
      </div>
      <div className="shop-container">
        {[...Array(6)].map((_, index) => (
          <div className="box" key={index}>
            <div className="box-img">
              <img
                src={`https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-8733${5 + index}.jpg`}
                alt="Coffee"
              />
            </div>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <h2>Coffee</h2>
            <span>$12.4</span>
            <a href="#" className="btn">Order Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Shop;