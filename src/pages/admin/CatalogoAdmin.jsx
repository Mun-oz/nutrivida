import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

export default function CatalogoAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [servicios, setServicios] = useState([]);
  
  const [notificacion, setNotificacion] = useState(location.state?.mensaje || null);

  useEffect(() => {
    if (notificacion) {
      window.history.replaceState({}, ''); 
      const timer = setTimeout(() => setNotificacion(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notificacion]);

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem('nutrivida_catalogo_db'));
    if (datosGuardados && datosGuardados.length > 0) {
      setServicios(datosGuardados);
    } else {
      const datosIniciales = [
        { id: "CN001", nombre: "Plan Control Metabólico", descripcion: "Análisis corporal y pauta.", precio: 45000, imagen: "" },
        { id: "CN002", nombre: "Plan Nutrición Deportiva", descripcion: "Enfoque en rendimiento físico.", precio: 50000, imagen: "" }
      ];
      setServicios(datosIniciales);
      localStorage.setItem('nutrivida_catalogo_db', JSON.stringify(datosIniciales));
    }
  }, []);

  return (
    <>
      <header className="content-header">
        <h2>Catálogo de Servicios</h2>
        <button className="btn-primary" onClick={() => navigate('/admin/catalogo/nuevo')} style={{ width: 'auto', marginTop: 0 }}>+ Nuevo Servicio</button>
      </header>
      
      {/* BANNER DE ÉXITO */}
      {notificacion && (
        <div style={{ background: '#e8f5e9', color: '#2e7d32', padding: '1rem', borderRadius: '8px', margin: '0 0 1.5rem 0', border: '1px solid #a5d6a7', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>✅</span> {notificacion}
        </div>
      )}

      <div className="content-panel top-panel" style={{ marginTop: 0 }}>
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre del Servicio</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {servicios.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.nombre}</td>
                  <td>${Number(s.precio).toLocaleString('es-CL')}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <button className="btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem', width: 'auto', margin: 0, borderRadius: '4px', cursor: 'pointer' }} onClick={() => navigate('/admin/catalogo/mostrar', { state: { servicio: s } })}>Ver</button>
                      <button className="btn-primary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem', width: 'auto', margin: 0, borderRadius: '4px', cursor: 'pointer' }} onClick={() => navigate('/admin/catalogo/editar', { state: { servicio: s } })}>Editar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}