import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

export default function UsuarioAdmin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [usuarios, setUsuarios] = useState([]);
  
  // Atrapamos el mensaje si venimos de guardar/editar
  const [notificacion, setNotificacion] = useState(location.state?.mensaje || null);

  // Efecto para desaparecer la notificación a los 3 segundos
  useEffect(() => {
    if (notificacion) {
      window.history.replaceState({}, ''); // Limpiamos el historial para que no reaparezca al recargar
      const timer = setTimeout(() => setNotificacion(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notificacion]);

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem('nutrivida_usuarios_db'));
    if (datosGuardados && datosGuardados.length > 0) {
      setUsuarios(datosGuardados);
    } else {
      const datosIniciales = [
        { id: 1, nombre: "Juan Pérez", correo: "juan.perez@gmail.com", rol: "Paciente" },
        { id: 2, nombre: "Ana Soto", correo: "ana.soto@correo.cl", rol: "Nutricionista" }
      ];
      setUsuarios(datosIniciales);
      localStorage.setItem('nutrivida_usuarios_db', JSON.stringify(datosIniciales));
    }
  }, []);

  return (
    <>
      <header className="content-header">
        <h2>Gestión de Usuarios</h2>
        <button className="btn-primary" onClick={() => navigate('/admin/usuario/nuevo')} style={{ width: 'auto', marginTop: 0 }}>+ Nuevo Usuario</button>
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
                <th>Nombre Completo</th>
                <th>Correo Electrónico</th>
                <th>Rol Actual</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id}>
                  <td>{u.nombre}</td>
                  <td>{u.correo}</td>
                  <td>{u.rol}</td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <button className="btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem', width: 'auto', margin: 0, borderRadius: '4px', cursor: 'pointer' }} onClick={() => navigate('/admin/usuario/mostrar', { state: { usuario: u } })}>Ver</button>
                      <button className="btn-primary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem', width: 'auto', margin: 0, borderRadius: '4px', cursor: 'pointer' }} onClick={() => navigate('/admin/usuario/editar', { state: { usuario: u } })}>Editar</button>
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