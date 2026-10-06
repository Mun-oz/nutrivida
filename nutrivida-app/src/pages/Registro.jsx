import { useState } from 'react';
import { useNavigate, Link } from 'react-router';

const datosRegiones = [
  { region: "Región Metropolitana", comunas: ["Santiago", "Providencia", "Maipú"] },
  { region: "Región de La Araucanía", comunas: ["Temuco", "Padre Las Casas", "Villarrica"] }
];

export default function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    run: '', nombre: '', apellidos: '', email: '',
    fechaNacimiento: '', region: '', comuna: '', 
    direccion: '', password: '', confirmPassword: ''
  });
  const [comunasDisponibles, setComunasDisponibles] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'region') {
      const regionSeleccionada = datosRegiones.find(r => r.region === value);
      setComunasDisponibles(regionSeleccionada ? regionSeleccionada.comunas : []);
      setFormData(prev => ({ ...prev, region: value, comuna: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    alert("¡Registro exitoso! Redirigiendo a inicio de sesión.");
    navigate('/login');
  };

  return (
    <main className="container">
      <section className="auth-card">
        <h2>Crear Cuenta</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>RUN (Sin puntos ni guion):</label>
            <input type="text" name="run" value={formData.run} onChange={handleChange} maxLength="9" required />
          </div>
          
          <div className="form-group">
            <label>Nombre Completo:</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Correo Electrónico:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Región:</label>
            <select name="region" value={formData.region} onChange={handleChange} required>
              <option value="">Seleccione una región</option>
              {datosRegiones.map(r => (
                <option key={r.region} value={r.region}>{r.region}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Comuna:</label>
            <select name="comuna" value={formData.comuna} onChange={handleChange} disabled={!formData.region} required>
              <option value="">Seleccione una comuna</option>
              {comunasDisponibles.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Contraseña:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Confirmar Contraseña:</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn-primary">Registrarse</button>
        </form>
        <p className="auth-redirect">¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
      </section>
    </main>
  );
}