import { useEffect, useState } from 'react'

export default function useTypewriter(words, speed = 80, pause = 1600) {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    const [deleting, setDeleting] = useState(false)
    const key = words.join('|')

    useEffect(() => {
        if (words.length === 0) return

        const word = words[index % words.length]
        let timeout

        if (!deleting && text === word) {
            // Wort fertig → kurz warten, dann löschen
            timeout = setTimeout(() => setDeleting(true), pause)
        } else if (deleting && text === '') {
            // Gelöscht → nächstes Wort
            timeout = setTimeout(() => {
                setDeleting(false)
                setIndex((i) => i + 1)
            }, 200)
        } else {
            // Buchstabe hinzufügen oder entfernen
            timeout = setTimeout(() => {
                setText(deleting ? text.slice(0, -1) : word.slice(0, text.length + 1))
            }, deleting ? speed / 2 : speed)
        }

        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, deleting, index, key, speed, pause])

    return text
}