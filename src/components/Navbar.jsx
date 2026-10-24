import { useState } from 'react'

const links = [
    { href: '#about', label: 'Über mich' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projekte' },
    { href: '#experience', label: 'Erfahrung' },
    { href: '#contact', label: 'Kontakt' },
]

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur border-b z-50">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold">
                    Helmi<span className="text-blue-600">.</span>
                </a>

                {/* Desktop */}
                <ul className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-blue-600 transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Handy-Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                    aria-label="Menü öffnen"
                >
                    {open ? '✕' : '☰'}
                </button>
            </div>

            {/* Handy-Menü */}
            {open && (
                <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 bg-white border-b">
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