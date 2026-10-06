import { useNavigate } from 'react-router';

export default function DashboardAdmin() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-layout admin-body">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="icon">Ø</span> NutriVida
        </div>
        <hr className="sidebar-divider" />
        <ul className="sidebar-nav">
          <li className="active"><span className="icon">⊞</span> Dashboard</li>
          <li><span className="icon">📋</span> Gestión de Catálogos</li>
          <li><span className="icon">👥</span> Gestión de Usuarios</li>
        </ul>
        <div className="sidebar-spacer"></div>
        <ul className="sidebar-nav">
          <li><span className="icon">⚙️</span> Configuración</li>
          <li onClick={() => navigate('/')}><span className="icon">🌍</span> Ver sitio web</li>
          <li onClick={() => navigate('/login')}><span className="icon">🚪</span> Cerrar Sesión</li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <h2>¡HOLA Administrador!</h2>
        </header>
        
        <div className="content-panel top-panel" style={{ display: 'flex', gap: '2rem' }}>
          <div style={{ flex: 1, background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
            <h3 style={{ color: '#2e7d32', fontSize: '1.5rem', marginBottom: '1rem' }}>📋 Catálogo de Servicios</h3>
            <p style={{ color: '#666' }}>Crear, editar o visualizar los servicios nutricionales ofrecidos.</p>
          </div>

          <div style={{ flex: 1, background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
            <h3 style={{ color: '#2e7d32', fontSize: '1.5rem', marginBottom: '1rem' }}>👥 Usuarios y Pacientes</h3>
            <p style={{ color: '#666' }}>Administrar roles, registrar pacientes y editar perfiles.</p>
          </div>
        </div>
      </main>
    </div>
  );
}