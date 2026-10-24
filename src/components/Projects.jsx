import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function Projects() {
    return (
        <section id="projects" className="py-20">
            <SectionTitle title="Projekte" />

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects