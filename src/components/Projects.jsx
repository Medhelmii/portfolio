import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function Projects() {
    const { t } = useTranslation()

    return (
        <section id="projects" className="py-20">
            <SectionTitle title={t('projects.title')} />

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects