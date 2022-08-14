import React, { useEffect, useRef, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false)
  //if nav links are more than we have to update the navbar height but using refs we can do it without updating the navbar height.
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const toggleLinks=()=>{
    console.log('toggle');
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height; //to get the height of the navbar links, console.log(linksHeight) to see the height
    if (isOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [isOpen]);
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src="./logo.png" alt="logo" className='nav-logo'/>
        <button className="nav-toggle" onClick={toggleLinks}><FaBars/></button>
      </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map(link =>{ 
              const { id, url, text } = link
              return (
                <li key={id}><a href={url}>{text}</a></li>
              )
              })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map(social =>{
          const { id, url, icon } = social
          return (
            <li key={id}><a href={url}>{icon}</a></li>
          )
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
