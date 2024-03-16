import React from "react";

const Accueil = () => {
    return (
        <section id="accueil" className={'bg_accueil h-screen flex items-center justify-center'}>
            <div className="flex flex-col items-center">
                <p className="text-lg lg:text-xl">
                    Création de site vitrine
                </p>
                <img
                    className="h-72 w-72 logo"
                />
            </div>
        </section>

    )
}

export default Accueil