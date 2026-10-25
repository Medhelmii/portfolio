import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'

function About() {
    const { t } = useTranslation()
    const paragraphs = t('about.paragraphs', { returnObjects: true })

    return (
        <section id="about" className="py-20">
            <SectionTitle title={t('about.title')} />

            <div className="max-w-3xl text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                {paragraphs.map((text) => (
                    <p key={text}>{text}</p>
                ))}
            </div>
        </section>
    )
}

export default About