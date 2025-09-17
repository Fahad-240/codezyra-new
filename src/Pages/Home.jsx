import React, { useState, useEffect } from "react";
import "./Home.css";

const slides = [
  {
    id: 1,
    text: "We Are A Solution Driven Team",
    para: "We are your Web Development, Digital Marketing, SEO and Mobile Apps Development company in Pakistan, Top Software House Pakistan",
    bg: "/images/baner1.png",
  },
  {
    id: 2,
    text: "We Turn Your Ideas into Reality",
    para: "We are your Web Development, Digital Marketing, SEO and Mobile Apps Development company in Pakistan, Top Software House Pakistan",
    bg: "/images/baner2.png",
  },
  {
    id: 3,
    text: "Your Vision, Our Technology",
    para: "We are your Web Development, Digital Marketing, SEO and Mobile Apps Development company in Pakistan, Top Software House Pakistan",
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
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="slider-overlay">
              <h1>{slide.text}</h1>
              <p>{slide.para}</p>
              <div className="detail-btn">
                <button>Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="top-software">
        <div className="top1">
          <img src="./images/top1.png" alt="" />
        </div>
        <div className="top-para">
          <h1>Top Software House In Paistan</h1>
          <div className="head-line"></div>
          <p>Exytex technologies is an IT Software Company currently working in Pakistan. We provide services for the professional web development, Graphic Designing, Digital Marketing, and mobile applications</p> <br />
          <p> We create a unique web design and corporate identity, as well as promote websites and conduct a comprehensive advertising campaign. Exytex is a top software house in Pakistan registered by PSEB and also the best web applications and software Development Company in Pakistan. Our main advantage is that you can go through the entire process of web development.</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
