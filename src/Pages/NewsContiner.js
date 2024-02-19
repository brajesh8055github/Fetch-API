import React from 'react'

const NewsContiner = ({ name, email, title, body }) => {
  return (
    <div className='container'>
      <img src='https://picsum.photos/536/354' alt='img..'></img>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  )
}

export default NewsContiner



