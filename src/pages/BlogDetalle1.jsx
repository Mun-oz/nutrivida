import { Link } from 'react-router';

export default function BlogDetalle1() {
  return (
    <main className="container">
      <div className="blog-wrapper">
        <article className="blog-detail-card">
          <div className="blog-card-image">
            <img src="/assets/img/blog1.jpg" alt="Mitos del Metabolismo y el Agua Helada" className="blog-detail-image" />
          </div>
          
          <div className="blog-detail-content">
            <h2>CASO CURIOSO #1: Mitos del Metabolismo y el Agua Helada</h2>
            
            <div className="blog-detail-body">
              <p>Existe la creencia popular de que beber agua helada durante el día o en las mañanas acelera significativamente el metabolismo y ayuda a quemar grasa de manera casi milagrosa. En la atención clínica cotidiana de NutriVida, es una de las dudas más frecuentes entre nuestros pacientes.</p>
              
              <p>La explicación fisiológica detrás de este mito es que el cuerpo gasta energía térmica para calentar el agua helada hasta la temperatura corporal (aproximadamente 37 °C). Si bien este proceso exige un gasto calórico por termogénesis, la cantidad real de calorías utilizadas es extremadamente baja: aproximadamente entre 4 y 7 calorías por vaso de agua fría.</p>
              
              <p>Por ende, aunque técnicamente existe un gasto de energía, su impacto cuantitativo en la pérdida de grasa corporal es insignificante. Mantener una hidratación adecuada es fundamental para la salud celular y el rendimiento físico, pero la pérdida de peso real dependerá de un déficit calórico planificado por un profesional de la salud.</p>
            </div>

            {/* Los estilos en línea se pasan como objetos a camelCase */}
            <div className="blog-reference" style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '0.85rem', color: '#666' }}>
              <p><strong>Fuente oficial de referencia:</strong> Biblioteca Nacional de Medicina de EE. UU. (NIH / MedlinePlus) – 
                <a href="https://medlineplus.gov/spanish/ency/article/002471.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                  Información sobre el agua en la dieta y funciones metabólicas
                </a>
              </p>
              <p><strong>Revisado por:</strong> Equipo Clínico NutriVida, Temuco.</p>
            </div>

            <Link to="/blog" className="btn-back">← Volver a Noticias</Link>
          </div>
        </article>
      </div>
    </main>
  );
}