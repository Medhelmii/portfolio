import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'

function About() {
    const { t } = useTranslation()
    const paragraphs = t('about.paragraphs', { returnObjects: true })

    const info = [
        { label: t('about.info.position'), value: t('about.info.positionValue') },
        { label: t('about.info.location'), value: t('hero.location') },
        { label: t('about.info.languages'), value: t('about.info.languagesValue') },
        { label: t('about.info.email'), value: 'helmi.karoui1@gmail.com', href: 'mailto:helmi.karoui1@gmail.com' },
    ]

    return (
        <section id="about" className="py-20">
            <SectionTitle title={t('about.title')} />

            <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
                <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                    {Array.isArray(paragraphs) && paragraphs.map((text) => <p key={text}>{text}</p>)}
                </div>

                <div>
                    <ul className="space-y-3">
                        {info.map((item) => (
                            <li key={item.label} className="flex flex-wrap gap-x-2 border-b dark:border-gray-800 pb-3">
                                <span className="text-gray-500 dark:text-gray-400">{item.label} :</span>
                                {item.href ? (
                                    <a href={item.href} className="font-semibold hover:text-accent break-all">{item.value}</a>
                                ) : (
                                    <span className="font-semibold">{item.value}</span>
                                )}
                            </li>
                        ))}
                    </ul>

                    <a
                        href="/Lebenslauf_Mohamed_Helmi_Karoui_2026.pdf"
                        download
                        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-gray-950 font-semibold hover:-translate-y-0.5 transition-all"
                    >
                        {t('about.info.cv')} ↓
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About