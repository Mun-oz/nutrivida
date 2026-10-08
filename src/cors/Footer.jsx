export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-info">
        <p>
          📍 Ubicación: <a href="https://www.google.com/maps/search/?api=1&query=Temuco,+Región+de+La+Araucanía" target="_blank" rel="noopener noreferrer" className="map-link">Temuco, Región de La Araucanía</a>
        </p>
        <p>📧 Correo: contacto@nutrivida.cl</p>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2026 NutriVida - Clínica Nutricional. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}