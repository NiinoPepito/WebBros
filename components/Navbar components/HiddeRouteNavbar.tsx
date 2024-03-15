import React from "react";

const HiddenRouteNavbar = () => {
    return (

        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#accueil" className="text-black block hover:bg-black hover:text-white rounded-lg p-2">
                    Accueil
                </a>
                <a href="#about" className="text-black block hover:bg-black hover:text-white rounded-lg p-2">
                    À Propos
                </a>
                <a href="#contact" className="text-black block hover:bg-black hover:text-white rounded-lg p-2">
                    Contact
                </a>
            </div>
        </div>

    )
}

export default HiddenRouteNavbar