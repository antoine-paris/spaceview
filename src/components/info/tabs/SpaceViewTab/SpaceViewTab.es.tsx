import InfoLogo from '../../InfoLogo';

export default function SpaceViewTabEs() {
  const ldSoftware = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SpaceView',
    applicationCategory: 'EducationalApplication',
    applicationSubCategory: 'Simulador de astronomía, planificador de astrofotografía',
    operatingSystem: 'Web',
    url: 'https://github.com/antoine-paris/spaceview',
    license: 'https://opensource.org/licenses/MIT',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description:
      'SpaceView es un simulador astronómico 3D en tiempo real y planificador de astrofotografía: Sol, Luna, planetas, fases, libración, proyecciones gran angular (Recti-Panini, estereográfica, ortográfica, rectilineal, cilíndrica), time-lapse, larga exposición, marcos fotográficos y exportación.',
    keywords:
      'simulador celeste, simulador astronómico, astrofotografía, eclipse, fases lunares, time-lapse, Recti-Panini, proyección estereográfica, horizonte, FOV, campo de visión, marcos fotográficos, grabación de video WebM, captura PNG',
    featureList: [
      'Proyecciones fotográficas gran angular: Recti-Panini, estereográfica centrada, ortográfica, rectilineal, cilíndrica',
      'Seguimiento inteligente: Sol, Luna, planetas o direcciones cardinales; alineación horizonte/eclíptica',
      'Renderizado 3D de Luna y planetas (según tamaño aparente): fases precisas, libración, luz cenicienta, orientación del terminador',
      'Time-lapse multiescala: minuto, hora, día, día sideral, mes, ciclos lunares',
      'Larga exposición en tiempo real (apilado): rastros estelares y visualizaciones de órbitas',
      'Opción de ampliación didáctica para FOVs muy grandes',
      'Simulación óptica: sensores, distancias focales equivalentes 24×36, FOV H/V, marcos fotográficos 3:2/16:9',
      'Refracción atmosférica, cuadrícula Alt/Az, eclíptica, marcas locales y direcciones cardinales',
      'Compartir URL (estado completo), exportación PNG, grabación de video .webm',
    ],
  };

  const ldFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿SpaceView es gratuito?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Sí. La aplicación es de código abierto (licencia MIT) y se puede usar gratuitamente en un navegador moderno.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo exportar un video o imagen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Sí. Exportación de imagen (PNG/copiar) y grabación de video en formato .webm directamente desde la interfaz.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Se admiten proyecciones fotográficas gran angular?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Sí. Recti-Panini, estereográfica centrada, ortográfica, rectilineal y cilíndrica, adaptadas para FOVs muy grandes.',
        },
      },
      {
        '@type': 'Question',
        name: '¿La simulación tiene en cuenta la refracción y las fases?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Sí. Refracción atmosférica opcional cerca del horizonte, fases precisas, libración y luz cenicienta.',
        },
      },
    ],
  };

  return (
    <article itemScope itemType="https://schema.org/SoftwareApplication">
      {/* Datos estructurados SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }}
      />

      <h1 itemProp="name">SpaceView.me — Simulador de astrofotografía <br/>(para principiantes)</h1>

      <div className="flex justify-center my-8">
        <InfoLogo size={120} />
      </div>

      <p itemProp="description">
        Visualiza el cielo en tiempo real (Sol, Luna, planetas, estrellas) con fases, tamaños aparentes, libración,
        proyecciones gran angular y herramientas fotográficas. Planifica un eclipse, una salida/puesta, un tránsito o una
        sesión de astrofotografía con precisión y comparte y exporta tus escenas como imagen/video.
      </p>
      <p>
        Gratuito • Código abierto • Sin registro • Funciona en navegador (escritorio/móvil modernos)
      </p>

      <h2>¿Por qué SpaceView?</h2>
      <ul>
        <li>Comprender y explicar visualmente los fenómenos (fases, eclíptica, alturas, libración).</li>
        <li>Preparar tomas creíbles: FOV, sensores, distancias focales, marcos 3:2/16:9, proyecciones adaptadas.</li>
        <li>Crear demostraciones impactantes: time-lapse, larga exposición, exportación de imagen/video y enlace compartible.</li>
      </ul>

      <h2>Funciones innovadoras</h2>
      <ul>
        <li>
          Proyecciones fotográficas gran angular (Recti-Panini, estereográfica, ortográfica, rectilineal, cilíndrica)
          para preservar una representación natural hasta FOVs muy grandes.
        </li>
        <li>
          Seguimiento inteligente de objetos y alineación de marco (horizonte/eclíptica) para comparar fácilmente alturas y
          conjunciones.
        </li>
        <li>
          Renderizado 3D de la Luna con libración, fase, luz cenicienta y orientación del terminador para una enseñanza precisa.
        </li>
        <li>
          Time-lapse multiescala (minuto → ciclos lunares) y larga exposición con apilado para visualizar movimientos
          durante días, meses o años.
        </li>
        <li>
          Simulación óptica completa: sensores, distancia focal equivalente 24×36, FOV H/V, marcos fotográficos 3:2 y marcas 16:9.
        </li>
        <li>
          Física celeste configurable: refracción cerca del horizonte, cuadrícula Alt/Az, eclíptica, marcas locales y direcciones cardinales.
        </li>
        <li>
          Compartir instantáneo por URL (estado completo), captura/copia PNG, grabación de video .webm para compartir tus escenas.
        </li>
      </ul>

      <h2>Casos de uso</h2>
      <ul>
        <li>Preparar un eclipse o constelación planetaria desde una ubicación específica.</li>
        <li>Comparar varias distancias focales y proyecciones para una composición gran angular creíble.</li>
        <li>Mostrar el baile de Venus/Mercurio, las estaciones del Sol o la libración lunar en time-lapse.</li>
        <li>Grabar un time-lapse en formato .webm para una presentación o intercambio didáctico.</li>
      </ul>


      <figure className="m-0 info-content-margins">
        <img
          src="/img/capture/spaceview-application-export-1.png"
          alt="Función de captura y exportación de escenas"
          className="w-full h-auto rounded-md border border-black/10 shadow-sm"
        />
        <figcaption className="text-sm text-gray-500 mt-1">
          Vista desde París del eclipse de 2026 con Mercurio y Júpiter.
        </figcaption>
      </figure>


      <h2>FAQ</h2>
      <div className="info-content-margins">
        <details >
          <summary>¿SpaceView es gratuito?</summary>
          <p>Sí, código abierto bajo licencia MIT, utilizable gratuitamente en un navegador moderno.</p>
        </details>
        <details>
          <summary>¿Puedo exportar un video o imagen?</summary>
          <p>Sí, exportación de imagen (PNG/copiar) y grabación de video .webm integradas.</p>
        </details>
        <details>
          <summary>¿Se admiten proyecciones gran angular?</summary>
          <p>Sí: Recti-Panini, estereográfica centrada, ortográfica, rectilineal, cilíndrica.</p>
        </details>
        <details>
          <summary>¿La simulación incluye refracción y fases?</summary>
          <p>Sí: refracción atmosférica opcional, fases precisas, libración y luz cenicienta.</p>
        </details>
      </div>
      <h2>Código abierto y créditos</h2>
      <p>
        Código fuente: <a href="https://github.com/antoine-paris/spaceview" target="_blank" rel="noopener noreferrer" itemProp="url">GitHub</a> —
        Licencia <span itemProp="license">MIT</span>. Stack: React, TypeScript, Vite, Tailwind, three.js, @react-three/fiber,
        astronomy-engine, Natural Earth, etc.
      </p>

      <div className="text-xs text-gray-400 mt-8 pt-4 border-t border-gray-200 text-center">
        Build: {new Date(__BUILD_DATE__).toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
    </article>
  );
}
