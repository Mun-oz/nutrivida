import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  // Declaramos las variables de estado en lugar de usar variables normales
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  
  // Hook de React Router para redirigir, reemplaza a window.location.href
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página recargue
    setErrorEmail('');

    // Validación de dominios
    const allowedDomains = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    const hasValidDomain = allowedDomains.some(domain => email.endsWith(domain));

    if (!hasValidDomain) {
      setErrorEmail("El correo debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com");
      return; // Detiene la ejecución si hay error
    }

    // Redirección basada en roles
    if (email.endsWith('@profesor.duoc.cl')) {
      navigate('/admin/home');
    } else {
      navigate('/');
    }
  };

  return (
    <main className="container d-block my-5">
      <section className="auth-card mx-auto">
        <h2 className="text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} noValidate>
        
        <div className="form-group">
          {/* Conexión técnica: htmlFor coincide con id */}
          <label htmlFor="emailLogin">Correo Electrónico</label>
          <input 
            id="emailLogin"
            type="email" 
            className="form-control"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="ejemplo@gmail.com" 
          />
          {errorEmail && <span className="error-message">{errorEmail}</span>}
        </div>

        <div className="form-group mt-3">
          <label htmlFor="passwordLogin">Contraseña</label>
          <input 
            id="passwordLogin"
            type="password" 
            className="form-control"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <button type="submit" className="btn btn-success w-100 mt-4 fw-bold">Ingresar</button>
      </form>
    </section>
  </main>
  );
}