import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'
import experience from '../data/experience'

function Experience() {
    const { t } = useTranslation()

    return (
        <section id="experience" className="py-20">
            <SectionTitle title={t('experience.title')} />

            <ol className="border-l-2 border-blue-200 dark:border-blue-900 space-y-10">
                {experience.map((id) => {
                    const points = t(`experience.items.${id}.points`, { returnObjects: true })

                    return (
                        <li key={id} className="relative ml-6">
                            <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950" />

                            <p className="text-sm text-gray-500 dark:text-gray-400">{t(`experience.items.${id}.period`)}</p>
                            <h3 className="font-semibold text-lg mt-1">{t(`experience.items.${id}.title`)}</h3>
                            <p className="text-blue-600">{t(`experience.items.${id}.company`)}</p>

                            {Array.isArray(points) && points.length > 0 && (
                                <ul className="mt-3 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                                    {points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}

export default Experience