import React from 'react'
import Button from '../../components/base/Button'
import { NavLink } from 'react-router-dom'

const NoPage = () => {
  return (
    <section className='w-full h-full bg-surface flex justify-center items-center'>
      <div className='text-center '>
        <h2 className='sm:text-8xl text-6xl mb-3 font-semibold text-primary'>404</h2>
        <h2 className='sm:text-5xl text-4xl mb-3 text-gray-800 font-semibold'>Page Not Found</h2>
        <p className='sm:text-lg text-sm text-neutral-800 mb-5'>
          Sorry We Couldn't Find The Page You're Looking For.
        </p>
        <Button>
          <NavLink to="/admin">
            Back to Dashboard
          </NavLink>
        </Button>
      </div>
    </section>
  )
}

export default NoPage