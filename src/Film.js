import React from 'react'
import Star from './star';

export default function Film({list}) {
  return (
    <div className=' film'>
      {list.map(el=><div className = 'border'> 
          <img src={el.image} alt='taraji'/>
       <h4>{el.title}</h4>
      <h6>{el.description}</h6>
      <Star rating={el.rating} />

      </div>
      )}
    </div>
  )
}

