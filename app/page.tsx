import Image from "next/image";
import Accueil from "@/components/Accueil";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-12 py-4">
        <Accueil />
    </main>
  );
}
