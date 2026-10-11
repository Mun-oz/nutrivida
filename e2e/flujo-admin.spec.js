import { test, expect } from '@playwright/test';

test.describe('Flujo Completo de Administrador', () => {
  
  test('Inicia sesión, verifica el dashboard y cierra sesión', async ({ page }) => {
    // 1. Entramos al inicio
    await page.goto('/');

    // Inyectamos un usuario administrador directamente en el LocalStorage
    // del navegador de Playwright para que la validación de tu Login funcione.
    await page.evaluate(() => {
      localStorage.setItem('nutrivida_usuarios_db', JSON.stringify([
        { 
          id: 'admin1', 
          nombre: 'Profesor', 
          correo: 'profesor@profesor.duoc.cl', 
          contrasena: 'admin123', 
          rol: 'Administrador' 
        }
      ]));
    });

    // 2. Vamos al login
    await page.getByRole('link', { name: /Iniciar Sesión/i }).click();

    // 3. Llenamos el formulario
    await page.locator('input[type="email"]').fill('profesor@profesor.duoc.cl');
    await page.locator('input[type="password"]').fill('admin123');
    
    // 4. Clic en ingresar
    await page.getByRole('button', { name: /Ingresar|Iniciar/i }).click();

    // 5. Verificamos que nos redirigió. 
    await expect(page).toHaveURL(/.*admin.*/);

    // 6. Verificamos que cargó el panel buscando el texto "Cerrar Sesión" en lugar del rol "button"
    const btnCerrarSesion = page.getByText(/Cerrar Sesión/i);
    await expect(btnCerrarSesion).toBeVisible();

    // 7. Salimos
    await btnCerrarSesion.click();
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });

});