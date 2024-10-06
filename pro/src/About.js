import React from 'react';
import './Leftside.css';

function About() {
  return (
    <div className="container">
      
      <div className="left-side">
        <h2>OUR STORY</h2>
        <p>
          Welcome to our company! We are a dedicated team of professionals committed 
          to providing exceptional services in our industry. With over a decade of 
          experience, we have built a reputation for delivering high-quality results 
          and fostering lasting relationships with our clients.
        </p>
        <p>
          Our mission is to bring innovative solutions that meet the needs of businesses 
          and individuals alike. We pride ourselves on our core values: integrity, 
          creativity, and customer satisfaction. Every project we undertake is a testament 
          to our passion for excellence and our commitment to exceeding expectations.
        </p>
        <p>
          We believe in continuous growth, both for our company and the people we work 
          with. Our team consists of experts from various fields who collaborate to 
          provide the best solutions for our clients. We focus on fostering a positive 
          work culture that encourages innovation and creativity.
        </p>
        <p>
          Join us as we strive to make a positive impact in our community and beyond. 
          We actively participate in local events and initiatives, aiming to give back 
          and support the growth of our community.
        </p>
      </div>
      <div className="right-side">
        <h2>MORE INFO</h2>
        {/* Image placed inside the right-side box */}
        <div className="image-container">
          <img 
            src="https://picsum.photos/1280/720" 
            alt="Our Services" 
            className="service-image" 
          />
        </div>
        <p>
          We offer a wide range of services to help your business grow and succeed. 
          From innovative digital solutions to top-tier consulting services, 
          our team is here to assist you every step of the way.
        </p>
        <p>
          Our services include web development, mobile app creation, digital marketing, 
          and strategic business consulting. We are committed to providing solutions 
          that help you achieve your goals.
        </p>
        <p>
          Our approach is centered around understanding your unique challenges and 
          designing tailored strategies that drive results. We leverage the latest 
          technologies and methodologies to ensure that you stay ahead of the competition.
        </p>
        <p>
          Customer satisfaction is at the heart of everything we do.
        </p>
      </div>
    </div>
  );
}

export default About;

