import star from './star.png';
import React from 'react';

export default function Card(props){
  let badgeText;
  if(!props.openSpots){
    badgeText = 'SOLD OUT';
  } else if(props.location === 'Online'){
    badgeText = 'Online';
  }
  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img className = 'card--image' src= {props.coverImg} alt=''></img>
      <div className = 'card--stats'>
        <img className='card--star' src= {star} alt=''></img>
        <span>{props.stats.rating}</span>
        <span className='gray'>({props.stats.reviewCount}) . </span>
        <span className='gray'>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'>From ${props.price}</span> / person</p>
    </div>
  )
};