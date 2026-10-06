import { useNavigate } from 'react-router';

export default function CatalogoAdmin() {
  const navigate = useNavigate();
  
  // Datos mockeados temporalmente para visualizar la tabla
  const servicios = [
    { id: "CN001", nombre: "Plan Control Metabólico", precio: 45000 },
    { id: "CN002", nombre: "Plan Nutrición Deportiva", precio: 50000 }
  ];

  return (
    <>
      <header className="content-header">
        <h2>Catálogo de Servicios</h2>
        <button className="btn-primary" onClick={() => navigate('/admin/catalogo/nuevo')} style={{ width: 'auto', marginTop: 0 }}>+ Nuevo Servicio</button>
      </header>
      
      <div className="content-panel top-panel">
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
              {servicios.map(s => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.nombre}</td>
                  <td>${s.precio.toLocaleString('es-CL')}</td>
                  <td>
                    <button className="btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem' }} onClick={() => navigate('/admin/catalogo/mostrar')}>Ver</button>
                    <button className="btn-primary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem', marginLeft: '0.5rem', marginTop: 0 }} onClick={() => navigate('/admin/catalogo/editar')}>Editar</button>
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