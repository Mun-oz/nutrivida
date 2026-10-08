import { Link } from 'react-router';

export default function Home() {
  return (
    <main className="container-home">
      <section className="home-hero">
        <div className="hero-text">
          <h2>CLÍNICA NUTRIVIDA</h2>
          <p>Nuestros planes y servicios nutricionales clínicos brindan acompañamiento personalizado para identificar tus necesidades de salud. Conoce nuestros planes y agenda tu evaluación hoy mismo.</p>
          <Link to="/productos" className="btn-outline">📥 ver productos</Link>
        </div>
        <div className="hero-image">
          <img src="/assets/img/clinNutri.jpg" alt="Clínica NutriVida" className="hero-img-real" />
        </div>
      </section>

      <section className="home-products">
        <div className="products-grid">
          {/* Tarjeta 1 */}
          <div className="product-card-home">
            <img src="/assets/img/metabolismo.png" alt="Metabólico" className="product-img-real" />
            <div className="product-info">
              <h4>Plan Control Metabólico</h4>
              <p className="attributes">Duración: 1 mes | Incluye pauta</p>
              <p className="price">$45.000</p>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="product-card-home">
            <img src="/assets/img/nutriciondeporte.jpg" alt="Nutrición Deportiva" className="product-img-real" />
            <div className="product-info">
              <h4>Plan Nutrición Deportiva</h4>
              <p className="attributes">Duración: 1 mes | Eval. física</p>
              <p className="price">$50.000</p>
            </div>
          </div>
          {/* Tarjeta 3 */}
          <div className="product-card-home">
            <img src="/assets/img/t_veg.jpg" alt="Transición Vegana" className="product-img-real" />
            <div className="product-info">
              <h4>Plan Transición Vegana</h4>
              <p className="attributes">Duración: 1 mes | Recetario</p>
              <p className="price">$40.000</p>
            </div>
          </div>
          {/* Tarjeta 4 */}
          <div className="product-card-home">
            <img src="/assets/img/control_seg.png" alt="Control Seguimiento" className="product-img-real" />
            <div className="product-info">
              <h4>Control de Seguimiento</h4>
              <p className="attributes">Duración: 30 min | Presencial</p>
              <p className="price">$25.000</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}