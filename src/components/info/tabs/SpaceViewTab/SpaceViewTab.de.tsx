import InfoLogo from '../../InfoLogo';

export default function SpaceViewTabDe() {
  const ldSoftware = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SpaceView',
    applicationCategory: 'EducationalApplication',
    applicationSubCategory: 'Astronomie-Simulator, Astrofotografie-Planer',
    operatingSystem: 'Web',
    url: 'https://github.com/antoine-paris/spaceview',
    license: 'https://opensource.org/licenses/MIT',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description:
      'SpaceView ist ein astronomischer 3D-Echtzeitsimulator und Astrofotografie-Planer: Sonne, Mond, Planeten, Phasen, Libration, Weitwinkel-Projektionen (Recti-Panini, Stereografisch, Orthografisch, Geradlinig, Zylindrisch), Zeitraffer, Langzeitbelichtung, Fotorahmen und Export.',
    keywords:
      'Himmels-Simulator, astronomischer Simulator, Astrofotografie, Sonnenfinsternis, Mondphasen, Zeitraffer, Recti-Panini, stereografische Projektion, Horizont, FOV, Sichtfeld, Fotorahmen, WebM-Videoaufzeichnung, PNG-Aufnahme',
    featureList: [
      'Weitwinkel-Foto-Projektionen: Recti-Panini, Stereografisch zentriert, Orthografisch, Geradlinig, Zylindrisch',
      'Intelligente Verfolgung: Sonne, Mond, Planeten oder Himmelsrichtungen; Horizont-/Ekliptik-Ausrichtung',
      '3D-Rendering von Mond und Planeten (nach scheinbarer Größe): präzise Phasen, Libration, Erdschein, Terminatorausrichtung',
      'Mehrskaliger Zeitraffer: Minute, Stunde, Tag, Sterntag, Monat, Mondzyklen',
      'Echtzeit-Langzeitbelichtung (Stacking): Sternspuren und Bahnvisualisierungen',
      'Didaktische Vergrößerungsoption für sehr große FOVs',
      'Optiksimulation: Sensoren, äquivalente Brennweiten 24×36, FOV H/V, Fotorahmen 3:2/16:9',
      'Atmosphärische Brechung, Alt/Az-Gitter, Ekliptik, lokale Markierungen und Himmelsrichtungen',
      'URL-Freigabe (vollständiger Zustand), PNG-Export, .webm-Videoaufzeichnung',
    ],
  };

  const ldFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Ist SpaceView kostenlos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Ja. Die Anwendung ist Open Source (MIT-Lizenz) und kann kostenlos in einem modernen Browser verwendet werden.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann ich ein Video oder Bild exportieren?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Ja. Bildexport (PNG/Kopieren) und Videoaufzeichnung im .webm-Format direkt über die Benutzeroberfläche.',
        },
      },
      {
        '@type': 'Question',
        name: 'Werden Weitwinkel-Foto-Projektionen unterstützt?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Ja. Recti-Panini, Stereografisch zentriert, Orthografisch, Geradlinig und Zylindrisch, angepasst an sehr große FOVs.',
        },
      },
      {
        '@type': 'Question',
        name: 'Berücksichtigt die Simulation Brechung und Phasen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Ja. Optionale atmosphärische Brechung nahe am Horizont, präzise Phasen, Libration und Erdschein.',
        },
      },
    ],
  };

  return (
    <article itemScope itemType="https://schema.org/SoftwareApplication">
      {/* SEO-strukturierte Daten */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldSoftware) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFaq) }}
      />

      <h1 itemProp="name">SpaceView.me — Astrofotografie-Simulator <br/>(für Anfänger)</h1>

      <div className="flex justify-center my-8">
        <InfoLogo size={120} />
      </div>

      <p itemProp="description">
        Visualisieren Sie den Himmel in Echtzeit (Sonne, Mond, Planeten, Sterne) mit Phasen, scheinbaren Größen, Libration,
        Weitwinkel-Projektionen und Foto-Tools. Planen Sie eine Sonnenfinsternis, einen Auf-/Untergang, einen Transit oder eine
        Astrofotografie-Session präzise und teilen und exportieren Sie Ihre Szenen als Bild/Video.
      </p>
      <p>
        Kostenlos • Open Source • Keine Registrierung • Funktioniert im Browser (moderne Desktop-/Mobilgeräte)
      </p>

      <h2>Warum SpaceView?</h2>
      <ul>
        <li>Phänomene visuell verstehen und erklären (Phasen, Ekliptik, Höhen, Libration).</li>
        <li>Glaubwürdige Aufnahmen vorbereiten: FOV, Sensoren, Brennweiten, 3:2/16:9-Rahmen, angepasste Projektionen.</li>
        <li>Eindrucksvolle Demonstrationen erstellen: Zeitraffer, Langzeitbelichtung, Bild-/Videoexport und teilbarer Link.</li>
      </ul>

      <h2>Innovative Funktionen</h2>
      <ul>
        <li>
          Weitwinkel-Foto-Projektionen (Recti-Panini, Stereografisch, Orthografisch, Geradlinig, Zylindrisch)
          zur Bewahrung einer natürlichen Darstellung bis zu sehr großen FOVs.
        </li>
        <li>
          Intelligente Objektverfolgung und Rahmenausrichtung (Horizont/Ekliptik) zum einfachen Vergleich von Höhen und
          Konjunktionen.
        </li>
        <li>
          3D-Rendering des Mondes mit Libration, Phase, Erdschein und Terminatorausrichtung für präzise Didaktik.
        </li>
        <li>
          Mehrskaliger Zeitraffer (Minute → Mondzyklen) und Langzeitbelichtung mit Stacking zur Visualisierung von Bewegungen
          über Tage, Monate oder Jahre.
        </li>
        <li>
          Vollständige Optiksimulation: Sensoren, äquivalente Brennweite 24×36, FOV H/V, 3:2-Fotorahmen und 16:9-Markierungen.
        </li>
        <li>
          Konfigurierbare Himmelsphysik: Brechung nahe am Horizont, Alt/Az-Gitter, Ekliptik, lokale Markierungen und Himmelsrichtungen.
        </li>
        <li>
          Sofortfreigabe per URL (vollständiger Zustand), PNG-Aufnahme/Kopieren, .webm-Videoaufzeichnung zum Teilen Ihrer Szenen.
        </li>
      </ul>

      <h2>Anwendungsfälle</h2>
      <ul>
        <li>Eine Sonnenfinsternis oder Planetenkonstellation von einem bestimmten Ort aus vorbereiten.</li>
        <li>Mehrere Brennweiten und Projektionen für eine glaubwürdige Weitwinkel-Komposition vergleichen.</li>
        <li>Den Tanz von Venus/Merkur, die Jahreszeiten der Sonne oder die Mondlibration im Zeitraffer zeigen.</li>
        <li>Einen Zeitraffer im .webm-Format für eine Präsentation oder didaktischen Austausch aufzeichnen.</li>
      </ul>


      <figure className="m-0 info-content-margins">
        <img
          src="/img/capture/spaceview-application-export-1.png"
          alt="Szenenaufnahme- und Exportfunktion"
          className="w-full h-auto rounded-md border border-black/10 shadow-sm"
        />
        <figcaption className="text-sm text-gray-500 mt-1">
          Ansicht von Paris der Sonnenfinsternis 2026 mit Merkur und Jupiter.
        </figcaption>
      </figure>


      <h2>FAQ</h2>
      <div className="info-content-margins">
        <details >
          <summary>Ist SpaceView kostenlos?</summary>
          <p>Ja, Open Source unter MIT-Lizenz, kostenlos in einem modernen Browser nutzbar.</p>
        </details>
        <details>
          <summary>Kann ich ein Video oder Bild exportieren?</summary>
          <p>Ja, Bildexport (PNG/Kopieren) und .webm-Videoaufzeichnung integriert.</p>
        </details>
        <details>
          <summary>Werden Weitwinkel-Projektionen unterstützt?</summary>
          <p>Ja: Recti-Panini, Stereografisch zentriert, Orthografisch, Geradlinig, Zylindrisch.</p>
        </details>
        <details>
          <summary>Umfasst die Simulation Brechung und Phasen?</summary>
          <p>Ja: optionale atmosphärische Brechung, präzise Phasen, Libration und Erdschein.</p>
        </details>
      </div>
      <h2>Open Source und Credits</h2>
      <p>
        Quellcode: <a href="https://github.com/antoine-paris/spaceview" target="_blank" rel="noopener noreferrer" itemProp="url">GitHub</a> —
        Lizenz <span itemProp="license">MIT</span>. Stack: React, TypeScript, Vite, Tailwind, three.js, @react-three/fiber,
        astronomy-engine, Natural Earth, etc.
      </p>

      <div className="text-xs text-gray-400 mt-8 pt-4 border-t border-gray-200 text-center">
        Build: {new Date(__BUILD_DATE__).toLocaleDateString('de-DE', {
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
