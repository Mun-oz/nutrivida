import { Outlet, useNavigate, useLocation } from 'react-router';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Función para marcar el menú activo automáticamente
  const isActive = (path) => location.pathname.includes(path) ? "active" : "";

  return (
    <div className="dashboard-layout admin-body">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="icon">Ø</span> NutriVida
        </div>
        <hr className="sidebar-divider" />
        <ul className="sidebar-nav">
          <li className={isActive('/admin/home')} onClick={() => navigate('/admin/home')}>
            <span className="icon">⊞</span> Dashboard
          </li>
          <li className={isActive('/admin/catalogo')} onClick={() => navigate('/admin/catalogo')}>
            <span className="icon">📋</span> Gestión de Catálogos
          </li>
          <li className={isActive('/admin/usuario')} onClick={() => navigate('/admin/usuario')}>
            <span className="icon">👥</span> Gestión de Usuarios
          </li>
        </ul>
        <div className="sidebar-spacer"></div>
        <ul className="sidebar-nav">
          <li><span className="icon">⚙️</span> Configuración</li>
          <li onClick={() => navigate('/')}><span className="icon">🌍</span> Ver sitio web</li>
          <li onClick={() => navigate('/login')}><span className="icon">🚪</span> Cerrar Sesión</li>
        </ul>
      </aside>

      {/* Aquí adentro se inyectarán las pantallas dinámicamente */}
      <main className="main-content">
        <Outlet /> 
      </main>
    </div>
  );
}