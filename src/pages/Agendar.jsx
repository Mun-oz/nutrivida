import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

export default function Agendar() {
  const navigate = useNavigate();
  const location = useLocation();

  const servicioInicial = location.state?.servicioSeleccionado || '';

  const [formData, setFormData] = useState({
    nombre: '', rut: '', email: '', 
    servicio: servicioInicial, 
    modalidad: 'Presencial', 
    fecha: '', hora: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Hora agendada con éxito! Te enviaremos el comprobante y el enlace de pago a tu correo.");
    navigate('/');
  };

  return (
    <main className="container my-5 d-block">
      
      <div className="text-center mb-5 w-100">
        <h2 className="text-success fw-bold">Agendar Servicio</h2>
        <p className="text-muted">Reserva tu hora de atención con nuestros especialistas clínicos.</p>
      </div>

      <div className="row g-4 justify-content-center">
        
        {/* Columna Izquierda: Información de la Clínica */}
        <div className="col-12 col-lg-4 d-flex flex-column gap-3">
          <div className="card border-0 shadow-sm h-100 bg-success text-white rounded-4">
            <div className="card-body p-4 d-flex flex-column justify-content-center">
              <h4 className="fw-bold mb-4">Información Importante</h4>
              
              <div className="mb-4">
                <h6 className="fw-bold">📅 Asistencia</h6>
                <p className="small text-white-50 mb-0">Por favor, preséntate 10 minutos antes de tu hora agendada.</p>
              </div>

              <div className="mb-4">
                <h6 className="fw-bold">❌ Cancelaciones</h6>
                <p className="small text-white-50 mb-0">Si no puedes asistir, anula tu hora con al menos 24 horas de anticipación.</p>
              </div>

              <div className="mb-0">
                <h6 className="fw-bold">💳 Pagos y Previsión</h6>
                <p className="small text-white-50 mb-0">Emitimos boleta para reembolso en Isapre. Aceptamos bonos Fonasa en recepción.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario de Agendamiento */}
        <div className="col-12 col-lg-8">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">
              <form onSubmit={handleSubmit} noValidate>
                
                <h5 className="text-success fw-bold mb-4 border-bottom pb-2">Tus Datos</h5>
                
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="agendarNombre" className="fw-bold mb-1 small text-muted">Nombre Completo:</label>
                    <input id="agendarNombre" name="nombre" type="text" className="form-control bg-light" placeholder="Ej. Juan Pérez" value={formData.nombre} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="agendarRut" className="fw-bold mb-1 small text-muted">RUT:</label>
                    <input id="agendarRut" name="rut" type="text" className="form-control bg-light" placeholder="12345678-9" value={formData.rut} onChange={handleChange} required />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12 form-group">
                    <label htmlFor="agendarEmail" className="fw-bold mb-1 small text-muted">Correo Electrónico:</label>
                    <input id="agendarEmail" name="email" type="email" className="form-control bg-light" placeholder="correo@ejemplo.com" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <h5 className="text-success fw-bold mb-4 border-bottom pb-2">Detalle de la Atención</h5>
                
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="agendarServicio" className="fw-bold mb-1 small text-muted">Servicio a Reservar:</label>
                    <select 
                      id="agendarServicio" 
                      name="servicio" 
                      className="form-select bg-light fw-bold text-success" 
                      value={formData.servicio} 
                      onChange={handleChange} 
                      required 
                      disabled={!!servicioInicial}
                    >
                      {/* LÓGICA DINÁMICA: Si viene del catálogo, crea la opción exacta. Si no, muestra la lista genérica */}
                      {servicioInicial ? (
                        <option value={servicioInicial}>{servicioInicial}</option>
                      ) : (
                        <>
                          <option value="">Seleccione un plan...</option>
                          <option value="Control Metabólico">Plan Control Metabólico</option>
                          <option value="Nutrición Deportiva">Plan Nutrición Deportiva</option>
                          <option value="Transición Vegana">Plan Transición Vegana</option>
                          <option value="Control Seguimiento">Control de Seguimiento</option>
                        </>
                      )}
                    </select>
                    {servicioInicial && <small className="text-muted mt-1 d-block" style={{ fontSize: '0.75rem' }}>* Servicio pre-seleccionado desde el catálogo.</small>}
                  </div>

                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="agendarModalidad" className="fw-bold mb-1 small text-muted">Modalidad:</label>
                    <select id="agendarModalidad" name="modalidad" className="form-select bg-light" value={formData.modalidad} onChange={handleChange} required>
                      <option value="Presencial">Presencial (Clínica Temuco)</option>
                      <option value="Online">Telemedicina (Online)</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6 form-group mb-3 mb-md-0">
                    <label htmlFor="agendarFecha" className="fw-bold mb-1 small text-muted">Fecha:</label>
                    <input id="agendarFecha" name="fecha" type="date" className="form-control bg-light" value={formData.fecha} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="agendarHora" className="fw-bold mb-1 small text-muted">Hora:</label>
                    <input id="agendarHora" name="hora" type="time" className="form-control bg-light" value={formData.hora} onChange={handleChange} required />
                  </div>
                </div>

                <button type="submit" className="btn btn-success w-100 fw-bold py-3 mt-3 shadow-sm rounded-3">Confirmar Reserva</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}