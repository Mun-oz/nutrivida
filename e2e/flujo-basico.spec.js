import { test, expect } from '@playwright/test';

test.describe('Navegación principal de Clínica Nutrivida', () => {
  
  test('Debe cargar el inicio y permitir ir al Login', async ({ page }) => {
    // 1. El "robot" entra a la página principal
    await page.goto('/');

    // 2. Busca el enlace/botón de "Iniciar Sesión" en la pantalla y le hace clic
    await page.getByRole('link', { name: /Iniciar Sesión/i }).click();

    // 3. Verifica que la URL haya cambiado correctamente a /login
    await expect(page).toHaveURL(/.*\/login/);

    // 4. Verifica que el formulario de login esté visible en la pantalla
    await expect(page.getByRole('heading', { name: /Iniciar Sesión/i })).toBeVisible();
  });

});