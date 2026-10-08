import { useState } from 'react';
import { Link, NavLink } from 'react-router'; // NavLink te permite saber qué ruta está activa

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <h1>NutriVida</h1>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Si menuOpen es true, se añade la clase 'show' al contenedor */}
      <div className={`nav-container ${menuOpen ? 'show' : ''}`}>
        <nav>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/productos">Productos</NavLink></li>
            <li><NavLink to="/nosotros">Nosotros</NavLink></li>
            <li><NavLink to="/blog">Blogs</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>
        </nav>
        <div className="header-actions">
          <Link to="/login" className="auth-link">Iniciar sesión</Link> | 
          <Link to="/registro" className="auth-link">Registrar usuario</Link>
        </div>
      </div>
    </header>
  );
}