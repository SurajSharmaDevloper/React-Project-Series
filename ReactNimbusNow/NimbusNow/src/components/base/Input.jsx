import React from 'react'

const Input = ({ rest }) => {
  return (
    <input className='border-[#c7c7c7] outline-0 text-light ' type="text" {...rest} />
  )
}

export default Input