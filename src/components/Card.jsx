import React from 'react'
//import katie from '../images/katie-zaferes.png'
import star from '../images/star.png'

export function Card(props) {
      let badgeText
      if(props.openSpots === 0){
        badgeText = 'SOLD OUT'
      }else if(props.location === "Online"){
        badgeText = 'ONLINE'
      }

    return (
        <>
            <div className="card">
                <img  src= {`../images2/${props.coverImg}`}  alt=" katie"  className='card-img'/>
                {badgeText && <button className='card-btn'> {badgeText} </button>}
                <p className='card-text'> <img src={star} /> <span>{props.stats.rating}</span> ({props.stats.reviewCount}). {props.location} </p>
                <p className='card-text-primary'> {props.title} </p>
                <p className='card-text-secondary'><span>From ${props.price} </span>/ person</p>
            </div>
        </>
    )
}

