import { Link } from 'react-router';

export default function BlogDetalle2() {
  return (
    <main className="container">
      <div className="blog-wrapper">
        <article className="blog-detail-card">
          <div className="blog-card-image">
            <img src="/assets/img/blog2.jpg" alt="La Regla de los 20 Minutos al Comer" className="blog-detail-image" />
          </div>
          
          <div className="blog-detail-content">
            <h2>CASO CURIOSO #2: La Regla de los 20 Minutos al Comer</h2>
            
            <div className="blog-detail-body">
              <p>Comer con prisa es un hábito común en el estilo de vida moderno, pero tiene un impacto fisiológico directo en el control del peso. En la Clínica NutriVida enfatizamos la importancia de la velocidad de ingesta dentro de nuestras pautas de reeducación alimentaria.</p>
              
              <p>Desde el momento en que empezamos a ingerir alimentos, el sistema digestivo comienza a liberar hormonas de saciedad como la colecistocinina (CCK), el péptido YY y el GLP-1. Sin embargo, este circuito hormonal de comunicación entre el estómago y el hipotálamo tarda aproximadamente 20 minutos en enviar y procesar la señal de plenitud.</p>
              
              <p>Si consumimos una comida completa en menos de 10 o 15 minutos, es muy probable que ingiramos una cantidad de calorías superior a la que nuestro cuerpo realmente necesita antes de que el cerebro registre que ya estamos satisfechos. Masticar despacio y pausar entre bocados es una de las estrategias más efectivas para mejorar la digestión y prevenir sobreingestas innecesarias.</p>
            </div>

            <div className="blog-reference" style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '0.85rem', color: '#666' }}>
              <p><strong>Fuente oficial de referencia:</strong> Biblioteca Nacional de Medicina de EE. UU. (NIH / MedlinePlus) – 
                <a href="https://medlineplus.gov/spanish/ency/patientinstructions/000349.htm" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)' }}>
                  Consejos para controlar las porciones y comer de forma consciente
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