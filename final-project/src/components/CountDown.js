import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-07-24") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <section className="categories spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="categories__text">
              <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="categories__hot__deal">
              <img src="assets/img/product-sale.png" alt='' />
              <div className="hot__deal__sticker">
                <span>Sale Of</span>
                <h5>$29.99</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1">
            <div className="categories__deal__countdown">
              <span>Deal Of The Week</span>
              <h2>Multi-pocket Chest Bag Black</h2>
              <div className="categories__deal__countdown__timer" id="countdown">
                <div className="cd-item">
                  <span>{days}</span> <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>{hours}</span> <p>Hours</p>
                </div>
                <div className="cd-item">
                  <span>{minutes}</span> <p>Minutes</p>
                </div>
                <div className="cd-item">
                  <span>{seconds}</span> <p>Seconds</p>
                </div>
              </div>
              <Link to="/shop" className="primary-btn">Shop now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
