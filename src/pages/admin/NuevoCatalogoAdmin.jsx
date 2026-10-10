import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function NuevoCatalogoAdmin() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    imagen: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const catalogoDb = JSON.parse(localStorage.getItem('nutrivida_catalogo_db')) || [];
    
    const nuevoServicio = {
      ...formData,
      id: `CN-${Date.now().toString().slice(-4)}` // Genera un ID corto automático
    };
    
    catalogoDb.push(nuevoServicio);
    localStorage.setItem('nutrivida_catalogo_db', JSON.stringify(catalogoDb));

    // Redirección inmediata
    navigate('/admin/catalogo', { state: { mensaje: 'Servicio registrado correctamente.' } });
  };

  return (
    <>
      <header className="content-header">
        <h2>Registrar Nuevo Servicio</h2>
      </header>
      
      <div className="content-panel top-panel">
        <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', maxWidth: '600px' }}>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="nombreServicio" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Nombre del Servicio:</label>
              <input type="text" id="nombreServicio" placeholder="Ej. Evaluación Antropométrica" value={formData.nombre} onChange={(e) => setFormData({...formData, nombre: e.target.value})} required style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem' }} />
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="descripcionServicio" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Descripción:</label>
              <textarea id="descripcionServicio" placeholder="Detalla en qué consiste el servicio..." value={formData.descripcion} onChange={(e) => setFormData({...formData, descripcion: e.target.value})} required rows="3" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem', resize: 'vertical' }}></textarea>
            </div>

            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="precioServicio" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>Precio (CLP):</label>
              <input type="number" id="precioServicio" placeholder="Ej. 30000" min="0" value={formData.precio} onChange={(e) => setFormData({...formData, precio: e.target.value})} required style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem' }} />
            </div>
            
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="imagenServicio" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: 'var(--text-color)' }}>URL de la Imagen:</label>
              <input type="url" id="imagenServicio" placeholder="https://ejemplo.com/imagen.jpg" value={formData.imagen} onChange={(e) => setFormData({...formData, imagen: e.target.value})} style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '1rem' }} />
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
              <button type="submit" className="btn-primary" style={{ flex: 1, margin: 0 }}>Guardar Servicio</button>
              <button type="button" className="btn-outline" onClick={() => navigate('/admin/catalogo')} style={{ flex: 1, border: '1px solid var(--border-color)', background: 'transparent', padding: '0.8rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', color: 'var(--text-color)' }}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}