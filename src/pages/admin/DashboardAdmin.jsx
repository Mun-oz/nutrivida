import { useNavigate } from 'react-router';

export default function DashboardAdmin() {
  const navigate = useNavigate();

  return (
    <>
      <header className="content-header">
        <h2>¡HOLA Administrador!</h2>
      </header>
      
      <div className="content-panel top-panel" style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ flex: 1, background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/admin/catalogo')}>
          <h3 style={{ color: '#2e7d32', fontSize: '1.5rem', marginBottom: '1rem' }}>📋 Catálogo de Servicios</h3>
          <p style={{ color: '#666' }}>Crear, editar o visualizar los servicios nutricionales ofrecidos.</p>
        </div>

        <div style={{ flex: 1, background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', textAlign: 'center', cursor: 'pointer' }} onClick={() => navigate('/admin/usuario')}>
          <h3 style={{ color: '#2e7d32', fontSize: '1.5rem', marginBottom: '1rem' }}>👥 Usuarios y Pacientes</h3>
          <p style={{ color: '#666' }}>Administrar roles, registrar pacientes y editar perfiles.</p>
        </div>
      </div>
    </>
  );
}