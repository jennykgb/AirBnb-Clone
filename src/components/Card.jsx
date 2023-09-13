import { useState } from 'react'
import Star from '../assets/star.png'

function Card(props){
    let badgeText
    if(props.data.openSpots===0){
        badgeText= "SOLD OUT"
    } else if(props.data.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
       
        <div className="card">
            <div className="picture">
                <img className="activity-pic" src={`src/assets/${props.data.coverImg}`} />
                {badgeText && <p className='status'>{badgeText}</p>}
            </div>
            <div className='reviews'>
                <img className='star' src={Star} />
                <p className='rating'>{props.data.stats.rating}</p>
                <p className='review-nums'>({props.data.stats.reviewCount}) • {props.data.location}</p>
            </div>
            <p className='description'>{props.data.title}</p>
            <p className='price'><span className='bold'>From ${props.data.price}</span>/ person</p>
        </div>
        
    )
}

export default Card