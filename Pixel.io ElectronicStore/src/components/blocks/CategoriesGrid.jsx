import React from "react";

const CategoriesGrid = ({ categories = [] }) => {
    return (
        <div className="w-full mt-10">
            <div
                className="
          grid 
          grid-cols-3 
          sm:grid-cols-4 
          md:grid-cols-6 
          lg:grid-cols-8 
          gap-4 
          px-4
        "
            >
                {categories.map((item, idx) => (
                    <div
                        key={idx}
                        className="
              flex flex-col items-center 
              bg-white 
              shadow-sm 
              rounded-md 
              p-3 
              hover:shadow-md 
              transition
              cursor-pointer
            "
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-contain"
                        />
                        <p className="text-sm font-medium text-center mt-2">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesGrid;
