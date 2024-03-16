import React from "react";

const RouteNavbar = () => {
    return (

        <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
                <a href="#accueil" className="hover:text-red-600">
                    Accueil
                </a>
                <a href="#about" className="hover:text-red-600">
                    À Propos
                </a>
                <a href="#contact" className="hover:text-red-600">
                    Contact
                </a>
            </div>
        </div>

    )
}

export default RouteNavbar