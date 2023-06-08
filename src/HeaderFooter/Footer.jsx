import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';


const Footer = () => {
   
  return (
    <div className='footer'>  
      <h1> Madhulika Bhattacharjee </h1>
      <p> | Aspiring Career Mentor | Educator | Aiming to make a difference in people's lives. |</p>
      
      <div className='footer-icon'>
      <p><BsLinkedin/></p>
      <p><FaTwitter/></p>
      </div>
      
      </div>
  )
}

export default Footer