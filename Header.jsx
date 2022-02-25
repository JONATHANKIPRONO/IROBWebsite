import React, { Component } from 'react'
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className='navbar'>
                <h1>Irob Tech</h1>
                <ul className='shaping'>
                    <li>
                    <a href='https://www.w3schools.com/css/css_comments.asp'>Home</a>
                    </li>
                  
                    <li>
                    <a href='students.spu.ac.ke'>About Us</a>
                    </li>
                    <li>
                    <a href='students.spu.ac.ke'>Portfolio</a>
                    </li>
                    <li>
                    <a href='students.spu.ac.ke'>Careers</a>
                    </li>
                    <li>
                    <a href='students.spu.ac.ke'>Contact us</a>
                    </li>
                    
                </ul>
                <section className='body-a'>
                    <div className="container">
                    <p>
                    t iROB we appreciate the trust you put in us when you hand us the keys to your business kingdom. We’ve earned that trust from hundreds of clients in dozens of industries. We have been a company that specializes in provision of innovations and consultancies in architecture and software, and we know we can earn it from you. Our team consists of strategic thinkers with experience in engineering, IT and business. We do our homework, and make sure we understand your business goals before working with you to set technology goals. Our specialty is custom-made solutions for how you work, sell, and grow. We think this is important, because at the end of the day, our services are about the people, not computers.
                    </p>




                    </div>
                    
                </section>

                <section className='body-b'>
                    



                </section>

            </div>
            
        );
    }
}
 
export default Header;