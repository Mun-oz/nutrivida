import { useState } from 'react';

export default function Agendar() {
  const [reserva, setReserva] = useState({ servicio: '1', fecha: '', hora: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cita agendada para el ${reserva.fecha} a las ${reserva.hora}.`);
  };

  return (
    <main className="container">
      <section className="auth-card" style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <h2>Agendar tu Cita</h2>
        <p style={{ textAlign: 'center', color: '#666', marginBottom: '1.5rem' }}>Selecciona el servicio, la fecha y el horario de tu preferencia.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Servicio a agendar:</label>
            <select value={reserva.servicio} onChange={e => setReserva({...reserva, servicio: e.target.value})} style={{ padding: '0.7rem', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
              <option value="1">Evaluación Nutricional Inicial</option>
              <option value="2">Control Nutricional Mensual</option>
              <option value="3">Nutrición Deportiva</option>
              <option value="4">Asesoría Transición Vegana</option>
            </select>
          </div>

          <div className="form-group">
            <label>Selecciona el día:</label>
            <input type="date" value={reserva.fecha} onChange={e => setReserva({...reserva, fecha: e.target.value})} required />
          </div>

          <div className="form-group">
            <label>Selecciona la hora:</label>
            <input type="time" min="09:00" max="18:00" value={reserva.hora} onChange={e => setReserva({...reserva, hora: e.target.value})} required />
          </div>

          <button type="submit" className="btn-primary" style={{ marginTop: '1rem' }}>Confirmar Reserva</button>
        </form>
      </section>
    </main>
  );
}