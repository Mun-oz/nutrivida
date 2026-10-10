import { Link, useLocation } from 'react-router';

export default function Gracias() {
  const location = useLocation();
  
  const tipoAccion = location.state?.tipo || 'reserva'; 

  return (
    <main className="container my-5 d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
      <div className="card border-0 shadow-lg p-5 rounded-4 text-center" style={{ maxWidth: '600px' }}>
        
        <div className="mb-4">
          <span style={{ fontSize: '5rem' }}>✅</span>
        </div>
        
        <h1 className="fw-bold text-success mb-3">
          {tipoAccion === 'contacto' ? '¡Mensaje Enviado!' : '¡Reserva Confirmada!'}
        </h1>
        
        <p className="text-muted fs-5 mb-4">
          {tipoAccion === 'contacto' 
            ? 'Hemos recibido tu mensaje correctamente. Nuestro equipo lo revisará y se pondrá en contacto contigo a la brevedad.'
            : 'Hemos agendado tu atención con éxito. En los próximos minutos recibirás un correo electrónico con el comprobante, el enlace de pago y las instrucciones para tu cita.'}
        </p>
        
        <div>
          <Link to="/" className="btn btn-success btn-lg fw-bold rounded-pill px-5 shadow-sm">
            Volver al Inicio
          </Link>
        </div>
        
      </div>
    </main>
  );
}