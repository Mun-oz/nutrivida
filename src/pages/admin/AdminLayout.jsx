import { Outlet, useNavigate, useLocation } from 'react-router';
import { useAuth } from '../../context/AuthContext'; 

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth(); 

  const isActive = (path) => location.pathname.includes(path) ? "active" : "";

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-layout admin-body">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <span className="icon">Ø</span> NutriVida
        </div>
        <hr className="sidebar-divider" />
        
        {/* MENÚ ADAPTADO A CLÍNICA NUTRICIONAL */}
        <ul className="sidebar-nav">
          <li className={isActive('/admin/home')} onClick={() => navigate('/admin/home')}>
            <span className="icon">⊞</span> Dashboard
          </li>
          <li className={isActive('/admin/citas')} onClick={() => navigate('/admin/citas')}>
            <span className="icon">📅</span> Gestión de Citas
          </li>
          <li className={isActive('/admin/catalogo')} onClick={() => navigate('/admin/catalogo')}>
            <span className="icon">📋</span> Catálogo de Servicios
          </li>
          <li className={isActive('/admin/usuario')} onClick={() => navigate('/admin/usuario')}>
            <span className="icon">👥</span> Pacientes y Staff
          </li>
          <li className={isActive('/admin/reportes')} onClick={() => navigate('/admin/reportes')}>
            <span className="icon">📊</span> Reportes
          </li>
        </ul>
        
        <div className="sidebar-spacer"></div>
        <ul className="sidebar-nav">
          <li className={isActive('/admin/perfil')} onClick={() => navigate('/admin/perfil')}>
            <span className="icon">👤</span> Mi Perfil
          </li>
          <li onClick={() => navigate('/')}>
            <span className="icon">🌍</span> Ver sitio web
          </li>
          <li onClick={handleLogout}>
            <span className="icon">🚪</span> Cerrar Sesión
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <Outlet /> 
      </main>
    </div>
  );
}