import { useEffect, useState } from 'react'

export const accentColors = [
    { name: 'Jaune', value: '#ffb400' },
    { name: 'Vert', value: '#22c55e' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Rose', value: '#ec4899' },
    { name: 'Violet', value: '#a78bfa' },
]

function getInitialAccent() {
    try {
        return localStorage.getItem('accent') || accentColors[0].value
    } catch {
        return accentColors[0].value
    }
}

export default function useAccent() {
    const [accent, setAccent] = useState(getInitialAccent)

    useEffect(() => {
        document.documentElement.style.setProperty('--accent', accent)
        try {
            localStorage.setItem('accent', accent)
        } catch {
            // ignorer
        }
    }, [accent])

    return { accent, setAccent }
}