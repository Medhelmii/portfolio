import SectionTitle from './SectionTitle'

function About() {
    return (
        <section id="about" className="py-20">
            <SectionTitle title="Über mich" />

            <div className="max-w-3xl text-gray-600 leading-relaxed space-y-4">
                <p>
                    Ich bin Software Engineer aus Tunesien und lebe heute in Freiburg im
                    Breisgau. Ich habe mein Ingenieurstudium in Informatik mit Schwerpunkt
                    Software Engineering an der ESPRIT abgeschlossen.
                </p>

                <p>
                    Praktische Erfahrung habe ich in Praktika bei Insoméan Computer
                    Solutions und SE Bordnetze gesammelt. Dort habe ich an
                    Webanwendungen mit Spring Boot, Angular und .NET gearbeitet und
                    CI/CD-Prozesse mit Docker und Jenkins kennengelernt.
                </p>

                <p>
                    Mich begeistert der ganze Weg einer Anwendung – vom Frontend über das
                    Backend bis zum Deployment in der Cloud. Besonders interessieren mich
                    Cloud- und DevOps-Themen. Aktuell suche ich eine Stelle, in der ich
                    mein Wissen einbringen und weiter wachsen kann.
                </p>
            </div>
        </section>
    )
}

export default About