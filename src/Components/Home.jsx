import React from 'react'
import Footer from '../HeaderFooter/Footer'
import './Home.css'
import background from '../images/background.jpg'

import { GiStairsGoal } from 'react-icons/gi';


const Home = () => {
  return (
    <div className='home'>
   
              <div className='home-left'>
              
                <h1>MADHULIKA</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>

                  <div className='home-buttons'>
                    <button>Resume</button>
                    <a href='/connect'><button >Connect</button></a>
                
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
      <p>Scroll down or click on the tabs as you go along to see some of my work!</p>
      <img src='https://static.wixstatic.com/media/a4c838_6005a0df54f446238b5c71cd8fc12695~mv2.png/v1/crop/x_358,y_955,w_622,h_471/fill/w_388,h_290,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20(5).png'></img>
      </div>




        <div className='highlights'>
              <div className='goal'>
                <p><GiStairsGoal/></p>
                <h3>Goals</h3>
                <p>My plan on guiding individuals into their chosen career paths </p>
                <button>Learn More</button>
              </div>

              <div className='goal'>
                    <p><GiStairsGoal/></p>
                    <h3>Projects</h3>
                    <p>Learn how I created " how to " video for  career changers ,Job strategies assessing Labour market and understanding career theories by applying to clients</p>
                    <button>Learn More</button>
              </div>

            <div className='goal'>
              <p><GiStairsGoal/></p>
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