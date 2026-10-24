import SectionTitle from './SectionTitle'
import skills from '../data/skills'

function Skills() {
    return (
        <section id="skills" className="py-20">
            <SectionTitle title="Skills" />

            <div className="grid sm:grid-cols-2 gap-6">
                {skills.map((group) => (
                    <div key={group.category} className="p-6 rounded-xl border">
                        <h3 className="font-semibold mb-4">{group.category}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <li
                                    key={item}
                                    className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills