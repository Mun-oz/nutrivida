import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { validarRut, validarDominioCorreo } from '../utils/validadores';

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

  // 2. Lógica de validación antes de procesar el registro
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar formato y dígito verificador del RUN
    if (!validarRut(formData.run)) {
      alert("Error: El RUN ingresado no es válido.");
      return; // El return detiene la ejecución inmediatamente
    }

    // Validar dominios de correo permitidos
    if (!validarDominioCorreo(formData.email)) {
      alert("Error: El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com");
      return;
    }

    // Validar longitud de la contraseña
    if (formData.password.length < 4 || formData.password.length > 10) {
      alert("Error: La contraseña debe tener entre 4 y 10 caracteres.");
      return;
    }

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      alert("Error: Las contraseñas no coinciden.");
      return;
    }

    // Si pasa todas las validaciones, es un éxito
    alert("¡Registro exitoso! Redirigiendo a inicio de sesión.");
    navigate('/login');
  };

  return (
    <main className="container d-block my-5">
      <section className="auth-card mx-auto" style={{ maxWidth: '500px' }}>
        <h2 className="text-center mb-4">Crear Cuenta</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group mb-3">
            <label htmlFor="run">RUN (Sin puntos ni guion):</label>
            <input id="run" type="text" name="run" className="form-control" value={formData.run} onChange={handleChange} maxLength="9" required />
          </div>
          
          <div className="form-group mb-3">
            <label htmlFor="nombre">Nombre Completo:</label>
            <input id="nombre" type="text" name="nombre" className="form-control" value={formData.nombre} onChange={handleChange} required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="emailRegistro">Correo Electrónico:</label>
            <input id="emailRegistro" type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="region">Región:</label>
            <select id="region" name="region" className="form-select" value={formData.region} onChange={handleChange} required>
              <option value="">Seleccione una región</option>
              {datosRegiones.map(r => (
                <option key={r.region} value={r.region}>{r.region}</option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="comuna">Comuna:</label>
            <select id="comuna" name="comuna" className="form-select" value={formData.comuna} onChange={handleChange} disabled={!formData.region} required>
              <option value="">Seleccione una comuna</option>
              {comunasDisponibles.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3"> 
            <label htmlFor="direccion">Dirección:</label> 
            <input id="direccion" type="text" name="direccion" className="form-control" value={formData.direccion} onChange={handleChange} placeholder="Ej: Av. Libertador 1234" required /> 
          </div>

          <div className="form-group mb-3">
            <label htmlFor="passwordRegistro">Contraseña:</label>
            <input id="passwordRegistro" type="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input id="confirmPassword" type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold">Registrarse</button>
        </form>
        <p className="auth-redirect mt-3 text-center">¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
      </section>
    </main>
  );
}