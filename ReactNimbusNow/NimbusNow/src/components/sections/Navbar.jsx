import React from 'react'
import LightLogo from '../base/Logo'
import Searchbox from '../blocks/Searchbox'
import Button from '../base/Button'
import Profile from '../base/Profile'

const Navbar = () => {
  return (
    <nav className='w-[95%] absolute top-0 left-18 py-5 px-5' >
      <div className='bg-surface rounded-2xl py-5'>
        <div className='px-5'>
          <LightLogo />
        </div>
        <div className=''>
          <Searchbox />
          <Button>Location</Button>
          <Profile />
        </div>
      </div>

    </nav>
  )
}

export default Navbar