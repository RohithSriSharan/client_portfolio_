import React from 'react'
import Footer from '../HeaderFooter/Footer'
import './Home.css'


import {TbTargetArrow } from 'react-icons/tb';
import { SiNounproject } from 'react-icons/si';
import {TbBinaryTree2 } from 'react-icons/tb';
const Home = () => {
  return (
    <div className='home'>
   
              <div className='home-left'>
              
                <h1>MADHULIKA</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>

                  <div className='home-buttons'>
                  <a href='/' > Resume</a>
                    
                    <a href='/connect'>Connect</a>
                    
                
                  </div>
              </div>
      

      <div className='quote'>
            <p>      “Life is like a novel. It's filled with suspense.
            You have no idea what is going to happen until you turn the last page.”
            </p>

            <h3>― Sidney Sheldon</h3>

      </div>




      <div className='welcome'>
        <h3>WELCOME TO MY E- PORTFOLIO!</h3>
        <p>
       
        I am Madhulika, an Aspiring Career Development Professional, 
        passionate about helping people identify their strengths, 
        interests, and values to find fulfilling and rewarding careers.</p>

        <p>Each page of my e-portfolio is dedicated to the lessons drawn from my experiences. 
        There have been a number of aha moments and eye-openers and I would like to let you in on some of them.
         I have included a few notable projects, information about my background, and skills that I have acquired in this journey. 
         I've also included a section on my goals both short-term and long term to give you a better understanding of where I'm headed in my career.
         </p>
      <span>Scroll down or click on the tabs as you go along to see some of my work!</span>
      </div>




        <div className='highlights'>
              <div className='goal'>
                <span><TbTargetArrow/></span>
                <h3>Goals</h3>
                <p>My plan on guiding individuals into their chosen career paths </p>
                <button>Learn More</button>
              </div>

              <div className='goal'>
                    <span><SiNounproject/></span>
                    <h3>Projects</h3>
                    <p>Learn how I created " how to " video for  career changers ,Job strategies assessing Labour market and understanding career theories by applying to clients</p>
                    <button>Learn More</button>
              </div>

            <div className='goal'>
              <span><TbBinaryTree2/></span>
              <h3>Skills</h3>
              <p>Combining technical proficiency, interpersonal  and analysing skills to effectively support career planning in individuals</p>  
              <button>Learn More</button>
          </div>

        
      

        </div>
      <Footer/>
      

    </div>
  )
}

export default Home