import Mobile from "../../assets/Categories/Mobile.png";
import Laptop from "../../assets/Categories/Laptop.png";
import Watches from "../../assets/Categories/Watches.png";
import Headphones from "../../assets/Categories/Headphones.png";
import Camera from "../../assets/Categories/camera.png";
import Gaming from "../../assets/Categories/game.png";
import Accessories from "../../assets/Categories/Accessories.png"
import Television from "../../assets/Categories/Television.png"
const categories = [
  { name: "Smartphones", image: Mobile},
  { name: "Laptops", image: Laptop },
  { name: "Smartwatches", image: Watches },
  { name: "Headphones", image: Headphones },
  { name: "Cameras", image: Camera },
  { name: "Gaming", image: Gaming },
  { name: "Accessories", image: Accessories },
  { name: "Smart T.V", image: Television }
];

export default function Categories() {
  return (
    <section className="w-full bg-neutral-50 dark:bg-neutral-950 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-700 dark:text-neutral-400">
            Top Categories
          </h2>
          <button className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:underline">
            View all
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 flex items-center justify-center gap-3 rounded-full bg-neutral-200 dark:bg-neutral-900 overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-neutral-800 dark:text-neutral-400">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
