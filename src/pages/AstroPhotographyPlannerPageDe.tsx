import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguageFromPath } from '../hooks/useLanguageFromPath';
import InfoLogo from '../components/info/InfoLogo';

export default function AstroPhotographyPlannerPageDe() {
  useLanguageFromPath();

  // SEO metadata
  React.useEffect(() => {
    const title = "Astrophotografie-Planer - SpaceView.me | Kameraeinstellungen & Himmelsplanungstool";
    const description = "Planen Sie Ihre Astrophotografie-Sessions mit präzisen Himmelsberechnungen, Kameraeinstellungs-Simulation und optimalem Timing für Himmelsereignisse. Perfekt für Deep-Sky- und Planetenfotografie.";

    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute('content', description);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);

    // Structured data for this specific tool
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Astrophotografie-Planer",
      "description": description,
      "url": window.location.href,
      "applicationCategory": "EducationalApplication",
      "inLanguage": "de",
      "featureList": [
        "Kamera- und Objektivsimulation",
        "Bildfeldberechnungen",
        "Vorhersagen für optimales Timing",
        "Bewertung der Himmelsdunkelheit",
        "Planung der Zielsichtbarkeit",
        "Ausrüstungsempfehlungen",
        "Session-Planung"
      ],
      "isPartOf": {
        "@type": "WebApplication",
        "name": "SpaceView.me",
        "url": "https://spaceview.me"
      }
    };

    let script = document.getElementById('astrophoto-jsonld-de') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'astrophoto-jsonld-de';
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
              <span className="text-base font-semibold">Astrophotografie-Planer</span>
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
              Planer öffnen
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
              <span>Astrophotografie-Planer</span>
            </nav>
            <h1 className="text-3xl font-bold mb-4">Astrophotografie-Planer & Session-Rechner</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Planen Sie perfekte Astrophotografie-Sessions mit präzisen Himmelsberechnungen, Kamerasimulation und Vorhersagen für optimales Timing.
              Von Weitwinkelaufnahmen der Milchstraße bis zur detaillierten Planetenfotografie.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-3 text-blue-600">📷 Ausrüstungssimulation</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Kamera- und Objektiv-Bildfeldberechnungen</li>
                <li>• Brennweitenempfehlungen nach Ziel</li>
                <li>• Sensorgröße und Crop-Faktor-Berücksichtigung</li>
                <li>• Fotorahmen-Overlay für Komposition</li>
                <li>• Anforderungen für Nachführmontierung</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold mb-3 text-purple-600">🌌 Himmelsbedingungen</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Bewertung von Mondphase und Interferenz</li>
                <li>• Optimale Dunkelheitsfenster</li>
                <li>• Zielhöhe und Sichtbarkeit</li>
                <li>• Atmosphärische Transparenzfaktoren</li>
                <li>• Berechnung der besten Imaging-Zeiten</li>
              </ul>
            </div>
          </div>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Fotografie-Planungs-Workflow</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
                <h3 className="font-semibold mb-2">Ziel wählen</h3>
                <p className="text-sm text-gray-600">Wählen Sie Himmelsobjekte oder Ereignisse zum Fotografieren</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                <h3 className="font-semibold mb-2">Ausrüstung festlegen</h3>
                <p className="text-sm text-gray-600">Konfigurieren Sie Ihre Kamera, Objektiv und Teleskop</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                <h3 className="font-semibold mb-2">Timing planen</h3>
                <p className="text-sm text-gray-600">Finden Sie optimale Daten und Zeiten für Ihre Session</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
                <h3 className="font-semibold mb-2">Aufnehmen & Teilen</h3>
                <p className="text-sm text-gray-600">Führen Sie Ihren Plan aus und teilen Sie Ergebnisse</p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Vorgestellte Astrophotografie-Beispiele</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                to="/de?tl=-teqghl.s6l39p&lp=5xc&l=3110876&t=s793kh&F=9&p=0&d=VM&z=vm173&b=9hec&pl=a&sr=-6.9833&da=34.73&dh=89.9"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-blue-600 mb-2">🌌 Milchstraßen-Fotografie</h3>
                <p className="text-sm text-gray-600">Weitwinkel-Setup zum Erfassen des galaktischen Zentrums</p>
              </Link>
              <Link
                to="/de?tl=uit0jk.tp0z3k&lp=5xc&l=5128581&t=tp0zab&F=1&p=5&d=nikon-p1000&z=p1000-2000eq&b=5z03&pl=a&sr=0.0167"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-red-600 mb-2">🌕 Mond-Nahaufnahmen</h3>
                <p className="text-sm text-gray-600">Teleobjektiv-Setup für detaillierte Mondaufnahmen</p>
              </Link>
              <Link
                to="/de?tl=1iit.usgh40&lp=5xc&l=2988507&t=wad7s0&F=0&p=0&d=custom&k=1&f=1&b=5z2d&pl=a&sr=214.852"
                className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-orange-600 mb-2">🪐 Planeten-Imaging</h3>
                <p className="text-sm text-gray-600">Hochvergrößerungs-Setup für Planetenfotografie</p>
              </Link>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Fotografietypen & Techniken</h2>
            <div className="space-y-6">

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Deep-Sky-Fotografie</h3>
                <p className="text-gray-700 mb-2">
                  Erfassen Sie Nebel, Galaxien und Sternhaufen mit Langzeitbelichtungstechniken.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Dunkelhimmel-Standorte und Mondvermeidung</li>
                  <li>Nachführmontierungsanforderungen und Polausrichtung</li>
                  <li>Stacking mehrerer Belichtungen und Verarbeitung</li>
                  <li>Filterempfehlungen (L-RGB, Schmalband)</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold text-lg mb-2 text-red-600">Mond & Planeten</h3>
                <p className="text-gray-700 mb-2">
                  Hochauflösende Aufnahmen von Sonnensystemobjekten mit präzisem Timing.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Optimales Timing für Opposition und Konjunktion</li>
                  <li>Überlegungen zu atmosphärischem Seeing und Turbulenz</li>
                  <li>Videoaufnahmetechniken und Lucky Imaging</li>
                  <li>Barlow-Linsen-Berechnungen und Brennweitenverhältnis</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-lg mb-2 text-purple-600">Weitwinkel-Astrophotografie</h3>
                <p className="text-gray-700 mb-2">
                  Astrolandschaftsfotografie mit Kombination von Vordergrund und Himmel.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Kompositionsplanung mit Vordergrundelementen</li>
                  <li>Fokus-Stacking und Belichtungsmischung</li>
                  <li>Milchstraßen-Positionierung und Sichtbarkeitsfenster</li>
                  <li>Bewertung und Minderung von Lichtverschmutzung</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Ausrüstungsdatenbank</h2>
            <p className="text-gray-700 mb-4">
              SpaceView enthält eine umfangreiche Datenbank von Kameras, Objektiven und Teleskopen mit präzisen Spezifikationen:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-green-600">📷 Kameras</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• DSLR- und spiegellose Kameras</li>
                  <li>• Dedizierte Astronomiekameras</li>
                  <li>• Sensor-Spezifikationen und -Eigenschaften</li>
                  <li>• Rauschleistung und Empfindlichkeit</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-blue-600">🔭 Objektive & Teleskope</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Weitwinkel- bis Superteleobjektive</li>
                  <li>• Refraktor-, Reflektor- und SCT-Teleskope</li>
                  <li>• Brennweiten- und Öffnungskombinationen</li>
                  <li>• Bildfeldberechnungen</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-purple-600">🎛️ Zubehör</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Nachführmontierungen und Star Tracker</li>
                  <li>• Filter und Lichtverschmutzungsreduktion</li>
                  <li>• Barlow-Linsen und Brennweitenreduzierer</li>
                  <li>• Autoguiding-Systeme</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="text-center">
            <Link
              to="/de?start=true"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
            >
              Ihre Session-Planung starten
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
