import { useTranslation } from 'react-i18next'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import FadeIn from './FadeIn'
import projects from '../data/projects'

function Projects() {
    const { t } = useTranslation()

    return (
        <section id="projects" className="py-20">
            <FadeIn>
                <SectionTitle title={t('projects.title')} />
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <FadeIn key={project.id} delay={index * 100} className="h-full">
                        <ProjectCard project={project} />
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}

export default Projects