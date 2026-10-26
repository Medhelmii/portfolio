import { useEffect, useRef, useState } from 'react'

function FadeIn({ children, delay = 0, className = '' }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect() // nur einmal animieren
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out motion-reduce:transition-none ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${className}`}
        >
            {children}
        </div>
    )
}

export default FadeIn