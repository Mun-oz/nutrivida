import { useNavigate } from 'react-router';

export default function EditarUsuarioAdmin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Rol actualizado exitosamente.");
    navigate('/admin/usuario');
  };

  return (
    <>
      <header className="content-header">
        <h2>Modificar Rol de Usuario</h2>
      </header>
      
      <div className="content-panel top-panel">
        <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', maxWidth: '600px' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Usuario Seleccionado:</label>
              <input type="text" value="Juan Pérez" disabled style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', background: '#f0f0f0', color: '#666' }} />
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Correo Electrónico:</label>
              <input type="email" value="juan.perez@gmail.com" disabled style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', background: '#f0f0f0', color: '#666' }} />
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="nuevoRol" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Asignar Nuevo Rol:</label>
              <select id="nuevoRol" defaultValue="paciente" style={{ width: '100%', padding: '0.8rem', border: '2px solid var(--primary-color)', borderRadius: '4px', fontSize: '1rem', background: 'white', cursor: 'pointer' }}>
                <option value="paciente">Paciente</option>
                <option value="nutricionista">Nutricionista</option>
                <option value="admin">Administrador</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button type="submit" className="btn-primary" style={{ flex: 1, margin: 0 }}>Actualizar Rol</button>
              <button type="button" className="btn-outline" onClick={() => navigate('/admin/usuario')} style={{ flex: 1, border: '1px solid var(--border-color)', background: 'transparent', padding: '0.8rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', color: 'var(--text-color)' }}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}