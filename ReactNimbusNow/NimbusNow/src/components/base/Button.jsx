import React from 'react'

const Button = ({ children, size, color }) => {
    return (
        <button className='px-2.5 py-2 border-0 outline-0 bg-primary text-white rounded-xl' >
            {children}
        </button>
    )
}

export default Button