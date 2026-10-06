import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  // 1. Declaramos las variables de estado en lugar de usar variables normales
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
    <main className="container">
      <section className="auth-card">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} noValidate>
        
        <div className="form-group">
          <label>Correo Electrónico</label>
          {/* value se conecta al estado y onChange lo actualiza en cada tecleo */}
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="ejemplo@gmail.com" 
          />
          {/* Renderizado condicional: solo se muestra el span si errorEmail tiene texto */}
          {errorEmail && <span className="error-message">{errorEmail}</span>}
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        <button type="submit" className="btn-primary">Ingresar</button>
      </form>
    </section>
  </main>
  );
}
