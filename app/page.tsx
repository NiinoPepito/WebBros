import Image from "next/image";
import Accueil from "@/components/Accueil";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <section>
            <Navbar/>
            <div id={"top"} className="flex min-h-screen flex-col container mx-auto px-12 py-4">
                <Accueil/>
                <AboutUs/>
                <Contact/>
            </div>
        </section>
    );
}
