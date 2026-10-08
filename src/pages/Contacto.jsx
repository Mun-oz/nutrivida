import { useState } from 'react';

export default function Contacto() {
  const [mensaje, setMensaje] = useState({ nombre: '', email: '', texto: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.");
    setMensaje({ nombre: '', email: '', texto: '' }); // Limpia el formulario
  };

  return (
    <main className="container contacto-container">
      <section className="mapa-section">
        <h2 style={{ padding: '1rem', color: '#2e7d32', background: 'white', margin: 0 }}>Nuestra Ubicación</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100030.01018698144!2d-72.67568522306232!3d-38.73449303358053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3e5ebcb7729%3A0xe54d193d489b14fc!2sTemuco%2C%20Araucania!5e0!3m2!1sen!2scl!4v1700000000000!5m2!1sen!2scl" 
          width="100%" height="450" style={{ border: 0, display: 'block' }} 
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </section>

      <section className="contacto-form-section">
        <h2>Envíanos un Mensaje</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>Nombre Completo:</label>
            <input type="text" value={mensaje.nombre} onChange={e => setMensaje({...mensaje, nombre: e.target.value})} required />
          </div>
          <div className="form-group">
            <label>Correo Electrónico:</label>
            <input type="email" value={mensaje.email} onChange={e => setMensaje({...mensaje, email: e.target.value})} required />
          </div>
          <div className="form-group">
            <label>Comentario:</label>
            <textarea rows="5" value={mensaje.texto} onChange={e => setMensaje({...mensaje, texto: e.target.value})} required></textarea>
          </div>
          <button type="submit" className="btn-primary">Enviar Mensaje</button>
        </form>
      </section>
    </main>
  );
}