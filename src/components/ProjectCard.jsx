function ProjectCard({ project }) {
    return (
        <article className="p-6 rounded-xl border hover:shadow-lg transition-shadow flex flex-col">
            <h3 className="text-xl font-semibold">{project.title}</h3>

            <p className="mt-2 text-gray-600 flex-1">{project.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <li key={t} className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
                        {t}
                    </li>
                ))}
            </ul>

            <div className="mt-6 flex gap-4 text-sm font-medium">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        GitHub →
                    </a>
                )}
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                    >
                        Live-Demo →
                    </a>
                )}
            </div>
        </article>
    )
}

export default ProjectCard