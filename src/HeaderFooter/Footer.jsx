import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
   
  return (
    <div className='footer'>  
      <h1> Madhulika Bhattacharjee </h1>
      <p> | Aspiring Career Mentor | Educator |</p>
      <p>| Aiming to make a difference in people's lives. |</p>
      <div className='footer-icon'>
        <span><BsLinkedin/></span>
        <span><FaTwitter/></span>
        <span><SiGmail/></span>
      </div>
      
      </div>
  )
}

export default Footer