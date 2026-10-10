import { useNavigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';

export default function DashboardAdmin() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const adminName = user?.email ? user.email.split('@')[0].toUpperCase() : 'ADMINISTRADOR';

  return (
    <div style={{ padding: '0 2rem 2rem 2rem' }}>
      
      <header className="content-header" style={{ display: 'block', borderBottom: 'none', paddingBottom: 0, paddingLeft: 0 }}>
        <h2 style={{ marginBottom: '0.5rem', fontWeight: '800', color: '#2c3e50' }}>¡Hola, {adminName}! 👋</h2>
        <p style={{ color: '#7f8c8d', fontSize: '1rem', margin: 0 }}>Resumen general de actividad de la clínica</p>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2rem', marginBottom: '2.5rem' }}>
        
        {/* Tarjeta Pacientes */}
        <div style={{ background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)', padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.2rem', boxShadow: '0 4px 15px rgba(46, 125, 50, 0.15)', border: '1px solid #a5d6a7' }}>
          <div style={{ background: '#2e7d32', color: 'white', minWidth: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', boxShadow: '0 4px 10px rgba(46, 125, 50, 0.3)' }}>
            👥
          </div>
          <div>
            <p style={{ color: '#2e7d32', margin: 0, fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.5px' }}>PACIENTES ACTIVOS</p>
            <h3 style={{ margin: '0.2rem 0 0 0', fontSize: '2.2rem', color: '#1b5e20', fontWeight: '900', lineHeight: '1' }}>124</h3>
          </div>
        </div>

        {/* Tarjeta Citas */}
        <div style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.2rem', boxShadow: '0 4px 15px rgba(25, 118, 210, 0.15)', border: '1px solid #90caf9' }}>
          <div style={{ background: '#1976d2', color: 'white', minWidth: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', boxShadow: '0 4px 10px rgba(25, 118, 210, 0.3)' }}>
            📅
          </div>
          <div>
            <p style={{ color: '#1565c0', margin: 0, fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.5px' }}>CITAS DE HOY</p>
            <h3 style={{ margin: '0.2rem 0 0 0', fontSize: '2.2rem', color: '#0d47a1', fontWeight: '900', lineHeight: '1' }}>8</h3>
          </div>
        </div>

        {/* Tarjeta Servicios */}
        <div style={{ background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)', padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1.2rem', boxShadow: '0 4px 15px rgba(245, 124, 0, 0.15)', border: '1px solid #ffcc80' }}>
          <div style={{ background: '#f57c00', color: 'white', minWidth: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', boxShadow: '0 4px 10px rgba(245, 124, 0, 0.3)' }}>
            📋
          </div>
          <div>
            <p style={{ color: '#e65100', margin: 0, fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.5px' }}>SERVICIOS CLÍNICOS</p>
            <h3 style={{ margin: '0.2rem 0 0 0', fontSize: '2.2rem', color: '#bf360c', fontWeight: '900', lineHeight: '1' }}>4</h3>
          </div>
        </div>

      </div>

      <h3 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: '#2c3e50', fontWeight: 'bold' }}>Accesos Rápidos</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
        
        <div style={{ flex: '1 1 300px', background: 'white', padding: '1.2rem 1.5rem', borderRadius: '12px', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '1.2rem', cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }} onClick={() => navigate('/admin/citas')} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.02)';}}>
          <span style={{ fontSize: '2.2rem' }}>📅</span>
          <div>
            <h4 style={{ color: '#2c3e50', fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 'bold' }}>Agenda de Pacientes</h4>
            <p style={{ color: '#7f8c8d', fontSize: '0.9rem', margin: 0 }}>Ver y confirmar reservas</p>
          </div>
        </div>

        <div style={{ flex: '1 1 300px', background: 'white', padding: '1.2rem 1.5rem', borderRadius: '12px', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '1.2rem', cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }} onClick={() => navigate('/admin/catalogo')} onMouseOver={(e) => {e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';}} onMouseOut={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.02)';}}>
          <span style={{ fontSize: '2.2rem' }}>📋</span>
          <div>
            <h4 style={{ color: '#2c3e50', fontSize: '1.1rem', marginBottom: '0.2rem', fontWeight: 'bold' }}>Planes y Servicios</h4>
            <p style={{ color: '#7f8c8d', fontSize: '0.9rem', margin: 0 }}>Actualizar catálogo clínico</p>
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: '1.2rem', marginBottom: '1.2rem', color: '#2c3e50', fontWeight: 'bold' }}>Próximas Citas (Hoy)</h3>
      <div className="content-panel top-panel" style={{ margin: 0, borderRadius: '12px', overflow: 'hidden' }}>
        <div className="table-responsive">
          <table className="admin-table">
            <thead style={{ background: '#f8f9fa' }}>
              <tr>
                <th style={{ padding: '1rem', color: '#2c3e50' }}>Hora</th>
                <th style={{ padding: '1rem', color: '#2c3e50' }}>Paciente</th>
                <th style={{ padding: '1rem', color: '#2c3e50' }}>Servicio</th>
                <th style={{ padding: '1rem', color: '#2c3e50' }}>Modalidad</th>
                <th style={{ padding: '1rem', color: '#2c3e50' }}>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '1rem' }}><strong>10:00 AM</strong></td>
                <td style={{ padding: '1rem' }}>María González</td>
                <td style={{ padding: '1rem' }}>Plan Control Metabólico</td>
                <td style={{ padding: '1rem' }}>Presencial</td>
                <td style={{ padding: '1rem' }}><span style={{ background: '#e8f5e9', color: '#2e7d32', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>Confirmada</span></td>
              </tr>
              <tr>
                <td style={{ padding: '1rem' }}><strong>11:30 AM</strong></td>
                <td style={{ padding: '1rem' }}>Carlos Díaz</td>
                <td style={{ padding: '1rem' }}>Plan Nutrición Deportiva</td>
                <td style={{ padding: '1rem' }}>Telemedicina</td>
                <td style={{ padding: '1rem' }}><span style={{ background: '#fff3e0', color: '#ef6c00', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>Pendiente</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
}