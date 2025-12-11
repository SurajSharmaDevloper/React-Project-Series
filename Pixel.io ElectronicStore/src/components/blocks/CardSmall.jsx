import React from 'react'

const CardSmall = ({ url, alt, item }) => {
    return (
        <div className=" flex flex-col items-center bg-white shadow-sm rounded-md py-3 px-2 hover:shadow-md transition cursor-pointer" >
            <img
                src={url}
                alt={alt}
                className="w-16 h-16 object-contain"
            />
            <p className="text-xs md:text-sm px-1 text-gray-900 font-medium text-center mt-2">{item}</p>
        </div>
    )
}

export default CardSmall