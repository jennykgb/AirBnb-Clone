import { useState } from 'react'
import Grid from '../assets/photo-grid.png'

function Hero(){
    return (
        <div className="nav-bottom">
            <img className="grid" src={Grid}></img>
            <h1>Online Experiences</h1>
            <h4>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </h4>
        </div>
    )
}

export default Hero