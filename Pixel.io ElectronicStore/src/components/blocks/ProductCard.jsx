import { Star, Heart } from "lucide-react";
import { Button, ButtonSecond } from '../base/Button.jsx'

const ProductCard = ({ product }) => {
    return (
        <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition p-3 
                        min-w-[180px] max-w-[230px] w-full">

            {/* Wishlist Button */}
            <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
                <Heart size={16} className="text-gray-600 hover:text-red-500" />
            </button>

            {/* Image */}
            <div className="flex justify-center">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-28 object-contain transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="mt-3">
                <h3 className="text-xs font-semibold text-gray-900 line-clamp-2">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-base font-bold text-gray-900">₹{product.price}</span>
                    {product.oldPrice && (
                        <span className="text-xs text-gray-500 line-through">₹{product.oldPrice}</span>
                    )}
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 mt-3">
                    <Button >
                        Add to Cart
                    </Button>

                    <ButtonSecond>
                        Buy Now
                    </ButtonSecond>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
