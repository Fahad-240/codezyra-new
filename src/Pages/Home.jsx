import React, { useState, useEffect } from "react";
import "./Home.css";

const slides = [
  {
    id: 1,
    text: "We Are A Solution Driven Team",
   para: "we are you web development, Digital Marketing, SEO and Mobile Apps Development company in paistan , Top Software house Pakistan",
    bg: "/images/baner1.png",
  },
  {
    id: 2,
    text: "We Turns your Ideas into Reality",
    para: "we are you web development, Digital Marketing, SEO and Mobile Apps Development company in paistan , Top Software house Pakistan",
    bg: "/images/baner2.png",
  },
  {
    id: 3,
    text: "Your Vision, Our Technology",
    para: "we are you web development, Digital Marketing, SEO and Mobile Apps Development company in paistan , Top Software house Pakistan",
    bg: "/images/baner3.png",
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
    <div
      className="slider"
      style={{ backgroundImage: `url(${slides[current].bg})` }}
    >
      <div className="slider-overlay">
        <h1>{slides[current].text}</h1>
        <p>{slides[current].para}</p>
        <div className="detail-btn">
          <button>Details</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
