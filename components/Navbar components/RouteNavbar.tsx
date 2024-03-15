import React from "react";

const RouteNavbar = () => {
    return (

        <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
                <a href="#accueil" className="hover:text-red-600 rounded-lg p-2">
                    Accueil
                </a>
                <a href="#about" className="hover:text-red-600 rounded-lg p-2">
                    À Propos
                </a>
                <a href="#contact" className="hover:text-red-600 rounded-lg p-2">
                    Contact
                </a>
            </div>
        </div>

    )
}

export default RouteNavbar