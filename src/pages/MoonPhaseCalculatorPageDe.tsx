import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageFromPath } from '../hooks/useLanguageFromPath';
import InfoLogo from '../components/info/InfoLogo';

export default function MoonPhaseCalculatorPageDe() {
  useLanguageFromPath();

  // SEO metadata
  React.useEffect(() => {
    const title = "Mondphasen-Rechner - SpaceView.me | Mondkalender & Phasenvorhersage";
    const description = "Berechnen Sie präzise Mondphasen, erstellen Sie Mondkalender und verfolgen Sie die Mondposition für beliebige Daten und Standorte. Interaktiver Mondphasen-Simulator mit Libration und Berechnungen der scheinbaren Größe.";

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', description);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    // Structured data for this specific tool
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Mondphasen-Rechner",
      "description": description,
      "url": window.location.href,
      "applicationCategory": "EducationalApplication",
      "inLanguage": "de",
      "featureList": [
        "Mondphasenvorhersage",
        "Mondkalender-Generierung",
        "Mondauf- und -untergangszeiten",
        "Visualisierung der Mondlibration",
        "Berechnungen der scheinbaren Größe",
        "Verfolgung der Mondposition",
        "Fotografieplanung"
      ],
      "isPartOf": {
        "@type": "WebApplication",
        "name": "SpaceView.me",
        "url": "https://spaceview.me"
      }
    };

    let script = document.getElementById('moonphase-jsonld-de') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'moonphase-jsonld-de';
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
              <span className="text-base font-semibold">Mondphasen-Rechner</span>
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
        <article>
          <header className="mb-8">
            <nav className="text-sm text-gray-500 mb-4">
              <Link to="/de" className="hover:text-blue-600">SpaceView.me</Link>
              <span className="mx-2">›</span>
              <span>Mondphasen-Rechner</span>
            </nav>
            <h1 className="text-3xl font-bold mb-4">Mondphasen-Rechner & Mondkalender</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Berechnen Sie präzise Mondphasen, erstellen Sie Mondkalender und verfolgen Sie die Mondposition mit wissenschaftlicher Genauigkeit.
              Perfekt für Astronomiefans, Fotografen und Mondbeobachter.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">🌙 Phasenberechnungen</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Neumond, Zunehmende Sichel, Erstes Viertel</li>
                <li>• Zunehmender Mond, Vollmond, Abnehmender Mond</li>
                <li>• Letztes Viertel, Abnehmende Sichel</li>
                <li>• Beleuchtungsprozentsatz und -anteil</li>
                <li>• Phasenalter in Tagen</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-3 text-purple-600">🔄 Libration & Bewegung</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Mondlibration in Länge und Breite</li>
                <li>• Sichtbare Mondmerkmale und Maria</li>
                <li>• Orbitale Position und Mondentfernung</li>
                <li>• Variationen des scheinbaren Durchmessers</li>
                <li>• Berechnungen des beleuchteten Randwinkels</li>
              </ul>
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Mondkalender-Funktionen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🌑</div>
                <h3 className="font-semibold mb-1">Neumond</h3>
                <p className="text-xs text-gray-600">Ideal für Deep-Sky-Fotografie</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🌓</div>
                <h3 className="font-semibold mb-1">Erstes Viertel</h3>
                <p className="text-xs text-gray-600">Perfekt für Mondoberflächendetails</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🌕</div>
                <h3 className="font-semibold mb-1">Vollmond</h3>
                <p className="text-xs text-gray-600">Perfekt für Mondfotografie</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🌗</div>
                <h3 className="font-semibold mb-1">Letztes Viertel</h3>
                <p className="text-xs text-gray-600">Ideal für Morgenbeobachtungen</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Vorgestellte Mondsimulationen</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/de?tl=uit0jk.tp0z3k&lp=5xc&l=5128581&t=tp0zab&F=1&p=5&d=nikon-p1000&z=p1000-2000eq&b=5z03&pl=a&sr=0.0167"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-blue-600 mb-2">🌕 Vollmond im Perigäum</h3>
                <p className="text-sm text-gray-600">Erleben Sie einen Supermond - wenn der Mond am größten am Himmel erscheint</p>
              </Link>
              <Link
                to="/de?tl=-teqghl.s6l39p&lp=5xc&l=3110876&t=s793kh&F=9&p=0&d=VM&z=vm173&b=9hec&pl=a&sr=-6.9833&da=34.73&dh=89.9"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-purple-600 mb-2">🔄 Mondlibrationszyklus</h3>
                <p className="text-sm text-gray-600">Beobachten Sie, wie der Mond scheinbar hin und her "taumelt"</p>
              </Link>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Planung der Mondfotografie</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Planen Sie Ihre Mondfotografie-Sessions mit Präzision:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-blue-600">Optimales Timing</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Mondauf- und -untergangszeiten</li>
                    <li>Berechnungen der goldenen und blauen Stunde</li>
                    <li>Beste Phasen für verschiedene Fotografiestile</li>
                    <li>Atmosphärische Bedingungen und Klarheit</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-purple-600">Kameraeinstellungen</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Simulation von Brennweite und Bildfeld</li>
                    <li>Belichtungsempfehlungen nach Phase</li>
                    <li>Nachführungsanforderungen für Langzeitbelichtungen</li>
                    <li>Kompositionsplanung mit Vordergrundelementen</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Erweiterte Funktionen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-green-600">📍 Standortbasiert</h3>
                <p className="text-sm text-gray-700">
                  Berechnen Sie Mondphasen und -positionen für jeden Ort auf der Erde mit präzisen topozentrischen Korrekturen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-orange-600">⏰ Zeitreise</h3>
                <p className="text-sm text-gray-700">
                  Erkunden Sie historische Mondphasen oder sagen Sie zukünftige Mondevents mit unserer Zeitraffer-Funktion voraus.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-red-600">📊 Datenexport</h3>
                <p className="text-sm text-gray-700">
                  Generieren Sie Mondkalender, exportieren Sie Phasendaten und erstellen Sie individuelle Beobachtungspläne.
                </p>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              to="/de?start=true"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
            >
              Mondphasen berechnen
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Kostenlos • Keine Registrierung erforderlich • Funktioniert im Browser
            </p>
          </div>
        </article>
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
