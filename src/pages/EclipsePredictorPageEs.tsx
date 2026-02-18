import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageFromPath } from '../hooks/useLanguageFromPath';
import InfoLogo from '../components/info/InfoLogo';

export default function EclipsePredictorPageEs() {
  useLanguageFromPath();

  // SEO metadata
  React.useEffect(() => {
    const title = "Predictor de Eclipses - SpaceView.me | Calculador de Eclipses Solares y Lunares";
    const description = "Prediga y visualice eclipses solares y lunares con cálculos precisos de tiempo y visibilidad. Simulador de eclipses interactivo con visualización en tiempo real.";

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', description);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    // Structured data for this specific tool
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Predictor de Eclipses",
      "description": description,
      "url": window.location.href,
      "applicationCategory": "EducationalApplication",
      "inLanguage": "es",
      "featureList": [
        "Predicción de eclipses solares",
        "Predicción de eclipses lunares",
        "Visualización del recorrido de los eclipses",
        "Cálculos de tiempo precisos",
        "Visibilidad basada en la ubicación",
        "Datos de eclipses históricos"
      ],
      "isPartOf": {
        "@type": "WebApplication",
        "name": "SpaceView.me",
        "url": "https://spaceview.me"
      }
    };

    let script = document.getElementById('eclipse-jsonld-es') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'eclipse-jsonld-es';
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
              <span className="text-base font-semibold">Predictor de Eclipses</span>
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
        <div className="flex gap-8">
          {/* Main content */}
          <article className="flex-1">
            <header className="mb-8">
              <nav className="text-sm text-gray-500 mb-4">
                <Link to="/es" className="hover:text-blue-600">SpaceView.me</Link>
                <span className="mx-2">›</span>
                <span>Predictor de Eclipses</span>
              </nav>
              <h1 className="text-3xl font-bold mb-4">Predictor y Visualizador de Eclipses</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Prediga y visualice eclipses solares y lunares con precisión científica. Calcule los horarios exactos,
                las zonas de visibilidad y observe la progresión de los eclipses en tiempo real desde cualquier lugar de la Tierra.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-3 text-blue-600">🌑 Eclipses Solares</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Predicciones de eclipses totales, parciales y anulares</li>
                  <li>• Horarios de contacto precisos (C1, C2, C3, C4)</li>
                  <li>• Magnitud y obscuración del eclipse</li>
                  <li>• Visualización del recorrido de la sombra</li>
                  <li>• Cálculos de duración</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-3 text-red-600">🌕 Eclipses Lunares</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Eclipses totales, parciales y penumbrales</li>
                  <li>• Fases y cronometraje de los eclipses</li>
                  <li>• Cálculos de magnitud y cobertura</li>
                  <li>• Mapas de visibilidad mundial</li>
                  <li>• Trayectoria de la Luna en la sombra terrestre</li>
                </ul>
              </div>
            </div>

            <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cómo Utilizar el Predictor de Eclipses</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                  <h3 className="font-semibold mb-2">Elegir la Ubicación</h3>
                  <p className="text-sm text-gray-600">Seleccione su lugar de observación o introduzca coordenadas personalizadas</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                  <h3 className="font-semibold mb-2">Definir el Período</h3>
                  <p className="text-sm text-gray-600">Especifique el período de tiempo para buscar los eclipses futuros</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                  <h3 className="font-semibold mb-2">Visualizar y Planificar</h3>
                  <p className="text-sm text-gray-600">Ver la progresión del eclipse y planificar su observación o fotografía</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Simulaciones Destacadas de Eclipses</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/es?tl=1iis.skq100&lp=5xc&l=5128581&t=tp0zab&F=1&p=5&d=nikon-p1000&z=p1000-2000eq&b=5z03&pl=a&sr=0.0167"
                  className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-blue-600 mb-2">🌑 Eclipse Solar Total 2024</h3>
                  <p className="text-sm text-gray-600">Viva el eclipse solar total del 8 de abril de 2024 a través de América del Norte</p>
                </Link>
                <Link
                  to="/es?tl=3wn4.wt6xma&lp=5xc&l=2643743&t=wt6tqv&F=0&p=0&d=custom&k=1&f=35w&b=9hg7&pl=a&sr=2.0167&dh=0.11"
                  className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-red-600 mb-2">🌕 Simulador de Eclipse Lunar</h3>
                  <p className="text-sm text-gray-600">Observe las fases del eclipse lunar y la interacción con la sombra terrestre</p>
                </Link>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Planificación de Fotografía de Eclipses</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Planifique su fotografía de eclipses con cronometraje y simulación de equipo precisos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Simulación de cámara y objetivo con cálculos de campo de visión</li>
                  <li>Posiciones y cronometraje de toma óptimos</li>
                  <li>Requisitos de filtro solar y pautas de seguridad</li>
                  <li>Planificación de secuencia compuesta para eclipses solares totales</li>
                  <li>Ajustes de larga exposición para fases de eclipse lunar</li>
                </ul>
              </div>
            </section>

            <div className="text-center">
              <Link
                to="/es?start=true"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
              >
                Comenzar la Predicción de Eclipses
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                Gratis • Sin registro • Funciona en su navegador
              </p>
            </div>
          </article>

          {/* Sidebar Navigation */}
          <aside className="w-80 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Herramientas Relacionadas</h2>
                <div className="space-y-3">
                  <Link to="/es/moon-phase-calculator" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌙</span>
                      <div>
                        <div className="font-medium text-gray-900">Calculador de Fases Lunares</div>
                        <div className="text-sm text-gray-500">Calendario lunar y fases</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/es/astrophotography-planner" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📷</span>
                      <div>
                        <div className="font-medium text-gray-900">Planificador de Astrofotografía</div>
                        <div className="text-sm text-gray-500">Ajustes de cámara y planificación</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="text-sm text-gray-600">
              © 2025 SpaceView.me - Simulador astronómico open source
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
