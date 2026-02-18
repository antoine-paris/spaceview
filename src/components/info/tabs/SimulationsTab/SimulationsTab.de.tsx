type Example = {
  label: string;
  desc?: string;
  url: string;            // ISO UTC
  img?: string;
  webm?: string;
};

// Konvertiert eventuelle <br/> in echte Zeilenumbrüche
function renderDesc(desc?: string) {
  if (!desc) return null;
  const parts = desc.split(/<br\s*\/?>/gi);
  return parts.flatMap((part, idx) =>
    idx < parts.length - 1 ? [part, <br key={idx} />] : [part]
  );
}

export default function SimulationsTabDe() {
  const examples: Example[] = [
    {
      label: 'Venustransit — 2012-06-05/06 (San Francisco)',
      desc: 'Ein Transit tritt auf, wenn Venus, deren Bahn geneigt ist (~3,4°), an einem Knoten vorbeiläuft, während Erde–Venus–Sonne perfekt ausgerichtet sind. Transite erscheinen paarweise im Abstand von 8 Jahren, die selbst durch ~105,5 oder 121,5 Jahre getrennt sind: also äußerst selten. Visuell durchquert eine kleine schwarze Scheibe langsam die Sonne; man unterscheidet vier Kontakte (C1–C4) und manchmal den "schwarzen Tropfen"-Effekt. Absolute Sicherheit: niemals mit bloßem Auge; verwenden Sie zertifizierte ISO 12312-2-Sonnenbrillen, einen Astrosolar-Vollöffnungsfilter oder Projektion auf einen Schirm (Fernglas/Teleskop). Zum Vergleich mit der Simulation notieren Sie die Bahn auf der Sonnenscheibe und die Feldorientierung. Foto: Stativ, manueller Fokus auf den Rand, niedrige ISO, kurze Belichtungszeiten; lösen Sie in regelmäßigen Abständen aus, um den Fortschritt zu dokumentieren; mit einem H-alpha-Filter sind Chromosphäre und Protuberanzen sichtbar, ohne die Transitgeometrie zu ändern.',
      url: '/?tl=2i2p.m55zs0&lp=74&l=5391959&t=m5608o&F=0&p=1&d=nikon-p1000&z=p1000-2000eq&b=aw1z&pl=2&sr=0.0167',
      img : '/img/examples/export-venus-transit-san-francisco-2012.jpg'
    },
    {
      label: 'Sonnenfinsternis — 2026-08-12 (Madrid)',
      desc: 'Eine Sonnenfinsternis tritt auf, wenn der Mond seinen Schatten auf die Erde wirft. In Madrid streift der zentrale Schatten die Stadt: die Finsternis ist zu 99,9% partiell (sie wird in Coruña, Bilbao, Saragossa, València und Palma de Mallorca total sein, sichtbar als "Biss", der sich über die Sonne bewegt). Der bedeckte Anteil und die Orientierung der Sichel hängen von der lokalen Geometrie und der Uhrzeit ab. Sicherheit: Schutz OBLIGATORISCH kontinuierlich (ISO 12312-2-Brillen, Sonnenfilter auf der Optik). Beobachtung: folgen Sie der Sichelneigung und der scheinbaren Bahn über verschiedene FOVs/Projektionen; unter Bäumen wirken Lücken wie Lochkameras und projizieren Sicheln auf den Boden. Foto: manuelle/Spotmessung, niedrige ISO, kurze Zeiten; erstellen Sie eine regelmäßige Zeitreihe; im Weitwinkel rahmen Sie den urbanen Kontext ein, um die Szene zu erzählen.',
      url: '/?tl=2i2p.tjo3a0&lp=5xc&l=6544494&t=tjo3ic&F=0&p=0&d=nikon-p1000&z=p1000-2000eq&b=9hc7&pl=a&sr=0.0167&da=0.15&dh=-0.04',
      img : '/img/examples/export-eclipse-madrid-2026.jpg'
    },
    {
      label: 'Totale Sonnenfinsternis — 2024-04-08 (Dallas)',
      desc: 'Im Totalitätsband bedeckt der Mond die Sonne für einige Minuten vollständig. Phasen: C1 (erster Kontakt), C2 (Eintritt in die Totalität, Bailysche Perlen, Diamantring), Totalität (Korona, Protuberanzen, Chromosphäre), C3 (Ende der Totalität), C4 (letzter Kontakt). Atmosphäre: Helligkeits-/Temperaturabfall, Sterne/Planeten sichtbar, lokale Winde. Sicherheit: Filter obligatorisch vor C2 und nach C3; Filter nur während der Totalität entfernen. Beobachtung: bevorzugen Sie einen Standort nahe der Achse und einen klaren Horizont. Foto: großes Bracketing (≈ 1/4000 s bis ≈ 1 s), um Perlen und ausgedehnte Korona abzudecken; Fokus auf den Rand; Fernauslöser; verwenden Sie eine zweite Weitwinkelkamera für Horizont und Publikumsreaktion.',
      url: '/?tl=2i2o.sbmvgc&lp=5xc&l=4684888&t=sbmw2b&F=0&p=0&d=nikon-p1000&z=p1000-1000eq&b=9hdz&pl=a&sr=3.0167&da=0.15&dh=-0.04',
      img : '/img/examples/export-eclipse-dallas-2024.jpg'
    },
    {
      label: 'Totale Mondfinsternis — 2025-09-08 (Australien)',
      desc: 'Der Mond durchquert den Halbschatten und dann den Erdschatten (zentraler Schatten). Im Maximum rötet er sich: das Sonnenlicht, durch die Atmosphäre gebrochen, wird durch Rayleigh-Streuung gefiltert — der Mond sieht gleichzeitig alle Sonnenauf- und -untergänge des Globus. Tönung/Dunkelheit variieren mit der atmosphärischen Transparenz (Danjon-Skala). Beobachtung: ohne Schutz, mit bloßem Auge oder Fernglas; ein klarer Horizont ist bei Auf-/Untergängen nützlich. Foto: während der Totalität sehr geringe Helligkeit — versuchen Sie ≈ 1/4 bis 2 s, ISO 400–1600, f/4–f/8 je nach Brennweite; außerhalb der Totalität zu kurzen Zeiten zurückkehren. Vergleichen Sie Orientierung und Geschwindigkeit des dunklen Randes (Schatten) mit der Simulation.',
      url: '/?tl=3wn4.t2884e&lp=5xc&g=rhby8kxye&tz=Australia%2FDarwin&t=t287xz&F=1&p=0&d=custom&k=1&f=1fy&b=9hcf&pl=a&sr=2.0167',
      img : '/img/examples/export-red-moon.jpg'
    },
    {
      label: 'Kreuz des Südens — südliche Sichtbarkeit (Santiago)',
      desc: 'Crux, klein aber sehr kontrastreich, dominiert den südlichen Himmel. Mit α und β Centauri ("Zeiger") ermöglicht es die Lokalisierung des südlichen Himmelspols: verlängern Sie den großen Balken ~4,5-mal und kreuzen Sie mit der Winkelhalbierenden α–β Centauri. Jahreszeit/Zeit: nahe Santiago ist Crux viele Nächte sichtbar und kulminiert im südlichen Herbst; finden Sie auch den "Kohlensack" (dunkler Nebel). Beobachtung: dunkler Himmel, Blick nach Süden; lernen Sie, die Orientierung des Kreuzes je nach Zeit/Jahreszeit zu lesen. Foto: Weitwinkel, 10–20 s, ISO 1600–6400; für Spuren mehrere lange Belichtungen kumulieren oder Nachführung verwenden; vergleichen Sie Höhe und Rotation in der Simulation.',
      url: '/?tl=2i2o.skzd40&lp=74&l=3928245&t=slb67m&F=b&p=5&d=custom&k=1&f=2&b=8s7o&pl=n&sr=167.101&da=16.55&dh=33.48',
      img : '/img/examples/export-crux-santiago.jpg'
    },
    {
      label: 'Meridian-Sonnenhöhe zur Sonnenwende (Reykjavík)',
      desc: 'Die Höhe zur wahren Mittagszeit folgt h ≈ 90° − |φ − δ| (φ Breitengrad, δ Sonnendeklination). Zur Sommersonnenwende (δ ≈ +23,44°) nahe dem Polarkreis bleibt die Sonne selbst mittags niedrig und die Schatten bleiben lang. "Wahre Mittagszeit" fällt nicht immer mit 12:00 zusammen (Zeitgleichung und Zeitzone). Beobachtung: nutzen Sie die Simulation, um den genauen Moment zu finden; ein Gnomon (senkrechter Stab) ermöglicht die Messung des minimalen Schattens. Foto: regelmäßige Serie mit gleichem Bildausschnitt zur Visualisierung der saisonalen Variation; Sicherheit unverzichtbar, wenn die Scheibe ins Bild kommt (zertifizierter Filter oder indirekte Visierung).',
      url: '/?tl=1og5.uh1io0&lp=75&l=3413829&t=uhplc0&F=b&p=5&d=custom&k=1&f=2&b=8s6t&pl=n&sr=0.0167&dh=31.91',
      img : '/img/examples/export-sun-noon-reykjavik.jpg'
    },
    {
      label: 'Polarstern und Kreuz des Südens gleichzeitig sichtbar (Äquator)',
      desc: 'Bei ~0° Breitengrad streifen beide Himmelspole den Horizont: Polaris sehr niedrig im Norden, Crux streift den Süden je nach Jahreszeit. Die Felder drehen sich in entgegengesetzten Richtungen um ihre jeweiligen Pole. Beobachtung: bevorzugen Sie klare Nord-/Südhorizonte und eine klare Nacht (die Tagundnachtgleichen bieten oft einen guten Kompromiss). Turbulenz nahe dem Horizont kann die Schärfe beeinträchtigen. Foto: Zeitraffer oder Langzeitbelichtungen zur Darstellung der umgekehrten Rotation; Weitwinkel, um beide Horizonte einzuschließen; ohne Nachführung für Spuren, sonst kurze Belichtungen stapeln. Vergleichen Sie Momenthöhen und Rotationswinkel in der Simulation.',
      url: '/?tl=1og5.tczxg0&lp=75&lat=0.000000&lng=-80.712710&tz=America%2FGuayaquil&t=tdcw40&F=b&p=0&d=VM&z=vm173&b=8s7p&pl=n&sr=0.0167&da=-51.76&dh=89.9',
      img : '/img/examples/export-polaris-crux-equador.jpg'
    },
    {
      label: 'Ringförmige Sonnenfinsternis - Feuerring — 2024-10-02 (Pazifischer Ozean)',
      desc: 'Der Mond ist zu klein (Apogäum) und bedeckt die Sonne nicht vollständig: ein leuchtender Ring bleibt. Interesse: Dynamik der Ringkontakte und Sichelorientierung vor/nach. Beobachtung: Schutz OBLIGATORISCH kontinuierlich. Tipp: folgen Sie der Sonne, aktivieren Sie Horizont und Brechung für niedrige Horizontrahmung.',
      url: '/?tl=1iis.skq100&lp=5xc&g=3e1ery7k6&tz=America%2FSantiago&t=skqs9f&F=0&p=0&d=custom&k=1&f=kr&b=5z0n&pl=n&sr=1.0167',
      img: '/img/examples/export-eclipse-annulaire-2024.jpg'
    },
    {
      label: 'Die seltsame Bahn des Merkur',
      desc: 'Merkur, klein und nah an der Sonne, folgt der exzentrischsten (e ≈ 0,206) und geneigten (~7°) Bahn der inneren Planeten. Seine Geschwindigkeit variiert stark: er beschleunigt im Perihel und verlangsamt im Aphel. Planetare Störungen lassen seine Ellipse rotieren (Perihelpräzession) und die allgemeine Relativitätstheorie fügt 43″/Jahrhundert hinzu — Schlüssel, der das von der Newtonschen Mechanik hinterlassene "Mysterium" löste. Der Zeitraffer "ein Punkt pro Tag mittags" zeigt seine Ost-/Westelongationen (synodische Periode ~116 d), die Höhe, die sich mit der Jahreszeit und der Ekliptikneigung ändert, und asymmetrische Schleifen aufgrund der Exzentrizität. Beobachtungstipp: flüchtiger Planet, sichtbar nahe dem Horizont in der Dämmerung oder bei Morgendämmerung bei großen Elongationen; aktivieren Sie Ekliptik und Brechung in der Simulation — und schauen Sie niemals ohne Schutz in die Sonne.',
      url: '/?tl=1og5.t5ieo0&lp=5xd&l=2988507&t=t5z2o0&F=0&p=5&d=custom&k=1&f=r&b=35vp&pl=1&sr=1.0167',
      img: '/img/examples/export-mercury-dance.jpg'
    },
    {
      label: 'Sonnenfinsternis vom 29. Mai 1919, Bestätigung der allgemeinen Relativitätstheorie',
      desc: 'An diesem Tag, während einer totalen Sonnenfinsternis, die von der Insel Príncipe (Golf von Guinea) und Sobral (Brasilien) aus beobachtet wurde, maßen die von Arthur Eddington geleiteten Teams die Ablenkung des Sternenlichts, das nahe der Sonne vorbeilief. Die beobachtete Ablenkungsmenge entsprach der Vorhersage von Einsteins allgemeiner Relativitätstheorie und nicht der der Newtonschen Physik. Dies wurde als erste große experimentelle Bestätigung seiner Theorie angesehen und machte Einstein weltberühmt.',
      url: '/?tl=1og4.-qelao0&lp=5xc&g=s0m1ryjyn&tz=Africa%2FMalabo&t=-qel6g4&F=0&p=5&d=custom&k=1&f=1k&b=2t6v&pl=n&sr=2.0167',
      img: '/img/examples/export-eclipse-eddington-1919.jpg'
    },
    {
      label: '(Fast) Mitternachtssonne — 21. Juni (Jyväskylä - Finnland)',
      desc: 'Jenseits des Polarkreises bleibt die Sonne zur Sommersonnenwende 24 Stunden über dem Horizont. In dieser finnischen Stadt geht die Sonne am 21. Juni (im Norden) um 2:30 Uhr auf und (im Norden) um 23:00 Uhr unter. Den ganzen Tag über dreht sich die Sonne um Sie herum.',
      url: '/?tl=7apt.tgyag0&lp=5xd&l=655194&t=tgyc2c&F=9&p=0&d=VM&z=vm173&b=9hcl&pl=n&sr=2.0167&dh=89.9',
      img: '/img/examples/export-sun-path-north-finland.jpg'
    },
    {
      label: '(Fast) Mitternachtssonne — 21. Juni (Jyväskylä - Finnland) - Horizontansicht',
      desc: 'Eine weitere Ansicht der Sonne, die am 21. Juni in Jyväskylä, Finnland, scheinbar um uns herumzudrehen scheint, jenseits des Polarkreises, wo die Sonne zur Sommersonnenwende 24 Stunden über dem Horizont bleibt. In dieser finnischen Stadt geht die Sonne am 21. Juni (im Norden) um 2:30 Uhr auf und (im Norden) um 23:00 Uhr unter. Den ganzen Tag über dreht sich die Sonne um Sie herum.',
      url: '/?tl=7aps.tgyc2c&lp=5xd&l=655194&t=tgyhou&F=0&p=5&d=custom&k=1&f=7&b=9hh1&pl=n&sr=30.0167&dh=-20.61',
      img: '/img/examples/export-sun-path-north-finland-2.jpg'
    },
    {
      label: 'Polarnacht — 21. Dezember (Jyväskylä - Finnland)',
      desc: 'Jenseits des Polarkreises bleibt die Sonne zur Wintersonnenwende 24 Stunden unter dem Horizont. In dieser finnischen Stadt geht die Sonne am 21. Dezember (im Süden) um 9:00 Uhr auf und (im Süden) um 15:00 Uhr unter. Dieser kurze Tag wird eigentlich nur ein langer Sonnenauf- und -untergang sein.',
      url: '/?tl=7apt.tqdvg0&lp=5xd&l=655194&t=tqdxj0&F=b&p=0&d=custom&k=1&f=r&b=9hdh&pl=n&sr=2.0167',
      img: '/img/examples/export-sun-path-south-finland.jpg'
    },
    {
      label: 'Sonnen-Analemma über 1 Jahr (Quito)',
      desc: 'Die "8"-Form resultiert aus der Obliquität (23,44°) und der Zeitgleichung. Interesse: Sonnenposition zur wahren Mittagszeit je nach Datum. Simulieren Sie einen festen Punkt: gleicher Ort, gleiche Zeit jeden Tag (Zeitraffer Tag), Recti-Panini-Projektion.',
      url: '/?tl=1og5.wer5w0&lp=5xd&l=3652462&t=ts9b80&F=b&p=0&d=custom&k=1&f=1&b=9nsl&pl=n&sr=30.0167&da=-34.73&dh=89.9',
      img: '/img/examples/export-sun-noon-8-quito.jpg'
    },
    {
      label: 'Venus–Jupiter-Konjunktion — 2025-08-25 (Paris)',
      desc: 'Spektakuläre morgendliche Annäherung. Interesse: Helligkeitsunterschied, Bahn auf der Ekliptik, niedrige Höhe. Folgen Sie Venus dann Jupiter, aktivieren Sie die Ekliptik und vergleichen Sie verschiedene Brennweiten (Weitwinkel vs. Tele).',
      url: '/?tl=1og4.ts9b80&lp=5xc&l=2988507&t=t0v4g0&F=5&p=0&d=oeil&z=human&b=94vr&pl=a&sr=30.0167&dh=-10.89',
      img: '/img/examples/export-venus-jupiter-conjonction-2025.jpg'
    },
    {
      label: 'Venus–Jupiter-Konjunktion — 2025-08-25 (Paris) - Teleobjektiv',
      desc: 'Spektakuläre morgendliche Annäherung. Interesse: Helligkeitsunterschied, Bahn auf der Ekliptik, niedrige Höhe. Folgen Sie Venus dann Jupiter, aktivieren Sie die Ekliptik und vergleichen Sie verschiedene Brennweiten (Weitwinkel vs. Tele).',
      url: '/?tl=1og4.ts9b80&lp=5xc&l=2988507&t=t0v4g0&F=5&p=0&d=custom&k=1&f=7r&b=al13&pl=a&sr=30.0167&da=0.37&dh=-0.4',
      img: '/img/examples/export-venus-jupiter-conjonction-zoomed-2025.jpg'
    },
    {
      label: 'Venus–Jupiter-Konjunktion — 2025-08-25 (Paris) - Animation',
      desc: 'Spektakuläre morgendliche Annäherung. In dieser Version ist der Boden transparent und die Objekte vergrößert.',
      url: '/?tl=sd8h.t0qzdc&lp=5xc&l=2988507&t=t0r8mo&F=5&p=0&d=custom&k=1&f=9k&b=f5z&pl=a&sr=30.0167',
      img: '/img/examples/export-venus-jupiter-conjonction-timelapse-2025.jpg'
    },
    {
      label: 'Mars-Opposition — 2035-09 (Sydney)',
      desc: 'Mars ist näher und heller, seine scheinbare Größe kulminiert. Interesse: rückläufige Schleife um die Opposition vor dem Sternenhintergrund. Simulieren Sie mehrere Wochen (Zeitraffer Tag), Ekliptik EIN, vergleichen Sie die Kulminationshöhe.',
      url: '/?tl=uit0jp.y7axg0&lp=5xc&l=2147714&t=y7ghg0&F=4&p=0&d=custom&k=1&f=1&b=2hg7&pl=a&sr=30.0167',
      img: '/img/examples/export-mars-opposition-sydney-2035.jpg'
    },
    {
      label: 'Mars-Opposition — 2035-09 mit Astro-Teleskop (wahre Größe)',
      desc: 'Mars ist näher und heller, seine scheinbare Größe kulminiert. Interesse: rückläufige Schleife um die Opposition vor dem Sternenhintergrund. Simulieren Sie mehrere Wochen (Zeitraffer Tag), Ekliptik EIN, vergleichen Sie die Kulminationshöhe.',
      url: '/?tl=uit0jp.y7ghg0&lp=5xc&l=2147714&t=yb9is0&F=4&p=0&d=astro-1inch&z=sct-6-1500&b=24t3&pl=a&sr=30.0167',
      img: '/img/examples/export-mars-opposition-sydney-astrocam-2035.jpg'
    },
    {
      label: 'Merkurtransit — 2032-11-13 (London)',
      desc: 'Merkur zieht vor der Sonne vorbei: winzige dunkle Scheibe. Interesse: Chrono der Kontakte, Orientierung auf der Sonnenscheibe. Beobachtung: absolute Sicherheit (zertifizierter Filter). In der App folgen Sie der Sonne und zoomen Sie stark.',
      url: '/?tl=3wn4.wt6xma&lp=5xc&l=2643743&t=wt6tqv&F=0&p=0&d=custom&k=1&f=35w&b=9hg7&pl=a&sr=2.0167&dh=0.11',
      img: '/img/examples/export-mercury-transit-london-2032.jpg'
    },
    {
      label: 'Vollmond-Aufgang im Perigäum — 2026-11-24 (New York) - Echtzeit am Smartphone',
      desc: 'Vollmond nahe dem Perigäum: Scheibe etwas größer. Interesse: Größentäuschungen am Horizont und Perspektivkompression mit Teleobjektiv. Aktivieren Sie die Brechung, rahmen Sie ein urbanes Wahrzeichen ein und simulieren Sie Minute für Minute.',
      url: '/?tl=uit0jk.tp0z3k&lp=5xc&l=5128581&t=tp0zab&F=1&p=5&d=galaxy-s21u&z=sd30&b=5z03&pl=a&sr=0.0167',
      img: '/img/examples/export-pleine-lune-perigee-new-york-2026.jpg'
    },
    {
      label: 'Mondlibration (NASA-Stil)',
      desc: 'Der Mond "kippt" und "atmet" (Librationen in Länge/Breite). Die NASA nutzt Satellitenfotos, um dies zu zeigen. In dieser Anwendung platzieren wir uns am Nordpol, machen die Erde transparent und richten unser Smartphone an der Ekliptik aus. Wir machen alle 28 Tage (Mondtag) ein Foto über mehrere Jahre...',
      url: '/?tl=v2s7bh.t52l80&lp=5xc&g=upcrvxb65&tz=Etc%2FUTC&t=vo7rks&F=1&p=5&d=galaxy-s21u&z=sd30&b=dl3&pl=a&sr=360',
      webm: '/img/examples/video-moon-libration.webm'
    },
    {
      label: 'Saturn-Libration',
      desc: 'Saturn zeigt uns nicht immer dasselbe Gesicht: seine Achse ist um 27° geneigt und seine Position relativ zur Erde variiert. Durch Kombination dieser beiden Effekte sehen wir abwechselnd die Nord- und Südhalbkugel sowie die Ringe unter verschiedenen Winkeln. In dieser Anwendung platzieren wir uns am Nordpol, machen die Erde transparent und richten unser Smartphone an der Ekliptik aus. Wir machen alle Sterntag (23h56m) ein Foto über mehrere Jahre...',
      url: '/?tl=ebk5.ol9ojc&lp=5xc&g=upcrvxb65&tz=Etc%2FUTC&t=s3t8jc&F=6&p=0&d=nikon-p1000&z=p1000-2000eq&b=e85&pl=g&sr=0.0167',
      webm: '/img/examples/video-saturn-libration.webm'
    },
    {
      label: 'Milchstraße und Kreuz des Südens — südlicher Winter (Atacama)',
      desc: 'Außergewöhnlich dunkler Himmel: galaktisches Band, Crux und der "Kohlensack". Interesse: Höhe des galaktischen Zentrums und Feldrotation. Verwenden Sie Weitwinkel, Atmosphäre AUS für neutralen Himmel, Gitter EIN für Höhen.',
      url: '/?tl=v2s7b4.vo7rks&lp=5xc&l=3899539&t=sy6bjw&F=b&p=0&d=custom&k=1&f=1&b=6odx&pl=n&sr=5.0167&dh=37.84',
      img: '/img/examples/export-crux-atacama.jpg'
    },
    {
      label: 'Warum heißen "Planeten" so?',
      desc: 'Der Begriff "Planet" stammt vom griechischen "planetes", was "Wanderer" bedeutet. Dies bezieht sich auf die Bewegung der Planeten relativ zu den Fixsternen. Unsere Vorfahren brauchten Jahrhunderte, um diese komplexen Bewegungen zu verstehen (und schließlich zu erkennen, dass die Sonne das Zentrum des Systems ist), insbesondere die von der Erde aus beobachteten rückläufigen Schleifen (wenn der Planet verlangsamt und rückwärts geht, bevor er seinen Kurs fortsetzt). In der Anwendung machen wir jeden Sterntag ein Foto (wenn sich unsere Position alle 23h 56m 4s wieder an denselben Sternen ausrichtet). Wir beobachten dann die Bewegungen der Planeten relativ zu den Fixsternen und heben ihre "wandernde" Natur hervor.',
      url: '/?tl=-teqghl.s6l39p&lp=5xc&l=3110876&t=s793kh&F=9&p=0&d=VM&z=vm173&b=9hec&pl=a&sr=-6.9833&da=34.73&dh=89.9',
      img: '/img/examples/export-planetes-errantes.jpg'
    },
    {
      label: 'Die Sonne im Zentrum',
      desc: 'Unsere Vorfahren brauchten Jahrhunderte zum Verstehen: Heliozentrismus (der die Sonne ins Zentrum der Planeten stellt) und Relativität (die den Raum durch die Sonnenmasse krümmt). Mit dieser Anwendung werden diese beiden Phänomene intuitiv: wir müssen nur den Boden transparent machen, zur Sonne zeigen und über mehrere Jahre jeden Tag ein Foto machen. Man sieht deutlich die Anziehung der Sonne auf die Planeten und die Krümmung ihrer Bahnen in Sinuskurven.',
      url: '/?tl=-6z.uikx40.1e.1.15o&lp=5xd&l=524901&t=usgh40&F=0&p=0&d=custom&k=1&f=1&b=5z0l&pl=u&sr=214.852&dh=-14.19',
      img: '/img/examples/export-planet-dance.jpg'
    },
    {
      label: 'Die Sonne im Zentrum (5 Jahre in 30 Sekunden)',
      desc: 'Nach demselben Prinzip (ein Foto pro Tag, ohne Boden oder Atmosphäre) ist hier ein mit der Anwendung produziertes Video.<br/> Legen Sie los und erstellen Sie Ihre eigenen Animationen!!!!',
      url: '/?tl=1iit.usgh40&lp=5xc&l=2988507&t=wad7s0&F=0&p=0&d=custom&k=1&f=1&b=5z2d&pl=a&sr=214.852',
      webm: '/img/examples/video-sun-dance.webm'
    },

  ];

  return (
    <article>
      <h1 className="text-xl font-bold">Einige Simulationen und Beispiele</h1>
      <p>
        Öffnen Sie jeden Link, um ihn mit realen Beobachtungen zu vergleichen. Die Parameter (Ort, Datum/UTC-Zeit,
        verfolgte Ziel, Projektion, FOV) sind in der URL codiert.
      </p>

      {examples.map((ex) => (
        <div key={ex.label} className="mb-8">
          <h2 className="text-lg font-semibold mb-4">{ex.label}</h2>

          <div className="info-content-margins flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0 md:w-80">
              {ex.img && (
                <img
                  src={ex.img}
                  alt={ex.label}
                  className="w-full h-auto object-cover rounded block"
                  style={{ margin:0 }}
                />
              )}
              {ex.webm && (
                <video
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full h-auto rounded-md border border-black/10 shadow-sm"
                >
                  <source src={ex.webm} type="video/webm" />
                  Ihr Browser unterstützt die Wiedergabe von WebM-Videos nicht.
                </video>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="mb-4">
                {renderDesc(ex.desc)}
              </div>
              <a
                href={ex.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Simulation öffnen
              </a>
            </div>
          </div>
        </div>
      ))}

      <p className="text-gray-500 text-sm mt-2">

      </p>
    </article>
  );
}
