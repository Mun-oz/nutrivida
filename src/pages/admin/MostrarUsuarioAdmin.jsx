import { useNavigate, useLocation, Navigate } from 'react-router';

export default function MostrarUsuarioAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Atrapamos el usuario que viene en el viaje
  const usuario = location.state?.usuario;

  // Si alguien entra por URL directa sin seleccionar usuario, se devuelve
  if (!usuario) return <Navigate to="/admin/usuario" replace />;

  return (
    <>
      <header className="content-header">
        <h2>Detalles del Usuario</h2>
      </header>
      
      <div className="content-panel top-panel">
        <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', maxWidth: '600px' }}>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>ID del Sistema:</label>
            <input type="text" value={usuario.id} disabled style={{ width: '100%', padding: '0.8rem', background: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nombre Completo:</label>
            <input type="text" value={usuario.nombre} disabled style={{ width: '100%', padding: '0.8rem', background: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Correo Electrónico:</label>
            <input type="text" value={usuario.correo} disabled style={{ width: '100%', padding: '0.8rem', background: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Rol Asignado:</label>
            <input type="text" value={usuario.rol} disabled style={{ width: '100%', padding: '0.8rem', background: '#f0f0f0', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button type="button" className="btn-primary" onClick={() => navigate('/admin/usuario')} style={{ width: '100%', margin: 0 }}>Volver a Gestión de Usuarios</button>
          </div>
        </div>
      </div>
    </>
  );
}