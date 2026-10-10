export default function Footer() {
  return (
    // Reducimos el padding vertical a py-3 para hacerlo más delgado
    <footer className="bg-dark text-white py-3 mt-auto w-100 d-block">
      {/* Usamos container-fluid con px-5 para que ocupe todo el ancho pero con margen a los bordes */}
      <div className="container-fluid px-4 px-lg-5">
        <div className="row align-items-center text-center text-md-start">
          
          {/* Columna Izquierda: Logo y contacto, alineados a la izquierda */}
          <div className="col-md-4 mb-2 mb-md-0 d-flex flex-column justify-content-center">
            <h5 className="text-success fw-bold m-0 mb-1">NutriVida</h5>
            <small className="text-white-50 lh-sm">
              📍 Temuco, Región de La Araucanía <br/>
              📧 contacto@nutrivida.cl
            </small>
          </div>

          {/* Columna Central: Copyright, perfectamente al centro */}
          <div className="col-md-4 mb-2 mb-md-0 d-flex align-items-center justify-content-center">
            <small className="text-white-50 m-0">
              &copy; {new Date().getFullYear()} NutriVida. Todos los derechos reservados.
            </small>
          </div>

          {/* Columna Derecha: Enlaces Legales, pegados a la derecha */}
          <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
            <a href="#" className="text-white-50 text-decoration-none mx-2 small">Términos</a>
            <span className="text-white-50">|</span>
            <a href="#" className="text-white-50 text-decoration-none mx-2 small">Privacidad</a>
          </div>

        </div>
      </div>
    </footer>
  );
}