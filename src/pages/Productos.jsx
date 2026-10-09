import { useState } from 'react';
import { useFetch } from '../../../nutrividaa/src/hooks/useFetch';
import { SERVICIOS_URL, formatearPrecio, filtrarServicios } from '../../../nutrividaa/src/services/serviciosService';

export default function Productos() {
  const { data: catalogo, loading, error } = useFetch(SERVICIOS_URL);
  const [busqueda, setBusqueda] = useState('');

  const serviciosFiltrados = filtrarServicios(catalogo, busqueda);

  return (
    <main className="container-home" style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--primary-color)', fontSize: '2.2rem' }}>Nuestros Servicios Nutricionales</h2>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>Planes clínicos diseñados por profesionales para tus metas específicas.</p>
        
        <div style={{ marginTop: '1.5rem', maxWidth: '500px', marginInline: 'auto' }}>
          <input
            type="text"
            placeholder="Buscar por nombre o código (ej: Deportivo, CN001)..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '25px', border: '1px solid #ccc', fontSize: '1rem', outline: 'none' }}
          />
        </div>
      </div>

      {loading && (
        <div style={{ textAlign: 'center', padding: '3rem', color: '#666', fontSize: '1.2rem' }}>
          Cargando catálogo de servicios...
        </div>
      )}

      {error && (
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#ffebee', color: '#c62828', borderRadius: '8px' }}>
          Ocurrió un error al cargar los servicios: {error}
        </div>
      )}

      {!loading && !error && (
        <div className="products-grid">
          {serviciosFiltrados.length === 0 ? (
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#888' }}>
              No se encontraron servicios.
            </p>
          ) : (
            serviciosFiltrados.map((servicio) => (
              <div key={servicio.id} className="product-card-home" style={{ height: '100%' }}>
                <img 
                  src={`/assets/img/${servicio.img}`} 
                  alt={servicio.nombre} 
                  className="product-img-real" 
                />
                
                <div className="product-info" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <p className="attributes" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{servicio.duracion}</p>
                  <h4>{servicio.nombre}</h4>
                  <p className="price" style={{ margin: 'auto 0 1rem 0' }}>{formatearPrecio(servicio.precio)}</p>
                  
                  <button className="btn-primary">
                    Agendar Servicio
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </main>
  );
}