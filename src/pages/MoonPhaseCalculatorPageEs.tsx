import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageFromPath } from '../hooks/useLanguageFromPath';
import InfoLogo from '../components/info/InfoLogo';

export default function MoonPhaseCalculatorPageEs() {
  useLanguageFromPath();

  // SEO metadata
  React.useEffect(() => {
    const title = "Calculadora de Fases Lunares - SpaceView.me | Calendario Lunar y Predictor de Fases";
    const description = "Calcula las fases lunares precisas, crea calendarios lunares y rastrea la posición de la Luna para cualquier fecha y ubicación. Simulador interactivo de fases lunares con libración y cálculos de tamaño aparente.";

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', description);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    // Structured data for this specific tool
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Calculadora de Fases Lunares",
      "description": description,
      "url": window.location.href,
      "applicationCategory": "EducationalApplication",
      "inLanguage": "es",
      "featureList": [
        "Predicción de fases lunares",
        "Generación de calendario lunar",
        "Horarios de salida y puesta de la luna",
        "Visualización de la libración lunar",
        "Cálculos de tamaño aparente",
        "Seguimiento de la posición lunar",
        "Planificación fotográfica"
      ],
      "isPartOf": {
        "@type": "WebApplication",
        "name": "SpaceView.me",
        "url": "https://spaceview.me"
      }
    };

    let script = document.getElementById('moonphase-jsonld-es') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'moonphase-jsonld-es';
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
              <span className="text-base font-semibold">Calculadora de Fases Lunares</span>
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
              Abrir el Simulador
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
              <span>Calculadora de Fases Lunares</span>
            </nav>
            <h1 className="text-3xl font-bold mb-4">Calculadora de Fases Lunares y Calendario Lunar</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Calcula las fases lunares precisas, crea calendarios lunares y rastrea la posición de la Luna con precisión científica.
              Perfecto para entusiastas de la astronomía, fotógrafos y observadores lunares.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">🌙 Cálculos de Fases</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Luna Nueva, Creciente, Cuarto Creciente</li>
                <li>• Luna Gibosa Creciente, Luna Llena, Luna Gibosa Menguante</li>
                <li>• Cuarto Menguante, Menguante</li>
                <li>• Porcentaje y fracción de iluminación</li>
                <li>• Edad de la fase en días</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-3 text-purple-600">🔄 Libración y Movimiento</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Libración lunar en longitud y latitud</li>
                <li>• Características lunares visibles y mares</li>
                <li>• Posición orbital y distancia de la Luna</li>
                <li>• Variaciones del diámetro aparente</li>
                <li>• Cálculos de ángulo del limbo iluminado</li>
              </ul>
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Funciones del Calendario Lunar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🌑</div>
                <h3 className="font-semibold mb-1">Luna Nueva</h3>
                <p className="text-xs text-gray-600">Ideal para fotografía de cielo profundo</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🌓</div>
                <h3 className="font-semibold mb-1">Cuarto Creciente</h3>
                <p className="text-xs text-gray-600">Perfecta para detalles de la superficie lunar</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🌕</div>
                <h3 className="font-semibold mb-1">Luna Llena</h3>
                <p className="text-xs text-gray-600">Perfecta para fotografía lunar</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🌗</div>
                <h3 className="font-semibold mb-1">Cuarto Menguante</h3>
                <p className="text-xs text-gray-600">Ideal para observaciones matutinas</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Simulaciones Lunares Destacadas</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/es?tl=uit0jk.tp0z3k&lp=5xc&l=5128581&t=tp0zab&F=1&p=5&d=nikon-p1000&z=p1000-2000eq&b=5z03&pl=a&sr=0.0167"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-blue-600 mb-2">🌕 Luna Llena en Perigeo</h3>
                <p className="text-sm text-gray-600">Experimenta una superluna - cuando la luna aparece más grande en el cielo</p>
              </Link>
              <Link
                to="/es?tl=-teqghl.s6l39p&lp=5xc&l=3110876&t=s793kh&F=9&p=0&d=VM&z=vm173&b=9hec&pl=a&sr=-6.9833&da=34.73&dh=89.9"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-purple-600 mb-2">🔄 Ciclo de Libración Lunar</h3>
                <p className="text-sm text-gray-600">Observa cómo la luna parece "balancearse" de un lado a otro</p>
              </Link>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Planificación de Fotografía Lunar</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Planifica tus sesiones de fotografía lunar con precisión:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-blue-600">Cronometraje Óptimo</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Horarios de salida y puesta de la luna</li>
                    <li>Cálculos de hora dorada y hora azul</li>
                    <li>Mejores fases para diferentes estilos fotográficos</li>
                    <li>Condiciones atmosféricas y claridad</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-purple-600">Ajustes de Cámara</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Simulación de distancia focal y campo de visión</li>
                    <li>Recomendaciones de exposición por fase</li>
                    <li>Requisitos de seguimiento para exposiciones largas</li>
                    <li>Planificación de composición con elementos en primer plano</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Características Avanzadas</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-green-600">📍 Basado en Ubicación</h3>
                <p className="text-sm text-gray-700">
                  Calcula las fases y posiciones lunares para cualquier lugar en la Tierra con correcciones topocéntricas precisas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-orange-600">⏰ Viaje en el Tiempo</h3>
                <p className="text-sm text-gray-700">
                  Explora las fases lunares históricas o predice eventos lunares futuros con nuestra función de lapso de tiempo.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-red-600">📊 Exportación de Datos</h3>
                <p className="text-sm text-gray-700">
                  Genera calendarios lunares, exporta datos de fases y crea horarios de observación personalizados.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              to="/es?start=true"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
            >
              Calcular Fases Lunares
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
