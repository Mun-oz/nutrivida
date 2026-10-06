export default function Nosotros() {
  return (
    <main className="container" style={{ flexDirection: 'column', padding: '2rem 1rem' }}>
      <section style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Sobre NutriVida</h2>
        
        <div style={{ lineHeight: '1.8', color: '#444', textAlign: 'justify' }}>
          <p>
            En <strong>NutriVida</strong>, somos una clínica nutricional comprometida con mejorar la calidad de vida de nuestros pacientes a través de una alimentación consciente, realista y equilibrada.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Nuestro equipo de profesionales especializados te acompaña en cada paso, brindándote planes personalizados que se adaptan a tus necesidades clínicas, deportivas o de transición alimentaria. Creemos que la nutrición no se trata de restricciones, sino de aprender a nutrir tu cuerpo de manera inteligente.
          </p>
        </div>
      </section>
    </main>
  );
}