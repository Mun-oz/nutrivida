import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/nutrivida/', 
  
  plugins: [
    react(),
    // Desactiva el compilador solo durante los tests para no afectar la cobertura
    !process.env.VITEST && babel({ presets: [reactCompilerPreset()] })
  ].filter(Boolean), // Filtramos los plugins falsos si process.env.VITEST es true
  
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    include: ['src/**/*.test.{js,jsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/**/*.{js,jsx}'],
      exclude: ['src/**/*.test.{js,jsx}', 'src/test/**', 'src/main.jsx'],
      thresholds: { statements: 80, branches: 80, functions: 80, lines: 80 },
    },
  },
})