import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <Link to="/">
        Taskify
      </Link>
    </header>
  )
}

export default Header