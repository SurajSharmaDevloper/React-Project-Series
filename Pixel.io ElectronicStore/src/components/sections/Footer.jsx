import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import payment_1 from "../../assets/visa.png"
import payment_2 from "../../assets/paypal.png"
import payment_3 from "../../assets/american-express.png"
import payment_4 from "../../assets/master-card.png"


const Footer = () => {
    return (
        <footer className='flex p-5 bg-purple-700 justify-between gap-6'>
            <div className='w-[20%]' >
                <h3 className='text-lg mb-2 underline font-semibold text-gray-200'>Contact Us</h3>
                <ul className='text-sm text-gray-300 *:mb-2'>
                    <li><b>Address: </b> 502 New Design Str, Melbourne,<br /> San Francisco, CA 94110, United States</li>
                    <li><b>Phone:</b> (+01) 123-456-789</li>
                    <li><b>E-mail:</b> contact@ecom-market.com</li>
                    <li><b>Hours:</b> 8:00 - 17:00, Mon - Sat </li>
                </ul>
                <div className='flex gap-3 mt-6 *:text-gray-300' >
                    <a className='text-2xl' href="#"><i class='bxl  bx-facebook-circle'></i> </a>
                    <a className='text-2xl' href="#"><i class='bxl  bx-instagram-alt'></i> </a>
                    <a className='text-2xl' href="#"><i class='bxl  bx-twitter'></i> </a>
                    <a className='text-2xl' href="#"><i class='bxl  bx-linkedin-square'></i> </a>
                </div>

            </div>
            <div className='flex justify-between items-start gap-10 w-[50%]'>
                <div>
                    <h3 className='text-lg mb-2 font-semibold text-gray-200'>Make Money With US</h3>
                    <ul className='text-sm text-gray-300 *:mb-2 *:flex *:items-center *:gap-2'>
                        <li><i class='bx  bx-caret-right'></i><span>Open shop on Ecom</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Sell Your Services on Ecom</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Sell on Ecom Business</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Sell Your Apps on Ecom</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Become an Affilate</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Advertise Your Products</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Sell-Publish with Us</span></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg mb-2 font-semibold text-gray-200'>Company</h3>
                    <ul className='text-sm text-gray-300 *:mb-2 *:flex *:items-center *:gap-2'>
                        <li><i class='bx  bx-caret-right'></i><span>About Us</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Delivery Information</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Privacy Policy</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Terms & Conditions</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Contact Us</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Support Center</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Careers</span></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg mb-2 font-semibold text-gray-200'>My Account</h3>
                    <ul className='text-sm text-gray-300 *:mb-2 *:flex *:items-center *:gap-2'>
                        <li><i class='bx  bx-caret-right'></i><span>Your Account</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Return center</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Purchase & Orders</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Support Ticket</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Support Center</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Tracking Order</span></li>
                        <li><i class='bx  bx-caret-right'></i><span>Payment Method</span></li>
                    </ul>
                </div>
            </div>

            <div className='w-[30%] px-8'>
                <h3 className='text-lg mb-2 font-semibold text-gray-200'>App & Payment</h3>
                <p className='text-sm text-gray-300'>Download our Apps and get<br />
                    extra 15% Discount on your first Order…!</p>

                <div className='flex items-center mt-5 justify-start gap-3'>
                    <div className='w-8'>
                        <img src={payment_1} alt="" />
                    </div>
                    <div className='w-8'>
                        <img src={payment_2} alt="" />
                    </div>
                    <div className='w-8'>
                        <img src={payment_3} alt="" />
                    </div>
                    <div className='w-8'>
                        <img src={payment_4} alt="" />
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer