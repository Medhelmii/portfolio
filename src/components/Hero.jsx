import { useTranslation } from 'react-i18next'
import useTypewriter from '../hooks/useTypewriter'

function Hero() {
    const { t } = useTranslation()
    const roles = t('hero.roles', { returnObjects: true })
    const typed = useTypewriter(Array.isArray(roles) ? roles : [])

    return (
        <section
            id="hero"
            className="min-h-[calc(100vh-4rem)] grid md:grid-cols-[1fr_1.3fr] gap-12 items-center py-16"
        >
            {/* Photo */}
            <div className="animate-fade-up relative mx-auto w-60 h-72 md:w-80 md:h-[26rem]">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-accent" />
                <img
                    src="/helmi.jpg"
                    alt="Mohamed Helmi Karoui"
                    className="relative w-full h-full object-cover rounded-3xl"
                />
            </div>

            {/* Texte */}
            <div>
                <span className="animate-fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {t('hero.available')}
                </span>

                <p className="animate-fade-up mt-6 text-5xl md:text-7xl font-black tracking-tight leading-none" style={{ animationDelay: '100ms' }}>
                    {t('hero.hello')}<span className="text-accent">.</span>
                </p>
                <p className="animate-fade-up mt-2 text-2xl md:text-3xl font-light text-gray-500 dark:text-gray-400" style={{ animationDelay: '200ms' }}>
                    {t('hero.iam')}
                </p>

                <h1 className="animate-fade-up mt-4 text-4xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight" style={{ animationDelay: '300ms' }}>
                    <span className="text-accent">Mohamed Helmi</span>
                    <br />
                    Karoui
                </h1>

                <p className="animate-fade-up mt-5 font-mono text-lg md:text-xl h-8" style={{ animationDelay: '400ms' }}>
                    {typed}
                    <span className="animate-blink text-accent">|</span>
                </p>

                <p className="animate-fade-up mt-5 max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed" style={{ animationDelay: '500ms' }}>
                    {t('hero.intro')}
                </p>

                <div className="animate-fade-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: '600ms' }}>
                    <a
                        href="#projects"
                        className="group px-7 py-3 rounded-full bg-accent text-gray-950 font-semibold hover:-translate-y-0.5 transition-all"
                    >
                        {t('hero.ctaProjects')}
                        <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                    </a>
                    <a
                        href="#contact"
                        className="px-7 py-3 rounded-full border-2 border-accent font-semibold hover:bg-accent hover:text-gray-950 transition-all"
                    >
                        {t('nav.contact')}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero