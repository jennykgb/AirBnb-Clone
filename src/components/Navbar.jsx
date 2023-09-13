import { useState } from 'react'
import Logo from '../assets/airbnb-logo.png'
import Grid from '../assets/photo-grid.png'

function Navbar(){
    return (
        
        <div className='top'>
            <img className="logo" src={Logo}></img>
        </div>
           
    )
}

export default Navbar