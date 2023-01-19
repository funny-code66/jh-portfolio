import React from 'react'
import './photo.css'

function Photo({size=72}) {
  return (
    <div className='p-2'>
      {/* Photo */}
      <img className='my-photo'  style={{width: `${size}px`, height: `${size}px`}} src='https://ik.imagekit.io/eh39am5bx/JH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674120144756' />
    </div>
  )
}

export default Photo