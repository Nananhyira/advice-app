import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='container me'>
      <div>
        <img></img>
      </div>
      <div>
        <ul>
         <a href=""><li>Home</li></a> 
         <a href=""><li>Contact</li></a> 
         <a href=""><li>Service</li></a> 
         <a href=""><li>About</li></a> 
         <a href=""><li>Whatever</li></a> 

        </ul>
      </div>
    </div>
  )
}

export default Navbar