import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useTheme from '../hooks/useTheme'

const links = ['about', 'skills', 'projects', 'experience', 'contact']

function Navbar() {
    const [open, setOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()
    const { t, i18n } = useTranslation()

    const currentLang = i18n.resolvedLanguage
    function toggleLang() {
        i18n.changeLanguage(currentLang === 'de' ? 'en' : 'de')
    }

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b dark:border-gray-800 z-50">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold">
                    Helmi<span className="text-blue-600">.</span>
                </a>

                <div className="flex items-center gap-4">
                    <ul className="hidden md:flex gap-6">
                        {links.map((id) => (
                            <li key={id}>
                                <a href={`#${id}`} className="hover:text-blue-600 transition-colors">
                                    {t(`nav.${id}`)}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={toggleLang}
                        aria-label={t('nav.switchLang')}
                        className="text-sm font-semibold px-2 py-1 rounded border dark:border-gray-700 hover:border-blue-600 hover:text-blue-600"
                    >
                        {currentLang === 'de' ? 'EN' : 'DE'}
                    </button>

                    <button onClick={toggleTheme} aria-label={t('nav.toggleTheme')} className="text-xl">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setOpen(!open)}
                        aria-label={t('nav.toggleMenu')}
                    >
                        {open ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {open && (
                <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white dark:bg-gray-950 border-b dark:border-gray-800">
                    {links.map((id) => (
                        <li key={id}>
                            <a href={`#${id}`} onClick={() => setOpen(false)}>
                                {t(`nav.${id}`)}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar