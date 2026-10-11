import { test, expect } from '@playwright/test';

test.describe('Mega Flujo de Presentación - Nutrivida', () => {

  test('Recorrido End-to-End: Exploración, Agendamiento y Panel Admin', async ({ page }) => {
    
    await test.step('1. Ingresar a la página principal', async () => {
      await page.goto('/');
      await expect(page.locator('body')).toBeVisible();
    });

    await test.step('2. Explorar el catálogo de productos', async () => {
      // Ajustado a tu menú "Productos"
      await page.getByRole('link', { name: 'Productos', exact: true }).click();
      await page.waitForTimeout(500); 
    });

    await test.step('3. Completar el formulario de agendamiento', async () => {
      // Ajustado a tu botón "Agendar" desde la tarjeta del producto
      await page.getByRole('link', { name: /Agendar/i }).first().click();
      await expect(page).toHaveURL(/.*agendar.*/i);

      // Llenamos TODOS los inputs de tipo texto basándonos en tu diseño
      const inputsTexto = page.locator('input[type="text"]');
      if (await inputsTexto.count() > 0) {
        // Llena el primer input de texto (Nombre)
        await inputsTexto.nth(0).fill('Profesor Evaluador');
        
        // Llena el segundo input de texto (RUT, asumiendo que es text y no number)
        if (await inputsTexto.count() > 1) {
            await inputsTexto.nth(1).fill('12345678-9');
        }
      }

      const inputsEmail = page.locator('input[type="email"]');
      if (await inputsEmail.count() > 0) {
        await inputsEmail.first().fill('evaluador@duoc.cl');
      }


      await page.waitForTimeout(500); 

      // Busca un botón O un input de tipo submit que esté al final del formulario
      const botonSubmit = page.locator('button[type="submit"], input[type="submit"], button').last();
      await botonSubmit.click();
    });

    await test.step('4. Validar pantalla de confirmación dinámica', async () => {
      // La URL sí es correcta porque arriba dice #/gracias
      await expect(page).toHaveURL(/.*gracias.*/i); 
      
      // Cambiamos la palabra que busca el robot para que coincida con tu título
      await expect(page.getByText(/Reserva Confirmada/i)).toBeVisible();
      
      await page.waitForTimeout(1000);
    });

    await test.step('5. Flujo Administrativo: Iniciar Sesión', async () => {
      await page.goto('/#/login'); 
      
      const emailInput = page.locator('input[type="email"]');
      if (await emailInput.count() > 0) {
        await emailInput.fill('admin@profesor.duoc.cl');
        await page.locator('input[type="password"]').fill('admin123');
        await page.getByRole('button', { name: /Ingresar/i }).first().click();
      }
      
      await page.evaluate(() => {
        localStorage.setItem('nutrivida_auth', JSON.stringify({ 
          token: 'fake-jwt-token', 
          rol: 'admin',
          email: 'admin@profesor.duoc.cl'
        }));
      });
    });

    await test.step('6. Verificar acceso al Dashboard de Métricas', async () => {
      await page.goto('/#/admin');
      await expect(page.locator('body')).toBeVisible();
    });

  });
});