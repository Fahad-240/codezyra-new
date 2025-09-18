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

const serviceCard = [
  {
    id: 1,
    title:"Web Development",
    img: "./images/web.PNG",
    para:"We create and develop sites with high conversion, which are easy to bring to the TOP. We fully manage the project or help the team on the client-side"
  },
    {
    id: 2,
    title:"Mobile App",
    img: "./images/mobile.PNG",
    para:"We conduct competitive market analysis, use the best solutions to create Mobile Apps. We implement business tasks using user-friendly interfaces based on analytics."
  },
    {
    id: 3,
    title:"Digital Marketing",
    img: "./images/digital.PNG",
    para:"We help you increase the sales of your product or service through a digital strategy of search engine positioning and other channels so that you obtain the best results."
  },
    {
    id: 4,
    title:"Software Development",
    img: "./images/software.PNG",
    para:"Enterprise resource and Our team of IT specialists has extensive practical experience in creating first-class solutions for integrating enterprise business process management systems. You will be able to manage your projects in one click."
  },
    {
    id: 5,
    title:"IOS Development",
    img: "./images/ios.PNG",
    para:"Creation of applications for iOS. The difficulty of developing applications for iOS is that Apple dictates its own rules in design and functionality. Using the SLEEP KEEKER application as an example, we will show how the development of applications"
  },
    {
    id: 6,
    title:"Web Development",
    img: "./images/web.PNG",
    para:"We create and develop sites with high conversion, which are easy to bring to the TOP. We fully manage the project or help the team on the client-side"
  }
]

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
          <p>Exytex technologies is an IT Software Company currently working in Pakistan. We provide services for the professional web development, Graphic Designing, Digital Marketing, and mobile applications</p>
          <p> We create a unique web design and corporate identity, as well as promote websites and conduct a comprehensive advertising campaign. Exytex is a top software house in Pakistan registered by PSEB and also the best web applications and software Development Company in Pakistan. Our main advantage is that you can go through the entire process of web development.</p>
        </div>

      </div>

      <div className="service-section">
 <div className="service-heading">Our Services</div>
        <div className="service-line"></div>
        <div className="service-cards">
        {
          serviceCard.map(card => (
            // <div className="card" key={card.id}>
            //   <img src={card.img} alt={card.title} />
            //   <h3>{card.title}</h3>
            //   <p>{card.para}</p>
            // </div>
             <div className="card">
          <img src={card.img} alt={card.title} />
          <h3>{card.title}</h3>
          <p>{card.para}</p>
         <div className="read">Read More</div>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default Home;
