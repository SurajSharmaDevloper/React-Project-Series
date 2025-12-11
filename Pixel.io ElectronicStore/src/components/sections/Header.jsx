import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [language, setLanguage] = useState("en");
    const [currency, setCurrency] = useState("usd");

    const languageOptions = [
        { value: "en", label: "English", flag: "https://flagcdn.com/gb.svg" },
        { value: "fr", label: "Français", flag: "https://flagcdn.com/fr.svg" },
        { value: "hi", label: "हिंदी", flag: "https://flagcdn.com/in.svg" },
    ];

    const currencyOptions = [
        { value: "usd", label: "USD" },
        { value: "eur", label: "EUR" },
        { value: "inr", label: "INR" },
    ];

    // ---------- Dropdown Component Inside ----------
    function Dropdown({ options, value, setValue, showFlag = false }) {
        const [open, setOpen] = useState(false);
        const ref = useRef(null);

        const selected = options.find((o) => o.value === value);

        useEffect(() => {
            const clickAway = (e) => {
                if (ref.current && !ref.current.contains(e.target)) setOpen(false);
            };
            document.addEventListener("mousedown", clickAway);
            return () => document.removeEventListener("mousedown", clickAway);
        }, []);

        return (
            <div ref={ref} className="relative cursor-pointer select-none">
                {/* Trigger */}
                <div
                    className="flex items-center gap-1 text-sm text-gray-100 hover:text-gray-50"
                    onClick={() => setOpen(!open)}
                >
                    {showFlag && (
                        <img src={selected.flag} alt="" className="w-5 h-4 rounded-sm" />
                    )}
                    <span>{selected.label}</span>
                    <span className={`text-[10px] transition ${open ? "rotate-180" : ""}`}>
                        <ChevronDown size={16} />
                    </span>
                </div>

                {/* Menu */}
                {open && (
                    <div className="absolute mt-2 bg-white shadow-md text-gray-700 rounded-md py-1 w-32 z-50">
                        {options.map((opt) => (
                            <div
                                key={opt.value}
                                className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 text-sm"
                                onClick={() => {
                                    setValue(opt.value);
                                    setOpen(false);
                                }}
                            >
                                {showFlag && (
                                    <img src={opt.flag} alt="" className="w-5 h-4 rounded-sm" />
                                )}
                                <span>{opt.label}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
    // ---------- END Dropdown Component ----------

    return (
        <div className="w-full shadow py-1.5 text-gray-100 bg-purple-600 text-sm">
            <div className=" mx-auto flex items-center justify-between  py-2 px-5">

                {/* Left Links */}
                <div className="flex gap-4 max-[1180px]:hidden">
                    <span className="hover:text-gray-300 cursor-pointer pr-3 border-r text-gray-100"><NavLink to="/about" >About Us</NavLink></span>
                    <span className="hover:text-gray-300 cursor-pointer pr-3 border-r text-gray-100"><NavLink to="account" >My Account</NavLink></span>
                    <span className="hover:text-gray-300 cursor-pointer pr-3 border-r text-gray-100"><NavLink to="/wishlist" > Wishlist</NavLink></span>
                    <span className="hover:text-gray-300 cursor-pointer"><NavLink to="shopenquiry" >Open a shop</NavLink> </span>
                </div>

                {/* Middle Message */}
                <div className="text-gray-100 block max-[850px]:hidden ">
                    Free shipping for all orders over
                    <span className="text-green-400 font-medium"> $75.00</span>
                </div>

                {/* Right Controls */}
                <div className="flex items-center justify-between md:gap-6 gap-2">
                    <span className="text-gray-100  max-[600px]:hidden ">
                        Need help? Call Us:{" "}
                        <span className="text-green-400 font-semibold">+1800 900 1234</span>
                    </span>

                    {/* Language Dropdown */}
                    <Dropdown
                        options={languageOptions}
                        value={language}
                        setValue={setLanguage}
                        showFlag
                    />

                    {/* Currency Dropdown */}
                    <Dropdown
                        options={currencyOptions}
                        value={currency}
                        setValue={setCurrency}

                    />
                </div>
                <div>
                    <div className=' border border-gray-500 rounded-lg max-[850px]:block hidden '>
                        <button className='bg-gray-100 px-2 text-xs py-1 text-gray-700 rounded-l-lg hover:bg-gray-200 active:bg-gray-300'>
                            <NavLink to="/login" >Login</NavLink>
                        </button>
                        <button className='bg-teal-500 px-2 text-xs py-1 rounded-r-lg hover:bg-teal-400 active:bg-teal-600' >
                            <NavLink
                                to="/register">
                                Sign Up
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
