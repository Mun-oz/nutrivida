import { NavLink, Link } from 'react-router'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <h1 className="m-0">NutriVida</h1>
        </Link>
      </div>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-container ${isMenuOpen ? 'show' : ''}`}>
        <nav>
          {/* Cambiamos gap-md-0 por gap-md-4 para darles espacio en pantallas grandes */}
          <ul className="m-0 p-0 d-flex flex-column flex-md-row align-items-center gap-3 gap-md-4">
            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/productos" onClick={() => setIsMenuOpen(false)}>Productos</NavLink></li>
            <li><NavLink to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blogs</NavLink></li>
            <li><NavLink to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</NavLink></li>
          </ul>
        </nav>
        
        {/* Añadimos ms-md-4 para separar el bloque de botones del menú principal en PC */}
        <div className="header-actions d-flex flex-column flex-md-row align-items-center mt-4 mt-md-0 ms-md-4">
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Iniciar sesión</Link>
          
          <span className="mx-2 d-none d-md-inline">|</span>
          
          <Link to="/registro" className="mt-2 mt-md-0" onClick={() => setIsMenuOpen(false)}>Registrar usuario</Link>
        </div>
      </div>
    </header>
  )
}