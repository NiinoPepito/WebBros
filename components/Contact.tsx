import Image from "next/image"

const Contact = () => {
    return (
        <section id={"contact"}>
            <div className="flex flex-col items-center">
                <h1 className="mb-4 text-4xl lg:text-4xl font-extrabold">
                    Nous Contacter
                </h1>
                <p className="text-lg lg:text-xl">
                    Formulaire de contact
                </p>
            </div>
        </section>

    )
}

export default Contact