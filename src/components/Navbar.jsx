import { useState } from 'react'
import useTheme from '../hooks/useTheme'

const links = [
    { href: '#about', label: 'Über mich' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projekte' },
    { href: '#experience', label: 'Erfahrung' },
    { href: '#contact', label: 'Kontakt' },
]

function Navbar() {
    const [open, setOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b dark:border-gray-800 z-50">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold">
                    Helmi<span className="text-blue-600">.</span>
                </a>

                <div className="flex items-center gap-4">
                    {/* Desktop-Links */}
                    <ul className="hidden md:flex gap-6">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-blue-600 transition-colors">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Dark-Mode-Button */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Farbmodus wechseln"
                        className="text-xl"
                    >
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    {/* Handy-Button */}
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setOpen(!open)}
                        aria-label="Menü öffnen"
                    >
                        {open ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Handy-Menü */}
            {open && (
                <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white dark:bg-gray-950 border-b dark:border-gray-800">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar