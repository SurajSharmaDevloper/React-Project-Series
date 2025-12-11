import React from 'react'
import Header from '../components/sections/Header'
import Navbar from '../components/sections/Navbar'
import AppRoutes from '../Routes/AppRoutes'
import Footer from '../components/sections/footer'

const Layout = () => {
    return (
        <div className='w-full'>
            <div className='w-full'>
                <Header />
                <Navbar />
            </div>

            <div className='w-full min-h-screen'>
                <AppRoutes />
            </div>
            <div className='w-full'>
                <Footer />
            </div>

        </div>

    )
}

export default Layout