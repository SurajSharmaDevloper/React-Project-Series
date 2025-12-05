import React from 'react'

const Dashboard = () => {
    return (
        <div className='ml-20 mt-20 p-8'>
            <h1 className='text-4xl font-bold text-text-light dark:text-text-light mb-6'>Dashboard</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='bg-surface dark:bg-surface p-6 rounded-2xl shadow-lg'>
                    <h2 className='text-2xl font-semibold text-primary mb-2'>Total Users</h2>
                    <p className='text-4xl font-bold text-primary'>1,245</p>
                </div>
                <div className='bg-surface dark:bg-surface p-6 rounded-2xl shadow-lg'>
                    <h2 className='text-2xl font-semibold text-primary mb-2'>Active Sessions</h2>
                    <p className='text-4xl font-bold text-primary-light'>342</p>
                </div>
                <div className='bg-surface dark:bg-surface p-6 rounded-2xl shadow-lg'>
                    <h2 className='text-2xl font-semibold text-primary mb-2'>Revenue</h2>
                    <p className='text-4xl font-bold text-primary-dark'>$45,230</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
