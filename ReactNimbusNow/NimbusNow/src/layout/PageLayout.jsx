import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/sections/Navbar'
import Sidebar from '../components/sections/Sidebar'

const PageLayout = () => {
    return (
        <div className='flex h-screen bg-background-light '>
            {/* Sidebar on the left */}
            <Sidebar />

            {/* Main content area with navbar and outlet */}
            <div className='flex-1 flex flex-col'>
                {/* Navbar on top */}
                <Navbar />

                {/* Page content - Outlet for routes */}
                <main className='flex-1 overflow-auto mt-20 p-5'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default PageLayout
