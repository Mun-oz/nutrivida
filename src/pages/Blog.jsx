import { Link } from 'react-router';

export default function Blog() {
  return (
    <main className="container">
      <div className="blog-wrapper">
        <section className="blog-header">
          <h2>CASOS CURIOSOS</h2>
          <p>Descubre datos curiosos, consejos nutricionales y casos de éxito de nuestra clínica.</p>
        </section>

        <section className="blog-list">
          {/* Noticia 1 */}
          <article className="blog-card">
            <div className="blog-card-content">
              <h3>CASO CURIOSO #1: Mitos del Metabolismo y el Agua Helada</h3>
              <p className="blog-description">¿Es verdad que beber agua con hielo acelera tu metabolismo de forma drástica? Analizamos la evidencia científica detrás de esta creencia popular.</p>
              <Link to="/blog-detalle-1" className="btn-primary btn-blog">VER CASO</Link>
            </div>
            <div className="blog-card-image">
              <img src="/assets/img/blog1.jpg" alt="Agua y metabolismo" />
            </div>
          </article>

          {/* Noticia 2 */}
          <article className="blog-card">
            <div className="blog-card-content">
              <h3>CASO CURIOSO #2: La Regla de los 20 Minutos al Comer</h3>
              <p className="blog-description">Descubre por qué tu cerebro tarda 20 minutos en registrar la saciedad y cómo este simple hábito ayuda a controlar la ingesta sin pasar hambre.</p>
              <Link to="/blog-detalle-2" className="btn-primary btn-blog">VER CASO</Link>
            </div>
            <div className="blog-card-image">
              <img src="/assets/img/blog2.jpg" alt="Nutrición y hábitos" />
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}