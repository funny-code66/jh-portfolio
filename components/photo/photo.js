import React from 'react'
import './photo.css'

function Photo({size=72}) {
  return (
    <div className='p-2'>
      {/* Photo */}
      <img className='my-photo'  style={{width: `${size}px`, height: `${size}px`}} src='/static/11.jpg' />
    </div>
  )
}

export default Photo