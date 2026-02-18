import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useLanguageFromPath } from '../../../../hooks/useLanguageFromPath';
const FlatEarthSimulator = lazy(() => import('./FlatEarthSimulator/FlatEarthSimulator'));

// Einfache ErrorBoundary zum Abfangen eines Canvas/Lazy-Montagefehlers
class ErrorBoundary extends React.Component<{ onRetry?: () => void; children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { onRetry?: () => void; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          height: '100%', color: '#fff', background: '#0b1020', flexDirection: 'column'
        }}>
          <div>Beim Laden des Simulators ist ein Fehler aufgetreten.</div>
          <button onTouchEnd={(e) => { e.preventDefault(); this.props.onRetry?.(); }} onClick={this.props.onRetry} style={{ marginTop: 10 }}>Erneut versuchen</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function FlatEarthTabDe() {
  const [reloadKey, setReloadKey] = useState(0);
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const { currentLanguage } = useLanguageFromPath();

  // Prüfung auf mobiles Hoch- und Querformat
  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 1239; // Mobile-Breakpoint
      const isPortrait = window.innerHeight > window.innerWidth;
      const isLandscape = window.innerWidth > window.innerHeight;
      setIsMobilePortrait(isMobile && isPortrait);
      setIsMobileLandscape(isMobile && isLandscape);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Modul vorladen, um "Kaltstart" beim Lazy Loading zu vermeiden
  useEffect(() => {
    import('./FlatEarthSimulator/FlatEarthSimulator').catch(() => {});
  }, []);

  return (
    <article>
      <h1>Erdmodelle erkunden: Eine Einladung zur Beobachtung</h1>

      <h2>Flache-Erde-Modelle - Was sie erklären... und was nicht</h2>

      <p style={{ fontWeight: 'bold', backgroundColor: '#7a0000', color: '#ffffff', padding: '12px 16px', borderRadius: '6px', lineHeight: 1.5 }}>
        Ein Flache-Erde-Simulator ist weiter unten auf dieser Seite verfügbar. Aber bevor Sie
        ihn verwenden, lesen Sie die Seite, um zu verstehen, wie man ihn benutzt und warum der Simulator Ihnen zur Verfügung steht.</p>

      <h3>Das Grundmodell: Die Scheiben-Erde</h3>
      <p>
        Einige Menschen können nicht akzeptieren, dass die Erde sphärisch ist. Sie denken, die Erde sei flach, und wie kann man es ihnen verübeln?
        Wenn wir auf unsere Füße schauen und die Arme ausbreiten, sagen uns das unsere Sinne.
        Für diese Menschen ist die Erde wie ein großer Pfannkuchen.
      </p>
      <p>
        Das verbreitetste Bild einer flachen Erde sieht so aus: eine flache Scheibe mit dem Nordpol in der
        Mitte (wie die Nabe eines Fahrradrads) und der Antarktis (Südpol), die eine Eiswand
        rundherum am Rand bildet (wie der Reifen dieses Rads).</p>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', margin: '16px 0', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 360px', minWidth: '280px' }}>

        <p>In diesem Modell:</p>
          <ul style={{ marginRight: '0',}}>
            <li><strong>Sonne und Mond</strong> wären kleine Kugeln (etwa 50 km Durchmesser), die im Kreis über der Erde kreisen, in etwa 5000 km Höhe</li>
            <li><strong>Tag und Nacht</strong> erklären sich in diesem Modell dadurch, dass die Sonne wie ein Scheinwerfer wirkt: sie beleuchtet nur einen begrenzten Bereich der Scheibe</li>
            <li><strong>Die Jahreszeiten</strong> entstehen, weil die Sonne den Kreis wechselt: sie kreist näher am Zentrum im Sommer und näher am Rand im Winter</li>
            <li><strong>Die Sterne</strong> wären an einer Kuppel befestigt (oder wären kleine Löcher), die die Erde umgibt</li>
          </ul>
        </div>
        <figure style={{ marginLeft: '0', marginRight: '5rem', flex: '0 0 320px', maxWidth: '420px' }}>
          <img
            src="/img/flatearth/fe.png"
            alt="Klassisches Bild einer flachen Erde"
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
          />
          <figcaption style={{ fontSize: '0.9em', color: '#aaa', marginTop: '6px' }}>
            <small>Das gängigste Flache-Erde-Modell.</small>
          </figcaption>
        </figure>
      </div>

      <h3>Was die flache Erde ungefähr erklärt</h3>
      <ul>
        <li><strong>Der flache Horizont</strong>: Wenn man auf den Ozean schaut, sieht er tatsächlich flach aus. Aber dieses Modell hat Schwierigkeiten zu erklären, warum man nicht das andere Ufer des Ozeans sehen kann (zum Beispiel Brasilien von Afrika aus oder London vom Eiffelturm aus). Selbst mit ultra-leistungsstarken Teleskopen sieht man nicht weiter als bis zum Horizont.</li>
        <li><strong>Zeitzonen</strong>: Verschiedene Bereiche der Scheibe
        werden zu verschiedenen Zeiten beleuchtet. Es kann in New York Tag und in
        Tokio Nacht sein zur gleichen Zeit. Das funktioniert "ungefähr", aber wir werden sehen, dass es mit einer flachen Erde nicht immer so genau ist wie mit einer sphärischen Erde.</li>
        <li><strong>Schatten am Mittag</strong>: Schatten haben nicht immer dieselbe Länge je nach unserer Position auf der Erde. Das "wissen" wir seit
         mehr als 2000 Jahren. In Ägypten hatte Eratosthenes bereits festgestellt, dass:
        <br/>- In Syene (heute Assuan), im Süden Ägyptens, stand die Sonne zur Sommersonnenwende (21. Juni) mittags direkt über seinem Kopf — sein Stab warf überhaupt keinen Schatten
        <br/>- In Alexandria, 800 km weiter nördlich, zur gleichen Zeit warfen Objekte einen Schatten, den man messen und mit dem man Geometrie betreiben konnte, um viele Dinge zu berechnen
        <br/>Er berechnete daher, dass es nur zwei mögliche Geometrien geben konnte:
          <ul>
              <li> Entweder war die Erde sphärisch und die Sonne wirklich sehr weit entfernt (Millionen von km)</li>
              <li> Oder die Erde war flach und die Sonne war nah (etwa 5000 km)</li>
            </ul>
            Das ist der Grund, warum uns "Flacherdler" sagen, dass die Sonne 5000 km über uns ist, und "Kugelerdler" uns sagen, dass sie 150 Millionen km entfernt ist. In beiden Fällen können Schatten erklärt werden.
         </li>

      </ul>

      <h2>Seit wann denkt man, dass die Erde sphärisch ist?</h2>

      <h3>Die alten Griechen: die ersten Detektive</h3>

      <p><strong>Um 500 v. Chr. - Pythagoras</strong>: Dieser Mathematiker (ja, der vom Satz!) bemerkt, dass Schiffe zuerst mit dem Rumpf am Horizont verschwinden, dann die Segel. Als ob sie einen unsichtbaren Hügel hinuntergingen!</p>

      <p><strong>Um 350 v. Chr. - Aristoteles</strong>: Er sammelt die Beweise:</p>
      <ul>
        <li>Der Erdschatten auf dem Mond während Finsternissen ist immer rund</li>
        <li>Man sieht verschiedene Sterne, wenn man nach Norden oder Süden reist</li>
        <li>Alle Himmelskörper (Mond, Planeten) sind Kugeln, warum nicht die Erde?</li>
      </ul>

      <p><strong>Um 240 v. Chr. - Eratosthenes</strong>: Der Champion! Er berechnet den Erdumfang nur mit Stöcken und Schatten! In Syene (heute Assuan) beleuchtet die Sonne den Boden der Brunnen mittags am Tag der Sommersonnenwende. Am selben Tag in Alexandria, 800 km weiter nördlich, werfen Objekte einen Schatten. Durch Messung des Winkels dieses Schattens (7,2°) berechnet er: 7,2° ist 1/50 eines Kreises, also ist die Erde 50 × 800 = 40.000 km im Umfang. Bingo! Das ist die richtige Antwort!</p>

      <h3>Das Mittelalter: man hat nie geglaubt, dass die Erde flach war!</h3>

      <p><strong>Entgegen dem Mythos</strong> wussten mittelalterliche Gelehrte, dass die Erde rund war:</p>

      <p><strong>Beda Venerabilis (673-735)</strong>: Dieser englische Mönch erklärt die Gezeiten durch die Anziehung des Mondes und beschreibt die Erde als Kugel.</p>

      <p><strong>Al-Biruni (973-1048)</strong>: Dieser persische Gelehrte berechnet den Erdradius neu und erhält 6339,6 km (der wahre: 6371 km). Nicht schlecht für die Zeit!</p>

      <p><strong>Thomas von Aquin (1225-1274)</strong>: Der größte mittelalterliche Philosoph verwendet die Kugelförmigkeit der Erde als Beispiel für eine offensichtliche wissenschaftliche Wahrheit.</p>

      <h3>Die großen Entdeckungen: Beweis durch Reise</h3>

      <p><strong>1519-1522 - Magellan</strong>: Seine Expedition umrundet die Erde zum ersten Mal vollständig. Sie fahren nach Westen ab und kehren von Osten zurück. </p>

      <p><strong>Die Seefahrer</strong>: Alle nutzen die Sterne zur Navigation. Die Höhe des Polarsterns über dem Horizont gibt direkt den Breitengrad (Entfernung nördlich vom Äquator). Das funktioniert nur auf einer Kugel!</p>

      <h3>Die Neuzeit: die Beweise häufen sich</h3>

      <p><strong>1851 - Foucaultsches Pendel</strong>: Dieses Riesenpendel zeigt die Erdrotation. Es ändert die Schwingungsrichtung je nach Breitengrad. Am Pol macht es in 24 Stunden eine volle Umdrehung. In Paris in 32 Stunden. Am Äquator dreht es sich nicht. Genau das, was man von einer sich drehenden Kugel erwartet!</p>

      <p><strong>Zeitzonen</strong>: 1884 geschaffen, teilen sie die Erde in 24 Scheiben. Die Sonne geht im Osten auf und durchläuft 15° pro Stunde (360° ÷ 24h). Das passt perfekt zu einer sich drehenden sphärischen Erde.</p>

      <h3>Heute: Tausende unabhängiger Beweise</h3>
      <ul>
        <li><strong>Satelliten</strong>: Mehrere tausend aktive Satelliten (einschließlich Mega-Konstellationen), betrieben von Dutzenden von Ländern</li>
        <li><strong>Die ISS</strong>: Astronauten aus 20 Nationen haben sie besucht</li>
        <li><strong>GPS</strong>: Ihr Telefon verwendet Satelliten im Orbit und relativistische Korrekturen; dieser Rahmen ist unvereinbar mit einem Flache-Erde-Modell ohne Orbits</li>
        <li><strong>Fluggesellschaften</strong>: Sie sparen Millionen an Treibstoff durch "Großkreis"-Routen (der kürzeste Weg auf einer Kugel)</li>
        <li><strong>Funkamateure</strong>: Millionen von Enthusiasten kommunizieren, indem sie Wellen von der Ionosphäre (Atmosphärenschicht) zurückprallen lassen</li>
      </ul>

      <p><strong>Schlussfolgerung des Kapitels</strong>: Es ist also nicht "nur die NASA", die behauptet, dass die Erde sphärisch ist. Es ist die gesamte Menschheit, seit 2500 Jahren, durch alle Kulturen, alle Länder, alle Epochen!</p>

      <h2>Was die flache Erde überhaupt nicht erklärt</h2>

      <p>Um Ihnen zu ermöglichen, alle Hypothesen der flachen Erde und mögliche Einstellungen auszuprobieren, bieten wir Ihnen diesen <strong>Flache-Erde-Simulator</strong> an:</p>

      <p>Sie können alle Arten von Kombinationen aus Größe, Entfernung und Beleuchtung ausprobieren und auch die Stadt wählen, von der aus Sie den Himmel beobachten.</p>

        {/* Container für den Simulator mit fester Höhe */}
        <div
          id="flat-earth-simulator"
          style={{
            width: '100%',
            height: isMobileLandscape ? '300px' : '580px',
            position: 'relative',
            border: '2px solid #333',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px',
            backgroundColor: '#0b1020', // stabiler dunkler Hintergrund
          }}>
          {isMobilePortrait ? (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: '18px',
              color: '#fff',
              background: '#0b1020',
              textAlign: 'center',
              padding: '20px',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <div style={{ fontSize: '48px' }}>📱↻</div>
              <div>
                {currentLanguage === 'de'
                  ? 'Bitte drehen Sie Ihr Gerät in den Querformatmodus, um den Simulator zu sehen'
                  : currentLanguage === 'fr'
                  ? 'Veuillez tourner votre appareil en mode paysage pour voir le simulateur'
                  : 'Please turn your device to landscape mode to see the simulator'
                }
              </div>
            </div>
          ) : (
            <ErrorBoundary onRetry={() => setReloadKey(k => k + 1)}>
              <Suspense fallback={
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  fontSize: '20px',
                  color: '#fff',
                  background: '#0b1020',
                }}>
                  ⏳ Lade 3D-Simulator...
                </div>
              }>
                <FlatEarthSimulator key={reloadKey} />
              </Suspense>
            </ErrorBoundary>
          )}
        </div>


      <p>Wenn Sie diesen Simulator verwenden und ihn mit dem vergleichen, was Sie in der Realität beobachten können (oder was Ihnen der "sphärische Erde"-Simulator von SpaceView gibt), werden Sie sehen, dass es viele Dinge gibt, die man auf einer flachen Erde nicht erklären kann.</p>

      <h3>Der Sonnenuntergang</h3>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', margin: '16px 0', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 360px', minWidth: '280px' }}>
          <p style={{ marginRight: 0}}>Auf einer
          sphärischen Erde sieht man deutlich, dass die Sonne im Osten aufgeht und im
          Westen untergeht (manchmal etwas im Süden, manchmal etwas im Norden). Auf einer flachen Erde ist es schwierig zu erklären,
          warum die Sonne unter dem Horizont verschwindet.
          Der Simulator zeigt uns, dass wenn man auf einer flachen Erde wäre, egal wie man die Sonne platziert oder von wo man schaut,
          die Sonne am Himmel kreisen würde, von Nordosten nach Nordwesten kommend. Der Simulator zeigt, auf einer flachen Erde würde sich die Sonne nachmittags
          von uns entfernen, immer kleiner erscheinen, sich dem Horizont nähern
           (aufgrund der Perspektive), aber niemals den Horizont berühren.</p>
          <p style={{ marginRight: 0 }}>
            Darüber hinaus sollte in einem solchen Modell die scheinbare Größe der Sonne im Laufe des Tages erheblich variieren.
            Beobachtungen zeigen jedoch eine nahezu konstante Größe (~0,53°), was diesem Szenario widerspricht.
          </p>
        </div>
        <figure className="info-content-margins-right" style={{ marginTop : 0, flex: '0 0 320px', maxWidth: '420px' }}>
          <img
            src="/img/flatearth/fe-sun-to-north.png"
            alt="Erwartete Sonnenbahn nach Norden auf einem Flache-Erde-Modell"
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
          />
          <figcaption style={{ fontSize: '0.9em', color: '#aaa', marginTop: '6px' }}>
            <small>Auf einem Flache-Erde-Modell würde sich die Sonne von Nordosten nach Nordwesten bewegen.</small>
          </figcaption>
        </figure>
      </div>

      <h3>Zeitzonen</h3>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', margin: '16px 0', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 360px', minWidth: '280px' }}>
          <p style={{ marginRight: 0}}>Wir haben gesehen, dass mit dem Flache-Erde-Modell erklärt werden kann, warum es an einem Ort Tag und an einem anderen Ort Nacht sein kann zur gleichen Zeit.
          <br/> Aber egal wie viel man mit dem Flache-Erde-Simulator "spielt", die Breite des Sonnenstrahls ändert, seine Umlaufbahn oder Höhe modifiziert, man kann es nicht "richtig hinbekommen".
          <br/>
          <br/> Zum Beispiel,
          <br/> - Am 21. März jedes Jahres um 12:25 Uhr steht die Sonne genau über Kisangani, einer großen Stadt (fast) am Äquator mitten in Afrika.
          <br/> - Zur gleichen Zeit in New York ist es 6:25 Uhr und es ist noch dunkel.&nbsp;
          <br/> - Zur gleichen Zeit in Porto Velho in Brasilien ist es 6:25 Uhr und die Sonne ist gerade aufgegangen.&nbsp;
          <br/>
          <a
            href='?tl=2i2o.t5d2ax&lp=5xc&l=3662762&t=stgybb&F=0&p=5&d=custom&k=1&f=3p&b=94vp&pl=n&sr=-82.675&pc=5128581.212730.3662762'
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            (Simulation auf sphärischer Erde)
          </a>
          </p>
        </div>
        <figure className="info-content-margins-right" style={{ marginTop : 0, marginBottom : 0, flex: '0 0 320px', maxWidth: '420px' }}>
          <img
            src="/img/capture/capture-earth-noon-at-congo.png"
            alt="Auf einer sphärischen Erde ist die Hälfte des Planeten beleuchtet, und die andere Hälfte nicht"
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
          />
          <figcaption style={{ fontSize: '0.9em', color: '#aaa', marginTop: '6px' }}>
            <small>Auf einer sphärischen Erde ist die Hälfte des Planeten beleuchtet, und die andere Hälfte nicht.</small>
          </figcaption>
        </figure>
      </div>

      <p >
        Nun, mit dem Flache-Erde-Simulator ist es sehr schwierig, eine Konfiguration zu finden, wo das funktioniert (tatsächlich haben wir es nicht geschafft).
        <br/>Man kann sehen, dass wenn die Sonne vertikal über Kisangani (blau) steht, sie New York (rot) viel früher beleuchten wird als Porto Velho (grün).
      </p>
        <figure className="info-content-margins" style={{ marginTop : 0, marginBottom : 0 }}>
          <img
            src="/img/flatearth/fe-noon-at-congo.png"
            alt="Auf einer flachen Erde im März geht die Sonne in New York vor dem Osten Brasiliens auf. Im wirklichen Leben ist es umgekehrt."
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
          />
          <figcaption style={{ fontSize: '0.9em', color: '#aaa', marginTop: '6px' }}>
            <small>Auf einer flachen Erde im März geht die Sonne in New York vor dem Osten Brasiliens auf. Im wirklichen Leben ist es umgekehrt.</small>
          </figcaption>
        </figure>
      <p>
        Tatsächlich stimmen auf einer flachen Erde, die von einer "Taschenlampe" beleuchtet wird, Zeitzonen und beleuchteter Kreis nicht überein.
         <br/>Der Grund ist einfach: der Strahl gibt eine runde Beleuchtung, und die Zeitzonen sind auf einer flachen Erde Dreiecke.
      </p>

      <h3>Der Mond</h3>
      <p>Auf einer flachen Erde sollte man nicht dasselbe Bild
       des Mondes sehen, je nachdem, von wo man ihn beobachtet (da "Flacherdler" ihn mit 5000 km
       Höhe theoretisieren — und die flache Erde 40.000 km von einem Ende zum anderen misst), während
        man auf dem SpaceView-Simulator (und im wirklichen Leben) immer dasselbe Gesicht und
       dieselbe Phase des Mondes sieht, egal wo man sich befindet (da für "Kugelerdler" der Mond fast 400.000 km entfernt ist).
       <br/>Auf einer sphärischen Erde sieht man auch einen zusätzlichen Effekt: der Mond ist derselbe, aber man sieht ihn sich "drehen" (bis er "kopfüber" steht)<br/>
       </p>
       <div
        className="info-content-margins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4"
        style={{ marginTop : 0 }}>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-application-moon-paris.jpg"
              alt="Simulation des Mondes von Paris aus gesehen"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Der Mond von Paris aus auf einer sphärischen Erde gesehen
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-application-moon-cotonou.jpg"
              alt="Simulation des Mondes von Cotonou aus gesehen"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Von Cotonou aus gesehen (6400 km südlich von Paris) zur gleichen Zeit
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-application-moon-somalia.jpg"
              alt="Simulation des Mondes von Somalia aus gesehen"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Von Somalia aus gesehen (6000 km östlich von Cotonou) zur gleichen Zeit
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-application-moon-madagascar.jpg"
              alt="Simulation des Mondes von Madagaskar aus gesehen"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Von Madagaskar aus gesehen (3000 km südlich von Somalia) zur gleichen Zeit

            </figcaption>
          </figure>
        </div>
        <p>Auf dem Flache-Erde-Simulator wird der Mond aus einem anderen Winkel gesehen, wenn man ihn von einem anderen Ort aus beobachtet.</p>
        <div
          className="info-content-margins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4"
          style={{ marginTop : 0 }}>
          <style>{`
            .crop570x597 {
              width: 100%;
              height: auto;
              aspect-ratio: 570 / 597;
              object-fit: cover;
              display: block;
            }
            @media (max-width: 620px) {
              .crop570x597 {
                width: 100%;
                height: auto;
                aspect-ratio: 570 / 597;
                object-fit: cover;
              }
            }
          `}</style>
          <figure className="m-0">
            <img
              src="/img/flatearth/fe-moon-paris.png"
              alt="Simulation des Mondes von Paris aus auf einer flachen Erde gesehen"
              className="crop570x597 w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Der Mond von Paris aus auf einer flachen Erde gesehen
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/flatearth/fe-moon-dakar.png"
              alt="Simulation des Mondes von Dakar aus auf einer flachen Erde gesehen"
              className="crop570x597 w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Flache-Erde-Simulation von Dakar aus (4000 km südlich von Paris) zur gleichen Zeit
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/flatearth/fe-moon-mexico.png"
              alt="Simulation des Mondes von Mexiko aus auf einer flachen Erde gesehen"
              className="crop570x597 w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Flache-Erde-Simulation von Mexiko aus (10000 km westlich von Paris) zur gleichen Zeit
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/flatearth/fe-moon-rio.png"
              alt="Simulation des Mondes von Rio de Janeiro aus auf einer flachen Erde gesehen"
              className="crop570x597 w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Flache-Erde-Simulation von Rio de Janeiro aus (8800 km westlich von Paris) zur gleichen Zeit

            </figcaption>
          </figure>
        </div>

      <h3>Die Sterne</h3>
      <p>Mit einem Flache-Erde-Modell ist es sehr schwierig, die Existenz zweier Himmelspole
      (um die sich die Sterne drehen) und die Tatsache zu erklären, dass die Himmel der Nord- und Südhalbkugel unterschiedlich sind.
      Dennoch sehen Beobachter in Australien Sterne, die von Europa aus unsichtbar sind!
      <br />Außerdem sollte man, wenn man einen Zeitraffer der Sterne auf einer flachen Erde macht, sie um den "Norden" kreisen sehen, egal von wo man sie beobachtet, während man auf einer sphärischen Erde die Sterne im Uhrzeigersinn am Südpol drehen sieht und gegen den Uhrzeigersinn am Nordpol.<br/>
      In diesen auf SpaceView erstellten Videos sieht man auch, dass wenn man am Äquator ist und nach Norden schaut, sie sich in die entgegengesetzte Richtung drehen als wenn man nach Süden schaut.</p>
      <div className="info-content-margins" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
        <figure style={{ margin: 0, flex: '1 1 320px', maxWidth: '40%' }} className="fe-star-video">
          <video
            autoPlay
            muted
            loop
            preload="metadata"
            playsInline
            className="w-auto max-w-full h-auto rounded-md border border-black/10 shadow-sm"
          >
            <source src="/img/flatearth/fe-stars-1.webm" type="video/webm" />
            Ihr Browser unterstützt die Wiedergabe von WebM-Videos nicht.
          </video>
          <figcaption className="text-sm text-gray-500 mt-1">
            Zeitraffer der Sterne von Santiago de Surco in Peru aus gesehen, nach Süden schauend.
          </figcaption>
        </figure>
        <figure style={{ margin: 0, flex: '1 1 320px', maxWidth: '40%' }} className="fe-star-video">
          <video
            autoPlay
            muted
            loop
            preload="metadata"
            playsInline
            className="w-auto max-w-full h-auto rounded-md border border-black/10 shadow-sm"
          >
            <source src="/img/flatearth/fe-stars-2.webm" type="video/webm" />
            Ihr Browser unterstützt die Wiedergabe von WebM-Videos nicht.
          </video>
          <figcaption className="text-sm text-gray-500 mt-1">
            Zeitraffer der Sterne von Santiago de Surco in Peru aus gesehen, nach Norden schauend.
          </figcaption>
        </figure>
      </div>

      <h3>Sonnenfinsternisse</h3>
      <p>Bei Sonnenfinsternissen zieht der Mond zwischen uns und der Sonne vorbei.
      Also muss der Mond zwangsläufig näher an uns sein als die Sonne.
      Das ist im Flache-Erde-Simulator oben möglich, aber es ist kompliziert herauszufinden, wie man Mond und Sonne platziert, um Finsternisse so zu erhalten, wie man sie von verschiedenen Orten aus beobachtet.
      <br/>Wenn man es mit der nächsten Finsternis versucht (die am 12. August 2026 zwischen Europa und Nordafrika sichtbar sein wird):
      Die folgenden Aufnahmen (mit SpaceView gemacht) sagen uns voraus, wie die Finsternis genau um 20:32 Uhr (Pariser Zeit) von verschiedenen Orten aus sein wird:
      <br/>
      </p>
      <div
        className="info-content-margins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4"
        style={{ marginTop : 0 }}>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-oslo.jpg"
              alt="Oslo, Norwegen, am 12. August 2026 um 20:32 Uhr (SpaceView-Simulation)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Oslo, Norwegen, am 12. August 2026 um 20:32 Uhr (SpaceView-Simulation)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-london.jpg"
              alt="London, UK, am 12. August 2026 um 19:32 Uhr (Ortszeit) (SpaceView-Simulation)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              London, UK, am 12. August 2026 um 19:32 Uhr (Ortszeit) (SpaceView-Simulation)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-berlin.jpg"
              alt="Berlin, Deutschland, am 12. August 2026 um 20:32 Uhr (SpaceView-Simulation)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Berlin, Deutschland, am 12. August 2026 um 20:32 Uhr (SpaceView-Simulation)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-paris.jpg"
              alt="Paris, Frankreich, am 12. August 2026 um 20:32 Uhr (SpaceView-Simulation)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Paris, Frankreich, am 12. August 2026 um 20:32 Uhr (SpaceView-Simulation)

            </figcaption>
          </figure>
        </div>
      <div
        className="info-content-margins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4"
        style={{ marginTop : 0 }}>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-madrid.jpg"
              alt="Madrid, Spanien, am 12. August 2026 um 20:32 Uhr (SpaceView-Simulation)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Madrid, Spanien, am 12. August 2026 um 20:32 Uhr (SpaceView-Simulation)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-Rabat.jpg"
              alt="Rabat, Marokko, am 12. August 2026 um 19:32 Uhr (Ortszeit) (SpaceView-Simulation)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Rabat, Marokko, am 12. August 2026 um 19:32 Uhr (Ortszeit) (SpaceView-Simulation)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-alger.jpg"
              alt="Algier, Algerien, am 12. August 2026 um 19:32 Uhr (Ortszeit) (SpaceView-Simulation)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Algier, Algerien, am 12. August 2026 um 19:32 Uhr (Ortszeit) (SpaceView-Simulation)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-dakar.jpg"
              alt="Dakar, Senegal, am 12. August 2026 um 18:32 Uhr (Ortszeit) (SpaceView-Simulation)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Dakar, Senegal, am 12. August 2026 um 18:32 Uhr (Ortszeit) (SpaceView-Simulation)

            </figcaption>
          </figure>
        </div>
      <p>
        Diese 8 Bilder sind simuliert (und können vor Ort überprüft werden) <strong>genau</strong> zur gleichen Zeit. Rufen Sie also Ihre Freunde während der Finsternis an und &nbsp;
      <a
        href="/?tl=2i2o.t5cuxn&lp=5xc&l=3117735&t=tjo65c&F=0&p=0&d=nikon-p1000&z=p1000-2000eq&b=94p3&pl=a&sr=0.0167&pc=3117735.2988507.2643743.2507480.2538475.2950159.2253354.3143244"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Vergleichen Sie mit der SpaceView-Simulation (sphärische Erde)
      </a>
      <br/>Bisher hat niemand eine Flache-Erde-Konfiguration gefunden, die all diese Bilder gleichzeitig erklären kann.
      </p>
      <h3>Mondfinsternisse</h3>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', margin: '16px 0', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 360px', minWidth: '280px' }}>
          <p style={{ marginRight: 0 }}>
          Bei Mondfinsternissen zieht der Mond "hinter die Erde" und durchquert den Schatten unseres Planeten.
          Am Anfang und Ende der Finsternis kann man die abgerundete Form unseres Planeten (den Schattenrand) sehen.
          Dies ist einer der ältesten Beweise für die Kugelförmigkeit der Erde (Aristoteles hatte es bereits 350 v. Chr. bemerkt).
          Auf einer flachen Erde kann man nicht erklären, warum der Erdschatten während einer Mondfinsternis immer rund ist.
          <br/>Darüber hinaus wird der Mond während einer Mondfinsternis rot (aufgrund der Lichtstreuung in der Erdatmosphäre).
          Auf einer flachen Erde kann man nicht erklären, warum der Mond während einer Mondfinsternis rot wird.
          </p>
        </div>
        <figure style={{ marginLeft: '0', marginRight: '5rem', flex: '0 0 320px', maxWidth: '420px' }}>
          <img
            src="/img/examples/export-red-moon.jpg"
            alt="Rotmondphase einer Mondfinsternis"
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
          />
          <figcaption style={{ fontSize: '0.9em', color: '#aaa', marginTop: '6px' }}>
            <small>Rotmondphase einer Mondfinsternis.</small>
          </figcaption>
        </figure>
      </div>
      <div className="info-content-margins" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
        <figure style={{ margin: 0, flex: '1 1 320px', maxWidth: '40%' }} className="fe-star-video">
          <video
            autoPlay
            muted
            loop
            preload="metadata"
            playsInline
            className="w-auto max-w-full h-auto rounded-md border border-black/10 shadow-sm"
          >
            <source src="/img/capture/video-moon-eclipse-australia.webm" type="video/webm" />
            Ihr Browser unterstützt die Wiedergabe von WebM-Videos nicht.
          </video>
          <figcaption className="text-sm text-gray-500 mt-1">
            Beginn der Mondfinsternis von Australien aus gesehen. Man sieht den Erdschatten vorrücken (tatsächliche Dauer 38 Minuten)
          </figcaption>
        </figure>
        <figure style={{ margin: 0, flex: '1 1 320px', maxWidth: '40%' }} className="fe-star-video">
          <video
            autoPlay
            muted
            loop
            preload="metadata"
            playsInline
            className="w-auto max-w-full h-auto rounded-md border border-black/10 shadow-sm"
          >
            <source src="/img/capture/video-moon-eclipse-japan.webm" type="video/webm" />
            Ihr Browser unterstützt die Wiedergabe von WebM-Videos nicht.
          </video>
          <figcaption className="text-sm text-gray-500 mt-1">
            Dieselbe Mondfinsternis von Japan aus gesehen.
          </figcaption>
        </figure>
      </div>
      <p>

      <br/>Bisher hat niemand eine Flache-Erde-Konfiguration gefunden, die sowohl den Schatten, der in 30 bis 40 Minuten auf dem Mond erscheint, als auch die Tatsache erklären kann, dass man ihn nicht in der nördlichen und südlichen Hemisphäre in derselben Ausrichtung sieht.  &nbsp;
      <a
        href='/?tl=3wn4.t2884e&lp=5xc&g=rhby8kxye&tz=Australia%2FDarwin&t=t287xz&F=1&p=0&d=custom&k=1&f=1fy&b=9hcf&pl=a&sr=2.0167'
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Siehe Simulation auf sphärischer Erde
      </a>
      </p>

      <p>
        <a
          href="#flat-earth-simulator"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
          style={{color:'white'}}
        >
          Trotzdem mit dem Flache-Erde-Simulator versuchen
        </a>
      </p>

      <h2>Und wenn sie sphärisch wäre?</h2>

      <p>Wissenschaft bedeutet nicht, blind zu glauben, was man dir sagt. Es bedeutet zu beobachten, zu testen, zu überprüfen. Diese Anwendung gibt dir die Werkzeuge. Jetzt bist du dran! Vergleiche, was du in der Anwendung siehst, mit dem echten Himmel. Stelle dir Fragen. Suche nach Erklärungen.</p>

      <p>Und denke daran: Wenn die Erde wirklich flach wäre, bräuchte es eine Verschwörung mit Millionen von Menschen (Wissenschaftler, Piloten, Seeleute, Ingenieure...) aus allen Ländern, seit Jahrhunderten, ohne dass jemand die Bohne verkauft, um reich und berühmt zu werden.</p>

      <p>Oder... die Erde ist einfach rund, und alles wird einfach! 🌍</p>

      <p><em>"Das Schönste an der Wissenschaft ist, dass sie funktioniert, egal ob du daran glaubst oder nicht."</em> - Neil deGrasse Tyson</p>
    </article>
  );
}
