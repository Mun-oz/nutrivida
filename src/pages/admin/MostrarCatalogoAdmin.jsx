import { useNavigate } from 'react-router';

export default function MostrarCatalogoAdmin() {
  const navigate = useNavigate();

  return (
    <>
      <header className="content-header">
        <h2>Detalles del Servicio Nutricional</h2>
      </header>
      
      <div className="content-panel top-panel">
        <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', maxWidth: '600px' }}>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Código del Servicio:</label>
            <input type="text" value="CN001" disabled style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', background: '#f0f0f0', color: '#666' }} />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Nombre del Servicio:</label>
            <input type="text" value="Plan Control Metabólico" disabled style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', background: '#f0f0f0', color: '#666' }} />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Precio (CLP):</label>
            <input type="text" value="$45.000" disabled style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', background: '#f0f0f0', color: '#666' }} />
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button type="button" className="btn-primary" onClick={() => navigate('/admin/catalogo')} style={{ width: '100%', margin: 0 }}>Volver a Gestión de Catálogos</button>
          </div>

        </div>
      </div>
    </>
  );
}