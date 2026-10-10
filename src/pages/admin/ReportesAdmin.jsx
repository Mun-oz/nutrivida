export default function ReportesAdmin() {
  return (
    <>
      <header className="content-header">
        <h2>Reportes y Estadísticas</h2>
        <p style={{ color: '#666', margin: 0 }}>Rendimiento mensual de la clínica</p>
      </header>
      
      <div className="content-panel top-panel">
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ flex: '1 1 200px', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #1976d2' }}>
            <h5 style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Citas Atendidas (Mes)</h5>
            <h2 style={{ color: '#1976d2', margin: 0 }}>45</h2>
          </div>
          
          <div style={{ flex: '1 1 200px', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #2e7d32' }}>
            <h5 style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Nuevos Pacientes</h5>
            <h2 style={{ color: '#2e7d32', margin: 0 }}>12</h2>
          </div>

          <div style={{ flex: '1 1 200px', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #f57c00' }}>
            <h5 style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Servicio más popular</h5>
            <h2 style={{ color: '#f57c00', margin: 0, fontSize: '1.2rem', marginTop: '0.5rem' }}>Control Metabólico</h2>
          </div>
        </div>

        <div style={{ padding: '2rem', background: '#ffffff', borderRadius: '8px', border: '1px dashed #ccc', textAlign: 'center', color: '#999' }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>📈</span>
          <h4>Gráfico de Ingresos y Atenciones</h4>
          <p>Módulo de gráficos en construcción. Se implementará en la próxima fase.</p>
        </div>

      </div>
    </>
  );
}