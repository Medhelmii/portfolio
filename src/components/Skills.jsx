import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'
import Badge from './Badge'
import skills from '../data/skills'

function Skills() {
    const { t } = useTranslation()

    return (
        <section id="skills" className="py-20">
            <SectionTitle title={t('skills.title')} />

            <div className="grid sm:grid-cols-2 gap-6">
                {skills.map((group) => (
                    <div key={group.id} className="p-6 rounded-xl border dark:border-gray-800">
                        <h3 className="font-semibold mb-4">{t(`skills.categories.${group.id}`)}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <Badge key={item}>{item}</Badge>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills