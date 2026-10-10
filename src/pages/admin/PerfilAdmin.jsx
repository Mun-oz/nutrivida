import { useAuth } from '../../context/AuthContext';

export default function PerfilAdmin() {
  const { user } = useAuth();
  const adminName = user?.email ? user.email.split('@')[0] : 'Administrador';

  return (
    <>
      <header className="content-header">
        <h2>Mi Perfil</h2>
      </header>
      
      <div className="content-panel top-panel" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ width: '80px', height: '80px', background: '#2e7d32', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1rem auto' }}>
            👤
          </div>
          <h3 style={{ color: '#333', marginBottom: '0.2rem' }}>{adminName.toUpperCase()}</h3>
          <p style={{ color: '#666' }}>{user?.rol === 'admin' ? 'Administrador del Sistema' : 'Usuario'}</p>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); alert('Perfil actualizado'); }}>
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Correo Electrónico (No editable):</label>
            <input type="email" value={user?.email || ''} disabled style={{ width: '100%', padding: '0.8rem', background: '#f0f0f0', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>

          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Nueva Contraseña:</label>
            <input type="password" placeholder="Escribe para cambiar contraseña" style={{ width: '100%', padding: '0.8rem', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '0.8rem', margin: 0 }}>Guardar Cambios</button>
        </form>
      </div>
    </>
  );
}