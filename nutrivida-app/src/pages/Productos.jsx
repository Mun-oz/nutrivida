import { useState } from 'react';

// Este arreglo simula los datos en datos_dinamicos.js
const catalogoInicial = [
  { id: "CN001", nombre: "Plan Control Metabólico",                duracion: "1 mes", precio: 45000, img: "metabolismo.png" },
  { id: "CN002", nombre: "Plan Nutrición Deportiva",               duracion: "1 mes", precio: 50000, img: "nutriciondeporte.jpg" },
  { id: "CN003", nombre: "Plan Transición Vegana",                 duracion: "1 mes", precio: 40000, img: "t_veg.jpg" },
  { id: "CN004", nombre: "Primera consulta nutricional",           duracion: "1 mes", precio: 35000, img: "consulta_nutri.jpg" },
  { id: "CN005", nombre: "Control nutricional (seguimiento)",      duracion: "1 mes", precio: 25000, img: "control_nutri_seg.jpg" },
  { id: "CN006", nombre: "Control nutricional quincenal",          duracion: "1 mes", precio: 22000, img: "control_nutri_seg.jpg" },
  { id: "CN007", nombre: "Teleconsulta nutricional",               duracion: "1 mes", precio: 20000, img: "tele_nutri.jpg" },
  { id: "CN008", nombre: "Consulta de urgencia / reagendada",      duracion: "1 mes", precio: 28000, img: "consulta_reag.png" },
  { id: "PL001", nombre: "Plan pérdida de peso",                   duracion: "1 mes", precio: 65000, img: "perdida_peso.jpg" },
  { id: "PL002", nombre: "Plan pérdida de peso",                   duracion: "3 mes", precio: 170000, img: "perdida_peso.jpg" },
  { id: "PL004", nombre: "Plan control diabetes / hipertensión",   duracion: "1 mes", precio: 75000, img: "control_diab.jpg" },
  { id: "PL005", nombre: "Plan alimentación vegetariana/vegana",   duracion: "1 mes", precio: 68000, img: "t_veg.jpg" },
  { id: "PL006", nombre: "Plan alimentación infantil (2-12 años)", duracion: "1 mes", precio: 65000, img: "ali_infantil.jpg" },
  { id: "EV001", nombre: "Antropometría completa",                 duracion: "1 mes", precio: 18000, img: "antropometria.jpg" },
  { id: "EV002", nombre: "Bioimpedanciometría",                    duracion: "1 mes", precio: 12000, img: "bio.png" },
  { id: "EV003", nombre: "Encuesta de hábitos alimentarios",       duracion: "1 mes", precio: 10000, img: "encuesta.jpg" },
  { id: "EV004", nombre: "Análisis de exámenes de laboratorio",    duracion: "1 mes", precio: 15000, img: "ex_lab.jpg" },
  { id: "TG001", nombre: "Taller de alimentación saludable",       duracion: "1 mes", precio: 15000, img: "ali_salud.jpg" },
  { id: "TG002", nombre: "Taller de cocina nutritiva",             duracion: "1 mes", precio: 20000, img: "taller_sal.jpg" },
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