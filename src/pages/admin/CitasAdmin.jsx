import { useNavigate } from 'react-router';

export default function CitasAdmin() {
  const navigate = useNavigate();
  
  // Datos simulados de las citas
  const citas = [
    { id: "C-001", fecha: "Hoy, 10:00", paciente: "María González", servicio: "Control Metabólico", estado: "Confirmada" },
    { id: "C-002", fecha: "Hoy, 11:30", paciente: "Carlos Díaz", servicio: "Nutrición Deportiva", estado: "Pendiente" },
    { id: "C-003", fecha: "Mañana, 09:00", paciente: "Ana Soto", servicio: "Evaluación Inicial", estado: "Confirmada" }
  ];

  return (
    <>
      <header className="content-header">
        <h2>Gestión de Citas y Reservas</h2>
        <button className="btn-primary" style={{ width: 'auto', marginTop: 0 }}>+ Nueva Cita Manual</button>
      </header>
      
      <div className="content-panel top-panel">
        <div className="table-responsive">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID Cita</th>
                <th>Fecha y Hora</th>
                <th>Paciente</th>
                <th>Servicio</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita) => (
                <tr key={cita.id}>
                  <td><strong>{cita.id}</strong></td>
                  <td>{cita.fecha}</td>
                  <td>{cita.paciente}</td>
                  <td>{cita.servicio}</td>
                  <td>
                    <span style={{ 
                      background: cita.estado === 'Confirmada' ? '#e8f5e9' : '#fff3e0', 
                      color: cita.estado === 'Confirmada' ? '#2e7d32' : '#ef6c00', 
                      padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' 
                    }}>
                      {cita.estado}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button className="btn-outline" style={{ padding: '0.3rem 0.8rem', fontSize: '0.85rem', margin: 0, width: 'auto' }}>Ver</button>
                      <button className="btn-primary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.85rem', margin: 0, width: 'auto' }}>Editar</button>
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