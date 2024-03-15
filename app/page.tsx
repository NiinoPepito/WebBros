import Image from "next/image";
import Accueil from "@/components/Accueil";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar components/Navbar";

export default function Home() {
    return (
        <section id={"top"}>
            <Navbar/>
            <Accueil/>
            <AboutUs/>
            <Contact/>
        </section>
    );
}
