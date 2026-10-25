import { useEffect, useState } from 'react'

function getInitialTheme() {
    try {
        const saved = localStorage.getItem('theme')
        if (saved === 'light' || saved === 'dark') return saved
    } catch {
        // ignorieren
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        try {
            localStorage.setItem('theme', theme)
        } catch {
            // ignorieren
        }
    }, [theme])

    function toggleTheme() {
        setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    }

    return { theme, toggleTheme }
}