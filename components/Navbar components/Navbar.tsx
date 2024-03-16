"use client";
import React, {useEffect, useState} from "react";
import RouteNavbar from "@/components/Navbar components/RouteNavbar";
import HiddenRouteNavbar from "@/components/Navbar components/HiddeRouteNavbar";

const Navbar = () => {
    //isClick
    const [isClick, setisClick] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrolled]);
    return (
        <>
            <nav className={` 
                ${!isScrolled ? 'text-white' : ''} 
                ${isScrolled ? 'fixed top-0 left-0 right-0 bg-white text-black bg-opacity-90' : ''}`}
            >
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="#top">
                                    <img
                                        className="h-8 w-8 logo"
                                    />
                                </a>
                            </div>
                        </div>
                        <RouteNavbar/>
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none
                                focus:ring-2 focus:ring-inset focus:ring-black"
                                onClick={toggleNavbar}
                            >
                                {isClick ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <HiddenRouteNavbar/>
                )}
            </nav>
        </>

    )
}

export default Navbar