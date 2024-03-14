import Image from "next/image";
import Accueil from "@/components/Accueil";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <section id={"top"} className="flex min-h-screen flex-col container mx-auto px-12 py-4">
            <nav>
                <div className="container">
                    <div className="logo">
                        <a href="#top">Our Logo</a>
                    </div>
                    <div id="mainListDiv">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Accueil/>
            <div className="flex-1">
                <AboutUs/>
            </div>
            <Contact/>
        </section>
);
}
