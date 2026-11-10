import { useState } from 'react'
import useAccent, { accentColors } from '../hooks/useAccent'

function ColorSwitcher() {
    const [open, setOpen] = useState(false)
    const { accent, setAccent } = useAccent()

    return (
        <div className="fixed left-0 top-1/3 z-40 flex items-start">
            {open && (
                <div className="p-4 bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-r-xl shadow-xl">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3">Couleur</p>
                    <div className="grid grid-cols-3 gap-2">
                        {accentColors.map((c) => (
                            <button
                                key={c.value}
                                onClick={() => setAccent(c.value)}
                                aria-label={c.name}
                                className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${accent === c.value ? 'ring-2 ring-offset-2 ring-gray-400 dark:ring-offset-gray-900' : ''
                                    }`}
                                style={{ backgroundColor: c.value }}
                            />
                        ))}
                    </div>
                </div>
            )}
            <button
                onClick={() => setOpen(!open)}
                aria-label="Changer la couleur"
                className="w-11 h-11 bg-accent text-gray-950 rounded-r-lg flex items-center justify-center text-xl shadow-lg"
            >
                🎨
            </button>
        </div>
    )
}

export default ColorSwitcher