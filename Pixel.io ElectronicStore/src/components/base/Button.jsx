import React from 'react'

export const Button = ({ children }) => {
    return (
        <button className='text-sm rounded-md text-gray-50 bg-teal-500 hover:bg-teal-400 px-2 py-1.5'>
            {children}
        </button>
    )
}
export const ButtonSecond = ({ children }) => {
    return (
        <button className='text-sm bg-purple-500 hover:bg-purple-400 text-gray-50 px-2 py-1.5 rounded-md'>
            {children}
        </button>
    )
}

