import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageFromPath } from '../hooks/useLanguageFromPath';
import InfoLogo from '../components/info/InfoLogo';

export default function EclipsePredictorPageDe() {
  useLanguageFromPath();

  // SEO metadata
  React.useEffect(() => {
    const title = "Finsternisvorhersage - SpaceView.me | Sonnen- und Mondfinsternisrechner";
    const description = "Vorhersage und Visualisierung von Sonnen- und Mondfinsternissen mit präzisen Zeitberechnungen und Sichtbarkeit. Interaktiver Finsternis-Simulator mit Echtzeit-Visualisierung.";

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', description);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    // Structured data for this specific tool
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Finsternisvorhersage",
      "description": description,
      "url": window.location.href,
      "applicationCategory": "EducationalApplication",
      "inLanguage": "de",
      "featureList": [
        "Sonnenfinsternisvorhersage",
        "Mondfinsternisvorhersage",
        "Visualisierung des Finsternisverlaufs",
        "Präzise Zeitberechnungen",
        "Standortbasierte Sichtbarkeit",
        "Historische Finsternis-Daten"
      ],
      "isPartOf": {
        "@type": "WebApplication",
        "name": "SpaceView.me",
        "url": "https://spaceview.me"
      }
    };

    let script = document.getElementById('eclipse-jsonld-de') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'eclipse-jsonld-de';
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
              <span className="text-base font-semibold">Finsternisvorhersage</span>
              <span className="text-xs text-gray-600">SpaceView.me</span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              to="/de/info"
              className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Info
            </Link>
            <Link
              to="/de?start=true"
              className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Simulator öffnen
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
                <Link to="/de" className="hover:text-blue-600">SpaceView.me</Link>
                <span className="mx-2">›</span>
                <span>Finsternisvorhersage</span>
              </nav>
              <h1 className="text-3xl font-bold mb-4">Finsternis-Vorhersage & Visualisierung</h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vorhersage und Visualisierung von Sonnen- und Mondfinsternissen mit wissenschaftlicher Präzision. Berechnen Sie exakte Zeiten,
                Sichtbarkeitszonen und beobachten Sie den Finsternisverlauf in Echtzeit von jedem Ort der Erde.
              </p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-3 text-blue-600">🌑 Sonnenfinsternisse</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Vorhersagen für totale, partielle und ringförmige Finsternisse</li>
                  <li>• Präzise Kontaktzeiten (C1, C2, C3, C4)</li>
                  <li>• Magnitude und Verfinsterungsgrad</li>
                  <li>• Visualisierung des Schattenpfads</li>
                  <li>• Dauerberechnungen</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-3 text-red-600">🌕 Mondfinsternisse</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Totale, partielle und Halbschattenfinsternisse</li>
                  <li>• Phasen und Zeitabläufe der Finsternisse</li>
                  <li>• Berechnungen von Magnitude und Bedeckung</li>
                  <li>• Weltweite Sichtbarkeitskarten</li>
                  <li>• Mondbahn durch den Erdschatten</li>
                </ul>
              </div>
            </div>

            <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">So verwenden Sie die Finsternisvorhersage</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                  <h3 className="font-semibold mb-2">Standort wählen</h3>
                  <p className="text-sm text-gray-600">Wählen Sie Ihren Beobachtungsort oder geben Sie eigene Koordinaten ein</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                  <h3 className="font-semibold mb-2">Zeitraum festlegen</h3>
                  <p className="text-sm text-gray-600">Geben Sie den Zeitraum für die Suche nach kommenden Finsternissen an</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                  <h3 className="font-semibold mb-2">Visualisieren & Planen</h3>
                  <p className="text-sm text-gray-600">Sehen Sie den Finsternisverlauf und planen Sie Ihre Beobachtung oder Fotografie</p>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Ausgewählte Finsternis-Simulationen</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  to="/de?tl=1iis.skq100&lp=5xc&l=5128581&t=tp0zab&F=1&p=5&d=nikon-p1000&z=p1000-2000eq&b=5z03&pl=a&sr=0.0167"
                  className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-blue-600 mb-2">🌑 Totale Sonnenfinsternis 2024</h3>
                  <p className="text-sm text-gray-600">Erleben Sie die totale Sonnenfinsternis vom 8. April 2024 über Nordamerika</p>
                </Link>
                <Link
                  to="/de?tl=3wn4.wt6xma&lp=5xc&l=2643743&t=wt6tqv&F=0&p=0&d=custom&k=1&f=35w&b=9hg7&pl=a&sr=2.0167&dh=0.11"
                  className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-red-600 mb-2">🌕 Mondfinsternis-Simulator</h3>
                  <p className="text-sm text-gray-600">Beobachten Sie die Phasen der Mondfinsternis und die Interaktion mit dem Erdschatten</p>
                </Link>
              </div>
            </section>

            <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Finsternis-Fotografie-Planung</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Planen Sie Ihre Finsternis-Fotografie mit präzisen Zeitabläufen und Ausrüstungssimulation:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Kamera- und Objektivsimulation mit Sichtfeldberechnungen</li>
                  <li>Optimale Aufnahmeposition und -zeitpunkt</li>
                  <li>Anforderungen an Sonnenfilter und Sicherheitshinweise</li>
                  <li>Sequenzplanung für totale Sonnenfinsternisse</li>
                  <li>Langzeitbelichtungseinstellungen für Mondfinsternisphasen</li>
                </ul>
              </div>
            </section>

            <div className="text-center">
              <Link
                to="/de?start=true"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
              >
                Finsternisvorhersage starten
              </Link>
              <p className="text-sm text-gray-500 mt-2">
                Kostenlos • Keine Registrierung erforderlich • Läuft in Ihrem Browser
              </p>
            </div>
          </article>

          {/* Sidebar Navigation */}
          <aside className="w-80 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Verwandte Tools</h2>
                <div className="space-y-3">
                  <Link to="/de/moon-phase-calculator" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌙</span>
                      <div>
                        <div className="font-medium text-gray-900">Mondphasen-Rechner</div>
                        <div className="text-sm text-gray-500">Mondkalender & Phasen</div>
                      </div>
                    </div>
                  </Link>
                  <Link to="/de/astrophotography-planner" className="block p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📷</span>
                      <div>
                        <div className="font-medium text-gray-900">Astrophotografie-Planer</div>
                        <div className="text-sm text-gray-500">Kameraeinstellungen & Planung</div>
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
              © 2025 SpaceView.me - Open-Source-Astronomiesimulator
            </div>
            <div className="flex gap-4 text-sm">
              <Link to="/de/info/help" className="text-gray-600 hover:text-blue-600">Hilfe</Link>
              <Link to="/de/info/contact" className="text-gray-600 hover:text-blue-600">Kontakt</Link>
              <a href="https://github.com/antoine-paris/spaceview" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
