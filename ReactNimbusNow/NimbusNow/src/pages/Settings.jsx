import React from 'react'

const Settings = () => {
    return (
        <div className='ml-20 mt-20 p-8'>
            <h1 className='text-4xl font-bold text-text-light dark:text-text-light mb-6'>Settings</h1>
            <div className='bg-surface dark:bg-surface p-8 rounded-2xl shadow-lg max-w-2xl'>
                <div className='space-y-6'>
                    <div className='border-b border-gray-200 dark:border-gray-700 pb-6'>
                        <h2 className='text-xl font-semibold text-text-light dark:text-text-light mb-2'>Account Settings</h2>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>Manage your account details</p>
                        <button className='bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-lg transition-colors'>
                            Edit Profile
                        </button>
                    </div>

                    <div className='border-b border-gray-200 dark:border-gray-700 pb-6'>
                        <h2 className='text-xl font-semibold text-text-light dark:text-text-light mb-2'>Notifications</h2>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>Control notification preferences</p>
                        <label className='flex items-center'>
                            <input type='checkbox' defaultChecked className='w-4 h-4' />
                            <span className='ml-2 text-text-light dark:text-text-light'>Email notifications</span>
                        </label>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold text-text-light dark:text-text-light mb-2'>Danger Zone</h2>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>Delete account or data</p>
                        <button className='bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors'>
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
