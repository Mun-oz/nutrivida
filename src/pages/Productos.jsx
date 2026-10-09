import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { SERVICIOS_URL, formatearPrecio, filtrarServicios } from '../services/serviciosService';

export default function Productos() {
  const { data: catalogo, loading, error } = useFetch(SERVICIOS_URL);
  const [busqueda, setBusqueda] = useState('');

  const serviciosFiltrados = filtrarServicios(catalogo, busqueda);

  return (
    <main className="container my-5 d-block">
      <div className="text-center mb-5">
        <h2 className="text-success fw-bold">Nuestros Servicios Nutricionales</h2>
        <p className="text-muted">Planes clínicos diseñados por profesionales para tus metas específicas.</p>
        
        <div className="mx-auto" style={{ maxWidth: '500px' }}>
          <input
            type="text"
            // Clases de formulario nativas de Bootstrap
            className="form-control rounded-pill border-secondary px-4 py-2"
            placeholder="Buscar por nombre o código (ej: Deportivo, CN001)..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {loading && (
        <div className="text-center p-5 text-muted fs-4">
          Cargando catálogo de servicios...
        </div>
      )}

      {error && (
        // Usamos el componente de Alerta de Bootstrap
        <div className="alert alert-danger text-center shadow-sm" role="alert">
          Ocurrió un error al cargar los servicios: {error}
        </div>
      )}

      {!loading && !error && (
        // Grilla responsiva de Bootstrap: 'row' con 'g-4' (gap/espacio entre tarjetas)
        <div className="row g-4">
          {serviciosFiltrados.length === 0 ? (
            <div className="col-12 text-center text-muted">
              No se encontraron servicios que coincidan con tu búsqueda.
            </div>
          ) : (
            serviciosFiltrados.map((servicio) => (
              // En móvil (col-12), en tablet (col-md-6), en PC (col-lg-3 = 4 columnas)
              <div key={servicio.id} className="col-12 col-md-6 col-lg-3">
                {/* Componente Card de Bootstrap */}
                <div className="card h-100 shadow-sm border-0">
                  <img 
                    src={`/assets/img/${servicio.img}`} 
                    className="card-img-top" 
                    alt={servicio.nombre} 
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  
                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-light text-secondary mb-2 align-self-start border">
                      {servicio.duracion}
                    </span>
                    <h5 className="card-title fw-bold text-dark">{servicio.nombre}</h5>
                    <p className="card-text text-success fs-4 fw-bold mt-auto mb-3">
                      {formatearPrecio(servicio.precio)}
                    </p>
                    
                    {/* Botón de Bootstrap (btn-success combina con el verde de NutriVida) */}
                    <button className="btn btn-success w-100 fw-bold">
                      Agendar Servicio
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </main>
  );
}