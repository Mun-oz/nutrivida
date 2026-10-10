import { useState } from 'react';

export default function Contacto() {
  const [mensaje, setMensaje] = useState({ nombre: '', email: '', telefono: '', asunto: '', texto: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.");
    setMensaje({ nombre: '', email: '', telefono: '', asunto: '', texto: '' });
  };

  return (
    <main className="container my-5 d-block">
      
      <div className="text-center mb-5 w-100">
        <h2 className="text-success fw-bold">Contacto y Ubicación</h2>
        <p className="text-muted">¿Tienes dudas sobre nuestros planes? Escríbenos o visítanos en nuestra clínica.</p>
      </div>

      <div className="row g-4 align-items-stretch">
        
        {/* Columna Izquierda: Mapa + Info Extra */}
        <div className="col-12 col-md-6 d-flex flex-column gap-3">
          <section className="shadow-sm rounded overflow-hidden border" style={{ height: '350px' }}>
            <h5 className="bg-success text-white p-3 m-0 text-center fw-bold">Nuestra Ubicación</h5>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100030.01018698144!2d-72.67568522306232!3d-38.73449303358053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3e5ebcb7729%3A0xe54d193d489b14fc!2sTemuco%2C%20Araucania!5e0!3m2!1sen!2scl!4v1700000000000!5m2!1sen!2scl" 
              width="100%" 
              height="100%" 
              style={{ border: 0, display: 'block' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </section>

          {/* Tarjetas de Información Adicional */}
          <div className="row g-3 flex-grow-1">
            <div className="col-6">
              <div className="p-3 border rounded bg-white text-center h-100 shadow-sm d-flex flex-column justify-content-center">
                <h5 className="text-success mb-2">📞 Teléfono</h5>
                <p className="mb-0 text-muted fw-bold">+56 9 1234 5678</p>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border rounded bg-white text-center h-100 shadow-sm d-flex flex-column justify-content-center">
                <h5 className="text-success mb-2">🕒 Horario</h5>
                <p className="mb-0 text-muted">Lun a Vie: 09:00 - 18:00 hrs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario Enriquecido */}
        <div className="col-12 col-md-6">
          <section className="card shadow-sm border-0 h-100 w-100">
            <div className="card-body p-4 d-flex flex-column justify-content-center">
              <h4 className="text-center text-success mb-4 fw-bold">Envíanos un Mensaje</h4>
              <form onSubmit={handleSubmit} noValidate>
                
                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="contactoNombre" className="fw-bold mb-1">Nombre Completo:</label>
                    <input id="contactoNombre" type="text" className="form-control" placeholder="Ej. Juan Pérez" value={mensaje.nombre} onChange={e => setMensaje({...mensaje, nombre: e.target.value})} required />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="contactoTelefono" className="fw-bold mb-1">Teléfono:</label>
                    <input id="contactoTelefono" type="tel" className="form-control" placeholder="+56 9..." value={mensaje.telefono} onChange={e => setMensaje({...mensaje, telefono: e.target.value})} required />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="contactoEmail" className="fw-bold mb-1">Correo Electrónico:</label>
                    <input id="contactoEmail" type="email" className="form-control" placeholder="correo@ejemplo.com" value={mensaje.email} onChange={e => setMensaje({...mensaje, email: e.target.value})} required />
                  </div>
                  <div className="col-md-6 form-group mb-3">
                    <label htmlFor="contactoAsunto" className="fw-bold mb-1">Asunto:</label>
                    <select id="contactoAsunto" className="form-select" value={mensaje.asunto} onChange={e => setMensaje({...mensaje, asunto: e.target.value})} required>
                      <option value="">Seleccione...</option>
                      <option value="Dudas sobre planes">Dudas sobre planes</option>
                      <option value="Agendar evaluación">Agendar evaluación</option>
                      <option value="Reclamo o sugerencia">Reclamo o sugerencia</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="contactoTexto" className="fw-bold mb-1">Comentario:</label>
                  <textarea id="contactoTexto" rows="4" className="form-control" placeholder="Escribe aquí tu mensaje..." value={mensaje.texto} onChange={e => setMensaje({...mensaje, texto: e.target.value})} required></textarea>
                </div>

                <button type="submit" className="btn btn-success w-100 fw-bold py-2 mt-auto">Enviar Mensaje</button>
              </form>
            </div>
          </section>
        </div>

      </div>
    </main>
  );
}