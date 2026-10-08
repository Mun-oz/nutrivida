import { useNavigate } from 'react-router';

export default function UsuarioAdmin() {
  const navigate = useNavigate();
  
  const usuarios = [
    { nombre: "Juan Pérez", correo: "juan.perez@gmail.com", rol: "Paciente" },
    { nombre: "Ana Soto", correo: "ana.soto@correo.cl", rol: "Nutricionista" }
  ];

  return (
    <>
      <header className="content-header">
        <h2>Gestión de Usuarios</h2>
        <button className="btn-primary" onClick={() => navigate('/admin/usuario/nuevo')} style={{ width: 'auto', marginTop: 0 }}>+ Nuevo Usuario</button>
      </header>
      
      <div className="content-panel top-panel">
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
              {usuarios.map((u, index) => (
                <tr key={index}>
                  <td>{u.nombre}</td>
                  <td>{u.correo}</td>
                  <td>{u.rol}</td>
                  <td>
                    <button className="btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem' }} onClick={() => navigate('/admin/usuario/mostrar')}>Ver</button>
                    <button className="btn-primary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem', marginLeft: '0.5rem', marginTop: 0 }} onClick={() => navigate('/admin/usuario/editar')}>Editar</button>
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