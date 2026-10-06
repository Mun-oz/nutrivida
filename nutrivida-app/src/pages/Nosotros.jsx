export default function Nosotros() {
  return (
    <main className="container">
      <div className="about-wrapper">
        <section className="about-hero">
          <span className="badge">Conoce NutriVida</span>
          <h2>Tu salud en manos de profesionales</h2>
          <p>Promovemos un estilo de vida saludable integrando atención clínica nutricional personalizada, evaluaciones de progreso y planes alimenticios adaptados a tus objetivos.</p>
        </section>

        <section className="about-story">
          <h3>Nuestra Historia</h3>
          <p>NutriVida nació en 2016 en Temuco, Región de La Araucanía, con el compromiso de brindar asesoría nutricional personalizada. Nuestro equipo está conformado por 4 nutricionistas especializados en áreas como nutrición deportiva, control metabólico, pérdida de peso y alimentación vegetariana/vegana. Atendemos a decenas de pacientes cada semana, acompañándolos en su progreso continuo con un enfoque científico y humano.</p>
        </section>

        <section className="about-grid">
          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h3>Misión</h3>
            <p>Proporcionar servicios nutricionales clínicos integrales y personalizados que mejoren la calidad de vida de nuestros pacientes, facilitando el seguimiento de sus metas y planes alimenticios.</p>
          </div>
          <div className="about-card">
            <div className="card-icon">🚀</div>
            <h3>Visión</h3>
            <p>Modernizar y liderar la atención nutricional en la región, ofreciendo una experiencia digital ágil, transparente y accesible para que cada paciente tome el control de su bienestar.</p>
          </div>
        </section>

        <section className="about-values">
          <h3>Nuestros Valores</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>🤝 Compromiso y Seguimiento</h4>
              <p>Acompañamiento constante en el progreso del paciente.</p>
            </div>
            <div className="value-item">
              <h4>💚 Atención Personalizada</h4>
              <p>Evaluaciones y planes adaptados a los objetivos de cada persona.</p>
            </div>
            <div className="value-item">
              <h4>🔬 Evidencia Científica</h4>
              <p>Pautas nutricionales respaldadas por profesionales de la salud.</p>
            </div>
            <div className="value-item">
              <h4>🔒 Privacidad</h4>
              <p>Máximo resguardo y confidencialidad en el manejo de las fichas clínicas.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}