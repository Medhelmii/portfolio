import SectionTitle from './SectionTitle'

function About() {
    return (
        <section id="about" className="py-20">
            <SectionTitle title="Über mich" />

            <div className="max-w-3xl text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
                <p>
                    Ich bin Softwareingenieur aus Tunesien und lebe heute in Freiburg im
                    Breisgau. Mein Diplom in Software Engineering habe ich 2024 an der
                    ESPRIT abgeschlossen.
                </p>
                <p>
                    In meinem Abschlussprojekt bei Insoméan Computer Solutions habe ich eine
                    Webanwendung mit Spring Boot und Angular entwickelt, Single Sign-On über
                    Azure AD umgesetzt und die Anwendung mit Azure DevOps in die Cloud
                    gebracht. Zusätzlich habe ich Freelance-Projekte realisiert – von
                    E-Commerce bis zu Machine-Learning-Empfehlungssystemen.
                </p>
                <p>
                    Mich begeistert der ganze Weg einer Anwendung – vom Frontend über das
                    Backend bis zum Deployment in der Cloud. Aktuell suche ich eine
                    Junior-Stelle in einem modernen Tech-Umfeld in der Region Freiburg
                    oder remote.
                </p>
            </div>
        </section>
    )
}

export default About