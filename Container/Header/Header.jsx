import React from 'react';
import people from '../../Assets/people.png';
import cropped from '../../Assets/cropped.png';
import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h2 className="gradient__text">IROB Technologie&apos;s, Experience The Best.</h2>
      <p>
      At iROB we appreciate the trust you put in us when you hand us the keys to your business kingdom. We’ve earned that trust from hundreds of clients in dozens of industries. We have been a company that specializes in provision of innovations and consultancies in architecture and software, and we know we can earn it from you. Our team consists of strategic thinkers with experience in engineering, IT and business. We do our homework, and make sure we understand your business goals before working with you to set technology goals. Our specialty is custom-made solutions for how you work, sell, and grow. We think this is important, because at the end of the day, our services are about the people, not computers.




      </p>

      
    </div>

    <div className="gpt3__header-image">
      <img src={cropped} />
    </div>
  </div>
);

export default Header;