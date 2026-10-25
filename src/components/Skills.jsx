import SectionTitle from './SectionTitle'
import Badge from './Badge'
import skills from '../data/skills'

function Skills() {
    return (
        <section id="skills" className="py-20">
            <SectionTitle title="Skills" />

            <div className="grid sm:grid-cols-2 gap-6">
                {skills.map((group) => (
                    <div key={group.category} className="p-6 rounded-xl border dark:border-gray-800">
                        <h3 className="font-semibold mb-4">{group.category}</h3>
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