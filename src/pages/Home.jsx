import { Link } from 'react-router';

export default function Home() {
  return (
    <main className="w-100 d-block">
      
      {/* SECCIÓN HERO */}
      <section className="container my-5 d-block">
        <div className="card shadow-sm border-0 overflow-hidden">
          <div className="row g-0 align-items-center">
            <div className="col-md-6 p-5">
              <h2 className="text-secondary mb-3">CLÍNICA NUTRIVIDA</h2>
              <p className="text-muted fs-5 mb-4">
                Nuestros planes y servicios nutricionales clínicos brindan
                acompañamiento personalizado para identificar tus
                necesidades de salud. Conoce nuestros planes y agenda tu
                evaluación hoy mismo.
              </p>
              <Link to="/productos" className="btn btn-outline-dark fw-bold px-4 py-2">
                🩺 ver productos
              </Link>
            </div>
            <div className="col-md-6">
              <img 
                src="/assets/img/clinNutri.jpg" 
                alt="Clínica NutriVida" 
                className="img-fluid w-100 h-100" 
                style={{ objectFit: 'cover', minHeight: '300px' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: BENEFICIOS */}
      <section className="bg-light py-5">
        {/* Agregamos d-block aquí */}
        <div className="container py-4 d-block">
          <h2 className="text-center text-success fw-bold mb-5">¿Por qué elegir NutriVida?</h2>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100 border-top border-success border-4">
                <h1 className="display-4 mb-3">🥗</h1>
                <h4 className="fw-bold">Planes Personalizados</h4>
                <p className="text-muted">Dietas adaptadas a tus objetivos, metabolismo y estilo de vida, sin restricciones extremas.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100 border-top border-success border-4">
                <h1 className="display-4 mb-3">👩‍⚕️</h1>
                <h4 className="fw-bold">Expertos Clínicos</h4>
                <p className="text-muted">Nutricionistas certificados con experiencia en control metabólico y nutrición deportiva.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow-sm h-100 border-top border-success border-4">
                <h1 className="display-4 mb-3">💻</h1>
                <h4 className="fw-bold">Telemedicina</h4>
                <p className="text-muted">Atención presencial u online. Mantén tu control desde la comodidad de tu hogar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS DESTACADOS */}
      <section className="container py-5 d-block">
        <h3 className="text-center text-secondary fw-bold mb-5">Nuestros Servicios Más Solicitados</h3>
        <div className="row g-4">
          {/* Tarjeta 1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img src="/assets/img/metabolismo.png" className="card-img-top p-3" alt="Control Metabólico" style={{ height: '180px', objectFit: 'contain' }}/>
              <div className="card-body d-flex flex-column">
                <h6 className="text-success fw-bold">Plan Control Metabólico</h6>
                <small className="text-muted mb-3">Duración: 1 mes | Incluye pauta</small>
                <h5 className="fw-bold mt-auto mb-0">$45.000</h5>
              </div>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img src="/assets/img/nutriciondeporte.jpg" className="card-img-top p-3" alt="Nutrición Deportiva" style={{ height: '180px', objectFit: 'contain' }}/>
              <div className="card-body d-flex flex-column">
                <h6 className="text-success fw-bold">Plan Nutrición Deportiva</h6>
                <small className="text-muted mb-3">Duración: 1 mes | Eval. física</small>
                <h5 className="fw-bold mt-auto mb-0">$50.000</h5>
              </div>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img src="/assets/img/t_veg.jpg" className="card-img-top p-3" alt="Transición Vegana" style={{ height: '180px', objectFit: 'contain' }}/>
              <div className="card-body d-flex flex-column">
                <h6 className="text-success fw-bold">Plan Transición Vegana</h6>
                <small className="text-muted mb-3">Duración: 1 mes | Recetario</small>
                <h5 className="fw-bold mt-auto mb-0">$40.000</h5>
              </div>
            </div>
          </div>
          {/* Tarjeta 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 shadow-sm border-0 text-center">
              <img src="/assets/img/control_seg.png" className="card-img-top p-3" alt="Seguimiento" style={{ height: '180px', objectFit: 'contain' }}/>
              <div className="card-body d-flex flex-column">
                <h6 className="text-success fw-bold">Control de Seguimiento</h6>
                <small className="text-muted mb-3">Duración: 30 min | Presencial</small>
                <h5 className="fw-bold mt-auto mb-0">$25.000</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <Link to="/productos" className="btn btn-success px-4 py-2 fw-bold">Ver Catálogo Completo</Link>
        </div>
      </section>

      {/* SECCIÓN: TESTIMONIOS */}
      <section className="bg-light py-5 border-top">
        {/* Agregamos d-block aquí */}
        <div className="container py-4 d-block">
          <h2 className="text-center text-success fw-bold mb-5">Lo que dicen nuestros pacientes</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-5">
              <div className="card border-0 shadow-sm p-4 h-100 fst-italic">
                <p className="text-muted">"Gracias al plan deportivo logré bajar mi porcentaje de grasa y mejorar mi rendimiento en la maratón. Atención 10/10."</p>
                <div className="mt-auto fw-bold text-dark">- Carlos M.</div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card border-0 shadow-sm p-4 h-100 fst-italic">
                <p className="text-muted">"El cambio a una dieta vegana fue súper amigable. Las pautas son claras, ricas y nunca paso hambre."</p>
                <div className="mt-auto fw-bold text-dark">- Valentina S.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: CALL TO ACTION */}
      <section className="bg-success text-white py-5">
        <div className="container text-center py-4 d-block">
          <h2 className="fw-bold mb-3">¿Listo para cambiar tus hábitos?</h2>
          <p className="fs-5 mb-4">Revisa nuestros artículos de blog gratuitos o ponte en contacto con nosotros.</p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/blog" className="btn btn-light text-success fw-bold px-4 py-2">Leer el Blog</Link>
            <Link to="/contacto" className="btn btn-outline-light fw-bold px-4 py-2">Contáctanos</Link>
          </div>
        </div>
      </section>

    </main>
  );
}