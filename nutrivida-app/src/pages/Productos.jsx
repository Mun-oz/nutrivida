import { useState } from 'react';

// Este arreglo simula los datos en datos_dinamicos.js
const catalogoInicial = [
  { id: "CN001", nombre: "Plan Control Metabólico", duracion: "1 mes", precio: 45000, img: "metabolismo.png" },
  { id: "CN002", nombre: "Plan Nutrición Deportiva", duracion: "1 mes", precio: 50000, img: "nutriciondeporte.jpg" },
  { id: "CN003", nombre: "Plan Transición Vegana", duracion: "1 mes", precio: 40000, img: "t_veg.jpg" }
];

export default function Productos() {
  // Se guarda el catálogo en un estado por si luego se necesita filtrarlo o modificarlo
  const [servicios, setServicios] = useState(catalogoInicial);

  return (
    <main className="container" style={{ flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ color: 'var(--primary-color)' }}>Catálogo de Servicios Clínicos</h2>
      </div>

      <div className="products-grid">
        {/* Aquí se reemplaza el innerHTML por .map() */}
        {servicios.map((servicio) => (
          <div key={servicio.id} className="product-card-home">
            <img src={`/assets/img/${servicio.img}`} alt={servicio.nombre} className="product-img-real" />
            
            <div className="product-info">
              <h4>{servicio.nombre}</h4>
              <p className="attributes">Duración: {servicio.duracion}</p>
              
              {/* Se Formatea el precio automáticamente a pesos chilenos */}
              <p className="price">
                ${servicio.precio.toLocaleString('es-CL')} CLP
              </p>
              
              <button className="btn-primary">Agendar Hora</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}