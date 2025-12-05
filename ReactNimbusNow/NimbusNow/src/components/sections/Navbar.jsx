import React from 'react'
import LightLogo from '../base/Logo'
import Searchbox from '../blocks/Searchbox'
import Button from '../base/Button'
import Profile from '../base/Profile'

const Navbar = () => {
  return (
    <nav className='w-full py-5 px-5 z-10' >
      <div className='bg-surface  rounded-2xl py-3 flex justify-between items-center shadow-lg transition-colors duration-300' >
        <div className='px-5'>
          <LightLogo />
        </div>
        <div className='flex justify-center items-center gap-5 ' >
          <Searchbox />
          <Button>Location</Button>
          <Profile />
        </div>
      </div>

    </nav>
  )
}

export default Navbar