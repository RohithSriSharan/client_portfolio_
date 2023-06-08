import React , {useEffect} from 'react'
import './Header.css'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    const handleMenu = () =>{
            setMenuToggle(!menuToggle)
    }
    useEffect(() => {
        if (menuToggle) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [menuToggle]);
  return (
    <div className='header'>
        <div className='logo'>
    
        <h1>MB</h1>
        </div>
        <div className='pc-nav'>
            
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                        
                    </li>
                    <li>
                        <a href='/goals'>Goals</a>
                        
                    </li>
                    <li>
                        <a href='/projects'> Projects</a>
                        
                    </li>
                    <li>
                        <a href='/skills'>Skills</a>
                        
                    </li>
                    
                    <li>
                        <a href='/mygoto'>My Go-to Mantra</a>
                        
                    </li>
                    <li>
                        <a href='/contact'>Contact Me</a>
                        
                    </li>
                
            </ul>

      
    
    
        </div>
    
    
        <div className='menu-button'>
            <button onClick={handleMenu}>{menuToggle?  <AiOutlineClose/>:<GiHamburgerMenu/>}</button></div>


                {menuToggle&& <div className='nav-mobile'>
    
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/about'>About</a>
                            
                        </li>
                        <li>
                            <a href='/goals'>Goals</a>
                            
                        </li>
                        <li>
                            <a href='/projects'> Projects</a>
                            
                        </li>
                        <li>
                            <a href='/skills'>Skills</a>
                            
                        </li>
                        
                        <li>
                            <a href='/mygoto'>My Go-to Mantra</a>
                            
                        </li>
                        <li>
                            <a href='/contact'>Contact Me</a>
                            
                        </li>
                
                    </ul>
    
    </div> }
        
    

            
    </div>

  )
}

export default Header