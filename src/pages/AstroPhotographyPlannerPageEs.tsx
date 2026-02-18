import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageFromPath } from '../hooks/useLanguageFromPath';
import InfoLogo from '../components/info/InfoLogo';

export default function AstroPhotographyPlannerPageEs() {
  useLanguageFromPath();

  // SEO metadata
  React.useEffect(() => {
    const title = "Planificador de Astrofotografía - SpaceView.me | Ajustes de Cámara y Herramienta de Planificación del Cielo";
    const description = "Planifica tus sesiones de astrofotografía con cálculos precisos del cielo, simulación de ajustes de cámara y cronometraje óptimo para eventos celestiales. Perfecto para fotografía de cielo profundo y planetaria.";

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', description);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    // Structured data for this specific tool
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Planificador de Astrofotografía",
      "description": description,
      "url": window.location.href,
      "applicationCategory": "EducationalApplication",
      "inLanguage": "es",
      "featureList": [
        "Simulación de cámara y lente",
        "Cálculos de campo de visión",
        "Predicciones de cronometraje óptimo",
        "Evaluación de oscuridad del cielo",
        "Planificación de visibilidad de objetivos",
        "Recomendaciones de equipo",
        "Planificación de sesiones"
      ],
      "isPartOf": {
        "@type": "WebApplication",
        "name": "SpaceView.me",
        "url": "https://spaceview.me"
      }
    };

    let script = document.getElementById('astrophoto-jsonld-es') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'astrophoto-jsonld-es';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);

    return () => {
      document.title = "SpaceView.me";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <InfoLogo showBackground={false} size={64} />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold">Planificador de Astrofotografía</span>
              <span className="text-xs text-gray-600">SpaceView.me</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              to="/es/info"
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Información
            </Link>
            <Link
              to="/es?start=true"
              className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Abrir el Planificador
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article>
          <header className="mb-8">
            <nav className="text-sm text-gray-500 mb-4">
              <Link to="/es" className="hover:text-blue-600">SpaceView.me</Link>
              <span className="mx-2">›</span>
              <span>Planificador de Astrofotografía</span>
            </nav>
            <h1 className="text-3xl font-bold mb-4">Planificador de Astrofotografía y Calculadora de Sesiones</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Planifica sesiones de astrofotografía perfectas con cálculos precisos del cielo, simulación de cámara y predicciones de cronometraje óptimo.
              Desde tomas gran angular de la Vía Láctea hasta imágenes planetarias detalladas.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">📷 Simulación de Equipo</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Cálculos de campo de visión de cámara y lente</li>
                <li>• Recomendaciones de distancia focal por objetivo</li>
                <li>• Consideraciones de tamaño de sensor y factor de recorte</li>
                <li>• Superposición de marco de foto para composición</li>
                <li>• Requisitos de montura de seguimiento</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-3 text-purple-600">🌌 Condiciones del Cielo</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Evaluación de fase lunar e interferencias</li>
                <li>• Ventanas de oscuridad óptimas</li>
                <li>• Altitud y visibilidad de objetivos</li>
                <li>• Factores de transparencia atmosférica</li>
                <li>• Cálculo de mejores horas de imagen</li>
              </ul>
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Flujo de Trabajo de Planificación Fotográfica</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h3 className="font-semibold mb-2">Elegir el Objetivo</h3>
                <p className="text-sm text-gray-600">Selecciona los objetos celestiales o eventos a fotografiar</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h3 className="font-semibold mb-2">Definir el Equipo</h3>
                <p className="text-sm text-gray-600">Configura tu cámara, lente y telescopio</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h3 className="font-semibold mb-2">Planificar el Cronometraje</h3>
                <p className="text-sm text-gray-600">Encuentra las fechas y horas óptimas para tu sesión</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <h3 className="font-semibold mb-2">Capturar y Compartir</h3>
                <p className="text-sm text-gray-600">Ejecuta tu plan y comparte los resultados</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ejemplos de Astrofotografía Destacados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to="/es?tl=-teqghl.s6l39p&lp=5xc&l=3110876&t=s793kh&F=9&p=0&d=VM&z=vm173&b=9hec&pl=a&sr=-6.9833&da=34.73&dh=89.9"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-blue-600 mb-2">🌌 Fotografía de la Vía Láctea</h3>
                <p className="text-sm text-gray-600">Configuración gran angular para capturar el centro galáctico</p>
              </Link>
              <Link
                to="/es?tl=uit0jk.tp0z3k&lp=5xc&l=5128581&t=tp0zab&F=1&p=5&d=nikon-p1000&z=p1000-2000eq&b=5z03&pl=a&sr=0.0167"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-red-600 mb-2">🌕 Primeros Planos Lunares</h3>
                <p className="text-sm text-gray-600">Configuración de lente telefoto para tomas lunares detalladas</p>
              </Link>
              <Link
                to="/es?tl=1iit.usgh40&lp=5xc&l=2988507&t=wad7s0&F=0&p=0&d=custom&k=1&f=1&b=5z2d&pl=a&sr=214.852"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-orange-600 mb-2">🪐 Imagen Planetaria</h3>
                <p className="text-sm text-gray-600">Configuración de alta magnificación para fotografía de planetas</p>
              </Link>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Tipos de Fotografía y Técnicas</h2>
            <div className="space-y-6">

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Fotografía de Cielo Profundo</h3>
                <p className="text-gray-700 mb-2">
                  Captura nebulosas, galaxias y cúmulos de estrellas con técnicas de larga exposición.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Ubicaciones de cielo oscuro y evitación de la luna</li>
                  <li>Requisitos de montura de seguimiento y alineación polar</li>
                  <li>Apilamiento de múltiples exposiciones y procesamiento</li>
                  <li>Recomendaciones de filtros (L-RGB, banda estrecha)</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg mb-2 text-red-600">Lunar y Planetaria</h3>
                <p className="text-gray-700 mb-2">
                  Imagen de alta resolución de objetos del sistema solar con cronometraje preciso.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Cronometraje óptimo de oposición y conjunción</li>
                  <li>Consideraciones de visión atmosférica y turbulencia</li>
                  <li>Técnicas de captura de video e imagen afortunada</li>
                  <li>Cálculos de lente de Barlow y relación focal</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg mb-2 text-purple-600">Astrofotografía Gran Angular</h3>
                <p className="text-gray-700 mb-2">
                  Astrofotografía de paisaje combinando elementos de primer plano y cielo.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Planificación de composición con elementos de primer plano</li>
                  <li>Apilamiento de enfoque y mezcla de exposición</li>
                  <li>Posicionamiento de la Vía Láctea y ventanas de visibilidad</li>
                  <li>Evaluación y mitigación de contaminación lumínica</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Base de Datos de Equipo</h2>
            <p className="text-gray-700 mb-4">
              SpaceView incluye una amplia base de datos de cámaras, lentes y telescopios con especificaciones precisas:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-green-600">📷 Cámaras</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cámaras réflex y sin espejo</li>
                  <li>• Cámaras de astronomía dedicadas</li>
                  <li>• Especificaciones y características de sensor</li>
                  <li>• Rendimiento de ruido y sensibilidad</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-blue-600">🔭 Lentes y Telescopios</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Lentes gran angular a súper telefoto</li>
                  <li>• Telescopios refractores, reflectores y SCT</li>
                  <li>• Combinaciones de distancia focal y apertura</li>
                  <li>• Cálculos de campo de visión</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-600">🎛️ Accesorios</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Monturas de seguimiento y rastreadores de estrellas</li>
                  <li>• Filtros y reducción de contaminación lumínica</li>
                  <li>• Lentes de Barlow y reductores focales</li>
                  <li>• Sistemas de autoguiado</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              to="/es?start=true"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
            >
              Comenzar la Planificación de Tu Sesión
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Gratis • Sin registro requerido • Funciona en tu navegador
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              © 2025 SpaceView.me - Simulador astronómico de código abierto
            </div>
            <div className="flex gap-4 text-sm">
              <Link to="/es/info/help" className="text-gray-600 hover:text-blue-600">Ayuda</Link>
              <Link to="/es/info/contact" className="text-gray-600 hover:text-blue-600">Contacto</Link>
              <a href="https://github.com/antoine-paris/spaceview" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
