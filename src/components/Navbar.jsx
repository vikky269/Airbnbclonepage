import React from 'react'
import airbnb from '../images/airbnb-logo.png'

export function Navbar() {
    

    return (
        <>

         <nav className='navbar'>
          <img src={airbnb} alt="airbnb" className='navbar-logo' />
         </nav>
            
        </>
    )
}
