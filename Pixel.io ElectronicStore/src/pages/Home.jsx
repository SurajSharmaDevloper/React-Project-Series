import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import Accessories from '../assets/categories/Accessorie.png'
import Console from '../assets/categories/Consoles.png'
import desktops from '../assets/categories/desktops.png'
import Kitchen from '../assets/categories/Kitchen.png'
import laptops from '../assets/categories/laptops.png'
import mobiles from '../assets/categories/mobile.png'
import pendrives from '../assets/categories/pendrives.png'
import smartwatches2 from '../assets/categories/smartwatches2.png'
import Tvs from '../assets/categories/Tvs.png'
import CardSmall from '../components/blocks/CardSmall';
import ProductCard from '../components/blocks/ProductCard'
import Earbuds from '../assets/Earbuds.jpg'

const categoriesData = [
    { name: "Mobiles", image: { mobiles } },
    { name: "Laptops", image: { laptops } },
    { name: "TVs", image: { Tvs } },
    { name: "Accessories", image: { Accessories } },
    { name: "Kitchen", image: { Kitchen } },
    { name: "Watches", image: { smartwatches2 } },
    { name: "Consoles", image: { Console } },
    { name: "Pendrives", image: { pendrives } },
    { name: "Desktop", image: { desktops } },
];
const product = {
    name: "Apple AirPods Pro 2nd Gen with ANC",
    price: 18999,
    oldPrice: 24999,
    rating: 4.7,
    image: Earbuds
};




const Home = () => {
    return (
        <div className='p-5 h-auto'>
            <HeroSection />
            <div className="w-full mt-10">
                <div className=" grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-2">
                    <CardSmall url={mobiles} item={"Mobiles"} alt={"laptop"} />
                    <CardSmall url={laptops} item={"Laptops"} alt={"laptop"} />
                    <CardSmall url={Tvs} item={"Televisons"} alt={"laptop"} />
                    <CardSmall url={Accessories} item={"Accessories"} alt={"laptop"} />
                    <CardSmall url={Kitchen} item={"Kitchen"} alt={"laptop"} />
                    <CardSmall url={smartwatches2} item={"Watches"} alt={"laptop"} />
                    <CardSmall url={Console} item={"Console"} alt={"laptop"} />
                    <CardSmall url={pendrives} item={"Pendrive"} alt={"laptop"} />
                    <CardSmall url={desktops} item={"Desktops"} alt={"laptop"} />
                </div>
            </div>
            <div className='mt-10 w-full'>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                </div>

            </div>

        </div>
    )
}

export default Home