import { Link } from 'react-router';

export default function Blog() {
  const articulos = [
    {
      id: 1,
      titulo: "5 Mitos sobre la Nutrición Deportiva",
      resumen: "Descubre la verdad sobre los suplementos, las proteínas y la alimentación antes de entrenar.",
      fecha: "15 Octubre, 2026"
    },
    {
      id: 2,
      titulo: "Guía para una Transición Vegana Saludable",
      resumen: "Pasos fundamentales para cambiar tu alimentación asegurando que no te falten nutrientes esenciales.",
      fecha: "28 Septiembre, 2026"
    }
  ];

  return (
    <main className="container" style={{ flexDirection: 'column', padding: '2rem 1rem' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '2rem' }}>Nuestro Blog</h2>
      
      <div className="products-grid">
        {articulos.map(articulo => (
          <article key={articulo.id} className="product-card-home" style={{ padding: '1.5rem', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#888' }}>{articulo.fecha}</span>
              <h3 style={{ color: '#333', margin: '0.5rem 0' }}>{articulo.titulo}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>{articulo.resumen}</p>
            </div>
            <Link to="/blog" className="btn-outline" style={{ display: 'inline-block', marginTop: '1.5rem', textAlign: 'center' }}>
              Leer artículo
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}