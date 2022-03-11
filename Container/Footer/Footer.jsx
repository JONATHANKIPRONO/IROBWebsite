import React from 'react';
import gpt3Logo from '../../cropped-cropped-logo.svg';
import './Footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
        The World’s best firm in creating Architectural plans, Interior renderings. Websites, mobile and web applications design and development. Our services are not for everyone, only high end clients who demand the best of what life has to offer.
          
          
           <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>SOLUTIONS WE OFFER</h4>
        <p>Web Applicationss</p>
        <p>Mobile Applications</p>
        <p>Architectural Design</p>
        <p>Interior Design</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>OFFICES</h4>
        <p>Juja City Mall-Nairobi, Kenya.</p>
        <p>info@irob.co.ke</p>
        <p>+254 717 500 384</p>
      </div>
     
    </div>

    <div className="gpt3__footer-copyright">
      <p> All rights reserved.</p>
    </div>
  </div>
);

export default Footer;