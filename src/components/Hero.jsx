import { useTranslation } from 'react-i18next'
import useTypewriter from '../hooks/useTypewriter'

const floatingTech = [
    { label: 'React', position: '-top-4 -left-6', delay: '0s' },
    { label: 'Azure', position: 'top-10 -right-10', delay: '1s' },
    { label: 'Spring Boot', position: '-bottom-4 -left-10', delay: '2s' },
    { label: 'Docker', position: 'bottom-12 -right-8', delay: '1.5s' },
]

function Hero() {
    const { t } = useTranslation()
    const roles = t('hero.roles', { returnObjects: true })
    const typed = useTypewriter(Array.isArray(roles) ? roles : [])

    return (
        <section
            id="hero"
            className="relative min-h-[calc(100vh-4rem)] flex items-center py-16"
        >
            {/* Hintergrund: bewegte Farbflecken */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
                <div className="animate-blob absolute top-10 -left-20 w-72 h-72 rounded-full bg-blue-400/30 dark:bg-blue-600/20 blur-3xl" />
                <div
                    className="animate-blob absolute top-40 right-0 w-72 h-72 rounded-full bg-violet-400/30 dark:bg-violet-600/20 blur-3xl"
                    style={{ animationDelay: '4s' }}
                />
                <div
                    className="animate-blob absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-cyan-300/30 dark:bg-cyan-600/20 blur-3xl"
                    style={{ animationDelay: '8s' }}
                />
            </div>

            <div className="w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
                {/* Linke Seite: Text */}
                <div>
                    <span className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400 text-sm font-medium">
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75 animate-ping" />
                            <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500" />
                        </span>
                        {t('hero.available')}
                    </span>

                    <p className="animate-fade-up mt-6 text-lg text-gray-500 dark:text-gray-400" style={{ animationDelay: '100ms' }}>
                        {t('hero.greeting')}
                    </p>

                    <h1
                        className="animate-fade-up text-4xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent pb-2"
                        style={{ animationDelay: '200ms' }}
                    >
                        Mohamed Helmi Karoui
                    </h1>

                    <h2
                        className="animate-fade-up mt-2 text-2xl md:text-3xl font-semibold font-mono h-10"
                        style={{ animationDelay: '300ms' }}
                    >
                        {typed}
                        <span className="animate-blink text-blue-600">|</span>
                    </h2>

                    <p
                        className="animate-fade-up mt-6 max-w-xl text-lg text-gray-600 dark:text-gray-400"
                        style={{ animationDelay: '400ms' }}
                    >
                        {t('hero.intro')}
                    </p>

                    <div className="animate-fade-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: '500ms' }}>
                        <a
                            href="#projects"
                            className="group px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-violet-600 text-white font-medium shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all"
                        >
                            {t('hero.ctaProjects')}
                            <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </a>
                        <a
                            href="/Lebenslauf-Helmi-Karoui.pdf"
                            download
                            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium backdrop-blur hover:border-blue-600 hover:text-blue-600 hover:-translate-y-0.5 transition-all"
                        >
                            {t('hero.ctaCv')} ↓
                        </a>
                    </div>

                    <p className="animate-fade-up mt-8 text-sm text-gray-500 dark:text-gray-400" style={{ animationDelay: '600ms' }}>
                        📍 {t('hero.location')}
                    </p>
                </div>

                {/* Rechte Seite: Foto mit schwebenden Badges */}
                <div className="animate-fade-up relative mx-auto w-64 h-64 md:w-80 md:h-80" style={{ animationDelay: '300ms' }}>
                    {/* Bunter Rahmen */}
                    <div className="absolute inset-0 rounded-[2rem] bg-linear-to-br from-blue-600 via-violet-600 to-cyan-500 rotate-6" />
                    <img
                        src="/public/helmi_karoui.png"
                        alt="Mohamed Helmi Karoui"
                        className="relative w-full h-full object-cover rounded-[2rem] border-4 border-white dark:border-gray-950"
                    />

                    {/* Schwebende Tech-Badges */}
                    {floatingTech.map((tech) => (
                        <span
                            key={tech.label}
                            className={`animate-float absolute ${tech.position} px-3 py-1.5 rounded-xl bg-white/90 dark:bg-gray-900/90 backdrop-blur border dark:border-gray-800 shadow-lg text-sm font-semibold`}
                            style={{ animationDelay: tech.delay }}
                        >
                            {tech.label}
                        </span>
                    ))}
                </div>
            </div>

            {/* Scroll-Hinweis */}
            <a
                href="#about"
                aria-label="Nach unten scrollen"
                className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 justify-center pt-2"
            >
                <span className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" />
            </a>
        </section>
    )
}

export default Hero