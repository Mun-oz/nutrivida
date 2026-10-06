import { useNavigate } from 'react-router';

export default function NuevoUsuarioAdmin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Usuario guardado exitosamente.");
    navigate('/admin/usuario');
  };

  return (
    <>
      <header className="content-header">
        <h2>Registrar Nuevo Usuario</h2>
      </header>
      
      <div className="content-panel top-panel">
        <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', maxWidth: '600px' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="nombreUsuario" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Nombre Completo:</label>
              <input type="text" id="nombreUsuario" placeholder="Ej. Ana Soto" required style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem' }} />
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="emailUsuario" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Correo Electrónico:</label>
              <input type="email" id="emailUsuario" placeholder="ana.soto@correo.cl" required style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem' }} />
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="rolUsuario" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Asignar Rol:</label>
              <select id="rolUsuario" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', background: 'white' }}>
                <option value="paciente">Paciente</option>
                <option value="nutricionista">Nutricionista</option>
                <option value="admin">Administrador</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button type="submit" className="btn-primary" style={{ flex: 1, margin: 0 }}>Guardar Usuario</button>
              <button type="button" className="btn-outline" onClick={() => navigate('/admin/usuario')} style={{ flex: 1, border: '1px solid var(--border-color)', background: 'transparent', padding: '0.8rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', color: 'var(--text-color)' }}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}