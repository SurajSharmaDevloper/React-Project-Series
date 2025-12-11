import React, { useState } from 'react'
import SearchBar from '../base/SearchBar'
import { NavLink } from 'react-router-dom'
import setOpenLogin from '../../pages/Login';
import { Heart, MenuIcon, Search, Settings, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
    const [SearchOpen, setSearchOpen] = useState(false);
    const [MobileNavOpen, setMobileNavOpen] = useState(false);


    const linkStyle = ({ isActive }) =>
        `text-sm px-2 py-1 transition-all duration-200 
        ${isActive
            ? 'text-purple-600 underline underline-offset-8 decoration-2'
            : 'text-gray-600 hover:text-purple-600 hover:underline hover:underline-offset-8 hover:decoration-2'
        }`;
    const linkStyle1 = ({ isActive }) =>
        `text-sm transition-all duration-200 w-full rounded-lg px-5 py-2 flex flex-col items-center justify-center gap-1
        ${isActive
            ? 'bg-purple-600 text-gray-100  decoration-2'
            : 'text-gray-600 hover:text-purple-700 hover: hover: hover:decoration-2'
        }`;

    return (
        <nav className='max-w-full sticky bg-gray-100 top-0 left-0 flex justify-between py-3 px-5 items-center shadow'>

            {/* Logo */}
            <NavLink to="/">
                <h3 className='text-2xl font-semibold text-gray-700 cursor-pointer'>Pixel.io</h3>
            </NavLink>

            {/* Search */}
            <div className='max-[600px]:hidden'>
                <SearchBar />
            </div>
            {SearchOpen && (<div className='absolute w-full bg-gray-200 top-full left-0 p-5 flex justify-center items-center gap-2' >
                <SearchBar /><span onClick={() => { setSearchOpen(false) }} className='text-2xl flex items-center text-red-400'><i class='bx  bx-x'></i></span>
            </div>)}


            {/* Nav Items */}
            <div className='flex items-center max-[1180px]:hidden gap-5'>
                <NavLink to="/" className={linkStyle}>Home</NavLink>
                <NavLink to="/shop" className={linkStyle}>Shop</NavLink>
                <NavLink to="/products" className={linkStyle}>Products</NavLink>
                <NavLink to="/sales" className={linkStyle}>Sales</NavLink>
                <NavLink to="/wishlist" className={linkStyle}>Wishlist</NavLink>
                <NavLink to="/cart" className={linkStyle}>Cart</NavLink>
            </div>

            {/* mobile navbar  */}
            {
                MobileNavOpen &&
                (
                    <div className='absolute w-full max-[1170px]:block hidden  top-full right-0 bg-gray-200 shadow'>
                        <div className='flex flex-col items-start gap-2 pt-5 px-5'>
                            <NavLink to="/" className={linkStyle1}>Home</NavLink>
                            <NavLink to="/shop" className={linkStyle1}>Shop</NavLink>
                            <NavLink to="/products" className={linkStyle1}>Products</NavLink>
                            <NavLink to="/sales" className={linkStyle1}>Sales</NavLink>
                            <NavLink to="/shopenquiry" className={linkStyle1}>Open a shop</NavLink>
                            <hr className='text-gray-400 w-full' />
                            <div className='flex mb-2 w-full justify-around'>
                                <button>
                                    <NavLink to="/wishlist" className={linkStyle1}>
                                        <Heart />
                                        <span>Wishlist</span>
                                    </NavLink>

                                </button>
                                <button>
                                    <NavLink to="/account" className={linkStyle1}>
                                        <User />
                                        <span>Account</span>
                                    </NavLink>
                                </button>
                                <button>
                                    <NavLink to="/setting" className={linkStyle1}>
                                        <Settings />
                                        <span>Setting</span>
                                    </NavLink>
                                </button>

                            </div>
                        </div>
                    </div>
                )

            }

            {/* Auth Buttons */}

            <div className='flex items-center gap-6'>
                <div className=' max-[850px]:hidden border border-gray-300 rounded-lg'>
                    <button onClick={() => { setOpenLogin(true) }} className='bg-gray-100 px-3 text-sm py-1.5  text-gray-700 rounded-l-lg hover:bg-gray-200 active:bg-gray-300'>
                        Login
                    </button>
                    <button className='bg-purple-600 px-3 text-sm text-gray-100 py-1.5 rounded-r-lg hover:bg-purple-500 active:bg-purple-700' >
                        <NavLink
                            to="/register">
                            Sign Up
                        </NavLink>
                    </button>
                </div>
                <div onClick={() => { setSearchOpen(!SearchOpen), setMobileNavOpen(false) }}>
                    <Search className='text-gray-500' />
                </div>
                <div className='hidden relative max-[1180px]:block' onClick={() => { setMobileNavOpen(false) }}>
                    <NavLink to="/cart" className="">
                        <ShoppingCart className='text-gray-500' />
                        <span className='absolute bg-purple-700 text-gray-200 text-xs py-0.5 px-1 rounded-full -top-3 -right-3'>10</span>
                    </NavLink>
                </div>

                <div className='hidden max-[1180px]:block' onClick={() => { setMobileNavOpen(!MobileNavOpen), setSearchOpen(false) }}>
                    <MenuIcon className='text-gray-500' />
                </div>
            </div>

        </nav>
    )
}

export default Navbar
