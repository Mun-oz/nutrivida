import { NavLink, Link, useNavigate } from 'react-router'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { user, logout } = useAuth(); 
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate('/'); 
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
          <ul className="m-0 p-0 d-flex flex-column flex-md-row align-items-center gap-3 gap-md-4">
            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/productos" onClick={() => setIsMenuOpen(false)}>Productos</NavLink></li>
            <li><NavLink to="/nosotros" onClick={() => setIsMenuOpen(false)}>Nosotros</NavLink></li>
            <li><NavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blogs</NavLink></li>
            <li><NavLink to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</NavLink></li>
          </ul>
        </nav>
        
        <div className="header-actions d-flex flex-column flex-md-row align-items-center mt-4 mt-md-0 ms-md-4">
          {user ? (
            <div className="d-flex flex-column flex-md-row align-items-center gap-3">
              <span className="text-white fw-bold d-none d-md-block m-0" style={{ fontSize: '0.95rem' }}>
                Hola, {user.email.split('@')[0]}
              </span>
              
              <button 
                onClick={handleLogout} 
                className="btn btn-outline-light btn-sm rounded-pill px-3 fw-bold"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}