import { useTranslation } from 'react-i18next'
import Badge from './Badge'

function ProjectCard({ project }) {
    const { t } = useTranslation()

    return (
        <article className="h-full p-6 rounded-xl border dark:border-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">            <h3 className="text-xl font-semibold">{t(`projects.items.${project.id}.title`)}</h3>

            <p className="mt-2 text-gray-600 dark:text-gray-400 flex-1">
                {t(`projects.items.${project.id}.description`)}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                ))}
            </ul>

            <div className="mt-6 flex gap-4 text-sm font-medium">
                {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        {t('projects.github')}
                    </a>
                )}
                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                        {t('projects.demo')}
                    </a>
                )}
            </div>
        </article>
    )
}

export default ProjectCard