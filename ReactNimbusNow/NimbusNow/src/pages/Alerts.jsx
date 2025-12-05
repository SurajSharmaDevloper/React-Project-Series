import React from 'react'

const Alerts = () => {
    return (
        <div className='ml-20 mt-20 p-8'>
            <h1 className='text-4xl font-bold text-text-light dark:text-text-light mb-6'>Alerts</h1>
            <div className='space-y-4'>
                <div className='bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-4 rounded'>
                    <p className='text-red-700 dark:text-red-100 font-semibold'>Critical Alert</p>
                    <p className='text-red-600 dark:text-red-200'>System maintenance scheduled for tonight</p>
                </div>
                <div className='bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 rounded'>
                    <p className='text-yellow-700 dark:text-yellow-100 font-semibold'>Warning</p>
                    <p className='text-yellow-600 dark:text-yellow-200'>Database usage at 85%</p>
                </div>
                <div className='bg-green-50 dark:bg-green-900 border-l-4 border-green-500 p-4 rounded'>
                    <p className='text-green-700 dark:text-green-100 font-semibold'>Success</p>
                    <p className='text-green-600 dark:text-green-200'>Backup completed successfully</p>
                </div>
                <div className='bg-blue-50 dark:bg-blue-900 border-l-4 border-primary p-4 rounded'>
                    <p className='text-primary dark:text-blue-100 font-semibold'>Info</p>
                    <p className='text-blue-600 dark:text-blue-200'>New feature released: Dark Mode</p>
                </div>
            </div>
        </div>
    )
}

export default Alerts
