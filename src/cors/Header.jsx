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
          {/* Agregamos m-0 para anular el margen que inyecta Bootstrap */}
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
          {/* Agregamos m-0, p-0 y alineación vertical para domar la lista */}
          <ul className="m-0 p-0 d-flex align-items-center">
            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/productos" onClick={() => setIsMenuOpen(false)}>Productos</NavLink></li>
            <li><NavLink to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blogs</NavLink></li>
            <li><NavLink to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</NavLink></li>
          </ul>
        </nav>
        {/* Aseguramos que los enlaces de la derecha también se centren verticalmente */}
        <div className="header-actions d-flex align-items-center">
          <Link to="/login" onClick={() => setIsMenuOpen(false)}>Iniciar sesión</Link>
          <span className="mx-2">|</span>
          <Link to="/registro" onClick={() => setIsMenuOpen(false)}>Registrar usuario</Link>
        </div>
      </div>
    </header>
  )
}