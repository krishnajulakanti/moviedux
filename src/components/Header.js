import React from 'react'
import '../styles.css';

function Header() {
  return (
    <header>
      <img className='header' src="logo.png" alt="" />
      <h2 className='app-subtitle'>Its time for popcorn! Find your next movie here.</h2>
    </header>
  )
}

export default Header