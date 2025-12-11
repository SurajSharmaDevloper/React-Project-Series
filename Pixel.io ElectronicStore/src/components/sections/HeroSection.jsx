import React from 'react'
import HeroBanner from '../../assets/HeroBanner.png'
import HeroWatches from '../../assets/BannerWatches.png'
import HeroLaptops from '../../assets/BannerLaptops.png'
import smartwatches2 from '../../assets/smartwatches2.png'
import { ButtonSecond, Button } from '../base/Button'

const HeroSection = () => {
    return (
        <div className='w-full rounded-2xl flex justify-between max-[1150px]:flex-col gap-5'>
            <div className='w-[60%] max-[1150px]:w-full rounded-2xl'>
                <div className='w-full bg-gray-300 h-full rounded-2xl'>
                    <div className='flex h-full items-center'>
                        <div className='w-full text-gray-500 ml-5 py-5 px-3 md:p-5'>
                            <p className='text-md md:text-xl mb-0 md:mb-2 text-gray-700'>Hot Right Now</p>
                            <h4 className='text-2xl md:text-4xl mb-1 md:mb-2 text-gray-700 font-semibold'>Sale Up to 50% Off</h4>
                            <h3 className='text-4xl md:text-6xl text-gray-700 font-bold'>Headphone</h3>
                            <p className='text-xs md:text-sm text-gray-700 mt-3 md:mt-5'>Curabitur id lectus in felis hendrerit efficitur quis quis lectus. Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit tempus consectetur.</p>
                            <div className='flex justify-start mt-5 gap-5'>
                                <Button>Shop Now</Button>
                                <ButtonSecond>Learn More</ButtonSecond>
                            </div>
                        </div>
                        <div className='rounded-2xl h-full'>
                            <img className='h-full max-[850px]:hidden rounded-2xl' src={HeroBanner} alt="" />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className='w-[40%] flex flex-col max-[850px]:flex-col max-[1150px]:flex-row max-[1150px]:w-full gap-5'>
                <div className='w-full max-[400px]:flex-col-reverse max-[400px]:justify-center-safe items-center bg-blue-100 flex justify-between rounded-2xl'>
                    <div className='md:p-5 px-5 mb-5 max-[400px]:text-center'>
                        <p><span className='text-yellow-800 text-sm md:text-md font-semibold'>10% OFF</span></p>
                        <h4 className='text-md md:text-xl font-semibold text-gray-800'>Apple Watch Serial 7</h4>
                        <p className='text-xs md:text-sm text-gray-700 mb-3'>Don't miss the last opportunity.</p>
                        <Button>Shop Now</Button>
                    </div>
                    <div className='h-[200px] p-5 max-[400px]:p-2' >
                        <img className='h-full max-[620px]:block max-[850px]:hidden' src={HeroWatches} alt="" />
                        <img className='h-full hidden max-[620px]:hidden max-[850px]:block' src={smartwatches2} alt="" />
                    </div>
                </div>
                <div className='w-full flex max-[400px]:flex-col-reverse max-[400px]:justify-center-safe items-center bg-yellow-100  rounded-2xl'>
                    <div className='p-5 max-[400px]:text-center'>
                        <p><span className='text-yellow-800 text-sm md:text-md font-semibold'>LATEST COLLECTION</span></p>
                        <h4 className='text-md md:text-xl font-semibold text-gray-800'>Apple Devices & Software</h4>
                        <p className='text-xs md:text-sm text-gray-700 mb-3'>Don't miss the last opportunity.</p>
                        <ButtonSecond>Shop Now</ButtonSecond>
                    </div>
                    <div className='flex items-center p-3'>
                        <img src={HeroLaptops} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection