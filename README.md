# 🍏 Clínica Nutrivida - Plataforma Nutricional y Agendamiento

## 📝 Descripción
Plataforma web (Single Page Application - SPA) desarrollada para la Clínica Nutrivida. Este sistema centraliza la oferta de servicios nutricionales, permitiendo a los pacientes explorar el catálogo clínico y agendar horas médicas. Además, incluye un módulo administrativo seguro para la gestión de citas y visualización de métricas en tiempo real.

## 🚀 Tecnologías Utilizadas
El proyecto ha sido migrado de una base estática a un ecosistema React moderno, robusto y testeado:

*   **Frontend:** React (SPA), Vite.
*   **Enrutamiento:** React Router (HashRouter).
*   **Estilos:** CSS3 / Diseño Responsivo.
*   **Testing E2E:** Playwright (Pruebas de Aceptación y "Mega Flujos").
*   **Testing Unitario/Integración:** Vitest (Cobertura >80% global).

## ⚙️ Instalación y Configuración Local
1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install

## 🧪 Pruebas Automatizadas (QA)
Este proyecto incluye una estricta suite de pruebas para garantizar su fiabilidad:

*   **Pruebas Unitarias (Vitest):** Validación de lógica, estados y componentes aislados. Para ejecutar el reporte de cobertura:
    ```bash
    npm run test:coverage
    ```
*   **Pruebas End-to-End (Playwright):** Simulación de flujos completos de pacientes y administradores. Para abrir la interfaz de UI:
    ```bash
    npm run test:e2e:ui
    ```


## 🛠️ Requisitos Funcionales Implementados
1.  **Autenticación y Roles (RF-01):** Acceso protegido mediante `AuthContext` y rutas privadas para el rol de administrador.
2.  **Catálogo de Servicios (RF-02):** Visualización detallada de planes nutricionales y médicos.
3.  **Agendamiento de Citas (RF-03):** Formulario dinámico para la reserva de horas con validaciones.
4.  **Filtrado por Categorías (RF-04):** Sistema de categorización y ofertas.
5.  **Dashboard Administrativo (RF-05):** Panel de métricas con cálculo en tiempo real de pacientes y citas.
6.  **Confirmación Dinámica (RF-06):** Intercepción de sesión para confirmar operaciones críticas (Pantalla de "Reserva Confirmada").


