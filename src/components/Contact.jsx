import { useState } from 'react'
import SectionTitle from './SectionTitle'

const inputClass =
    'w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle')

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setStatus('sending')

        try {
            const res = await fetch(
                `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify(form),
                }
            )

            if (res.ok) {
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }
    }

    return (
        <section id="contact" className="py-20">
            <SectionTitle title="Kontakt" />

            <div className="grid md:grid-cols-2 gap-10">
                {/* Links: Info */}
                <div className="space-y-4 text-gray-600">
                    <p>
                        Sie haben eine offene Stelle oder ein spannendes Projekt?
                        Ich freue mich über Ihre Nachricht!
                    </p>
                    <ul className="space-y-2">
                        <li>
                            ✉️{' '}
                            <a href="mailto:mohamedhelmi.karoui1@gmail.com" className="hover:text-blue-600">
                                mohamedhelmi.karoui1@gmail.com
                            </a>
                        </li>
                        <li>
                            💼{' '}
                            <a
                                href="https://www.linkedin.com/in/mohamed-helmi-karoui-4341621a1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>📍 Freiburg im Breisgau</li>
                    </ul>
                </div>

                {/* Rechts: Formular */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Ihr Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Ihre E-Mail"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />
                    <textarea
                        name="message"
                        placeholder="Ihre Nachricht"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className={inputClass}
                    />

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                        {status === 'sending' ? 'Wird gesendet…' : 'Nachricht senden'}
                    </button>

                    {status === 'success' && (
                        <p className="text-green-600">Danke! Ihre Nachricht wurde gesendet.</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-600">
                            Etwas ist schiefgelaufen. Bitte schreiben Sie mir direkt per E-Mail.
                        </p>
                    )}

                    <p className="text-xs text-gray-500">
                        Ihre Daten werden nur zur Beantwortung Ihrer Anfrage verwendet und über
                        Formspree übermittelt.
                    </p>
                </form>
            </div>
        </section>
    )
}

export default Contact