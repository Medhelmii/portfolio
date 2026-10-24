import SectionTitle from './SectionTitle'
import experience from '../data/experience'

function Experience() {
    return (
        <section id="experience" className="py-20">
            <SectionTitle title="Erfahrung" />

            <ol className="border-l-2 border-blue-200 space-y-10">
                {experience.map((item) => (
                    <li key={item.title} className="relative ml-6">
                        <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />

                        <p className="text-sm text-gray-500">{item.period}</p>
                        <h3 className="font-semibold text-lg mt-1">{item.title}</h3>
                        <p className="text-blue-600">{item.company}</p>

                        {item.points.length > 0 && (
                            <ul className="mt-3 list-disc list-inside text-gray-600 space-y-1">
                                {item.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    )
}

export default Experience