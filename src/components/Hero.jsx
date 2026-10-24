function Hero() {
    return (
        <section id="hero" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
            <p className="text-blue-600 font-medium">Hallo, ich bin</p>

            <h1 className="text-4xl md:text-6xl font-bold mt-2">
                Mohamed Helmi Karoui
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-gray-500 mt-2">
                Full-Stack-Entwickler
            </h2>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
                Ich entwickle moderne Webanwendungen mit React, Angular und Spring Boot –
                vom Frontend bis zur Cloud. Aktuell suche ich eine neue Herausforderung
                in der Region Freiburg.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                    Projekte ansehen
                </a>
                <a
                    href="/Lebenslauf-Helmi-Karoui.pdf"
                    download
                    className="px-6 py-3 rounded-lg border border-gray-300 font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                    Lebenslauf
                </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">📍 Freiburg im Breisgau</p>
        </section>
    )
}

export default Hero