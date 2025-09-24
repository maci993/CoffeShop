
import React from 'react';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <span>Welcome To</span>
        <h1>Coffee Shop</h1>
        <h2>Free Coffee is a <br /> tap away</h2>
        <a href="#" className="btn">Join Now</a>
      </div>
      <div className="home-img">
        <img
          src="https://e0.pxfuel.com/wallpapers/477/491/desktop-wallpaper-starbucks-japan-reveals-second-sakura-frappuccino-for-cherry-blossom-season-2020-soranews24-japan-news.jpg"
          alt="Starbucks"
          height="400px"
          width="50px"
        />
      </div>
    </section>
  );
}

export default Home;