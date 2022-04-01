import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'

import '../styles/Header.css'

const Header = ({ searchQuery, handleChange }) => {
  const location = useLocation().pathname
  console.log(location);
  return (
    <header className='header flex align-center'>
      <Link to="/">
        Taskify🚀
      </Link>

      {
        (location === '/') ? <div className='input-container flex align-center'>
          <input
            type="text"
            placeholder='Search todo by tags...'
            value={searchQuery}
            onChange={handleChange}
          />
          <AiOutlineSearch />
        </div> : null
      }
    </header>
  )
}

export default Header