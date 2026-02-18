import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useLanguageFromPath } from '../../../../hooks/useLanguageFromPath';
const FlatEarthSimulator = lazy(() => import('./FlatEarthSimulator/FlatEarthSimulator'));

// ErrorBoundary simple para capturar un error de montaje Canvas/Lazy
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
          <div>Ocurrió un error al cargar el simulador.</div>
          <button onTouchEnd={(e) => { e.preventDefault(); this.props.onRetry?.(); }} onClick={this.props.onRetry} style={{ marginTop: 10 }}>Reintentar</button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function FlatEarthTabEs() {
  const [reloadKey, setReloadKey] = useState(0);
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);
  const { currentLanguage } = useLanguageFromPath();

  // Verificación de orientación móvil vertical y horizontal
  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 1239; // Punto de quiebre móvil
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

  // Precarga del módulo para evitar "arranque en frío" en lazy loading
  useEffect(() => {
    import('./FlatEarthSimulator/FlatEarthSimulator').catch(() => {});
  }, []);

  return (
    <article>
      <h1>Explorando modelos de la Tierra: una invitación a observar</h1>

      <h2>Modelos de Tierra plana - Lo que explican... y lo que no</h2>

      <p style={{ fontWeight: 'bold', backgroundColor: '#7a0000', color: '#ffffff', padding: '12px 16px', borderRadius: '6px', lineHeight: 1.5 }}>
        Un simulador de Tierra plana está disponible más abajo en esta página. Pero antes de
        usarlo, lee la página para entender cómo usarlo y por qué el simulador está a tu disposición.</p>

      <h3>El modelo básico: la Tierra disco</h3>
      <p>
        Algunas personas no pueden aceptar que la Tierra sea esférica. Piensan que la Tierra es plana, ¿y cómo culparlas?
        Cuando miramos nuestros pies y extendemos los brazos, eso es lo que nos dicen nuestros sentidos.
        Para estas personas, la Tierra es como un gran panqueque.
      </p>
      <p>
        La imagen más común de una Tierra plana se ve así: un disco plano con el Polo Norte en el
        centro (como el eje de una rueda de bicicleta) y la Antártida (Polo Sur) formando un muro de hielo
        alrededor del borde (como la llanta de esa rueda).</p>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', margin: '16px 0', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 360px', minWidth: '280px' }}>

        <p>En este modelo:</p>
          <ul style={{ marginRight: '0',}}>
            <li><strong>El Sol y la Luna</strong> serían pequeñas esferas (unos 50 km de diámetro) circulando sobre la Tierra, a unos 5000 km de altura</li>
            <li><strong>El día y la noche</strong> se explican en este modelo porque el Sol actúa como un foco: solo ilumina un área limitada del disco</li>
            <li><strong>Las estaciones</strong> ocurren porque el Sol cambia de círculo: circula más cerca del centro en verano y más cerca del borde en invierno</li>
            <li><strong>Las estrellas</strong> estarían fijadas en una cúpula (o serían pequeños agujeros) que rodea la Tierra</li>
          </ul>
        </div>
        <figure style={{ marginLeft: '0', marginRight: '5rem', flex: '0 0 320px', maxWidth: '420px' }}>
          <img
            src="/img/flatearth/fe.png"
            alt="Imagen clásica de una Tierra plana"
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
          />
          <figcaption style={{ fontSize: '0.9em', color: '#aaa', marginTop: '6px' }}>
            <small>El modelo de Tierra plana más común.</small>
          </figcaption>
        </figure>
      </div>

      <h3>Lo que la Tierra plana explica aproximadamente</h3>
      <ul>
        <li><strong>El horizonte plano</strong>: Cuando miras el océano, efectivamente parece plano. Pero este modelo tiene dificultades para explicar por qué no puedes ver la otra orilla del océano (por ejemplo, Brasil desde África o Londres desde la Torre Eiffel). Incluso con telescopios ultra potentes, no puedes ver más allá del horizonte.</li>
        <li><strong>Zonas horarias</strong>: Diferentes áreas del disco
        se iluminan en diferentes momentos. Puede ser de día en Nueva York y de
        noche en Tokio al mismo tiempo. Esto funciona "más o menos", pero veremos que con una Tierra plana no siempre es tan preciso como con una Tierra esférica.</li>
        <li><strong>Sombras al mediodía</strong>: Las sombras no siempre tienen la misma longitud según nuestra posición en la Tierra. Esto lo "sabemos" desde
         hace más de 2000 años. En Egipto, Eratóstenes ya había notado que:
        <br/>- En Siena (hoy Asuán), en el sur de Egipto, en el solsticio de verano (21 de junio) al mediodía, el Sol estaba directamente sobre su cabeza — su vara no proyectaba ninguna sombra
        <br/>- En Alejandría, 800 km más al norte, al mismo tiempo, los objetos proyectaban una sombra que se podía medir y con la que se podía hacer geometría para calcular muchas cosas
        <br/>Por lo tanto, calculó que solo podía haber dos geometrías posibles:
          <ul>
              <li> O la Tierra era esférica y el Sol realmente muy lejos (millones de km)</li>
              <li> O la Tierra era plana y el Sol estaba cerca (unos 5000 km)</li>
            </ul>
            Es por eso que los "terraplanistas" nos dicen que el Sol está a 5000 km sobre nosotros, y los "globotierristas" nos dicen que está a 150 millones de km. En ambos casos, las sombras pueden explicarse.
         </li>

      </ul>

      <h2>¿Desde cuándo se piensa que la Tierra es esférica?</h2>

      <h3>Los antiguos griegos: los primeros detectives</h3>

      <p><strong>Hacia 500 a.C. - Pitágoras</strong>: Este matemático (¡sí, el del teorema!) nota que los barcos desaparecen primero con el casco en el horizonte, luego las velas. ¡Como si bajaran una colina invisible!</p>

      <p><strong>Hacia 350 a.C. - Aristóteles</strong>: Recopila las pruebas:</p>
      <ul>
        <li>La sombra de la Tierra en la Luna durante los eclipses siempre es redonda</li>
        <li>Se ven diferentes estrellas cuando se viaja hacia el norte o el sur</li>
        <li>Todos los cuerpos celestes (Luna, planetas) son esferas, ¿por qué no la Tierra?</li>
      </ul>

      <p><strong>Hacia 240 a.C. - Eratóstenes</strong>: ¡El campeón! Calcula la circunferencia de la Tierra solo con varas y sombras. En Siena (hoy Asuán), el Sol ilumina el fondo de los pozos al mediodía el día del solsticio de verano. El mismo día en Alejandría, 800 km más al norte, los objetos proyectan una sombra. Midiendo el ángulo de esta sombra (7,2°), calcula: 7,2° es 1/50 de un círculo, entonces la Tierra es 50 × 800 = 40,000 km de circunferencia. ¡Bingo! ¡Esa es la respuesta correcta!</p>

      <h3>La Edad Media: ¡nunca se creyó que la Tierra fuera plana!</h3>

      <p><strong>Contrariamente al mito</strong>, los eruditos medievales sabían que la Tierra era redonda:</p>

      <p><strong>Beda el Venerable (673-735)</strong>: Este monje inglés explica las mareas por la atracción de la Luna y describe la Tierra como una esfera.</p>

      <p><strong>Al-Biruni (973-1048)</strong>: Este erudito persa recalcula el radio de la Tierra y obtiene 6339,6 km (el verdadero: 6371 km). ¡No está mal para la época!</p>

      <p><strong>Tomás de Aquino (1225-1274)</strong>: El mayor filósofo medieval usa la esfericidad de la Tierra como ejemplo de una verdad científica obvia.</p>

      <h3>Los grandes descubrimientos: prueba por viaje</h3>

      <p><strong>1519-1522 - Magallanes</strong>: Su expedición circunnavega la Tierra por primera vez completamente. Parten hacia el oeste y regresan desde el este. </p>

      <p><strong>Los navegantes</strong>: Todos usan las estrellas para navegar. La altura de Polaris sobre el horizonte da directamente la latitud (distancia al norte del ecuador). ¡Esto solo funciona en una esfera!</p>

      <h3>La era moderna: las pruebas se acumulan</h3>

      <p><strong>1851 - Péndulo de Foucault</strong>: Este péndulo gigante muestra la rotación de la Tierra. Cambia la dirección de oscilación según la latitud. En el polo hace una rotación completa en 24 horas. En París en 32 horas. En el ecuador no gira. Exactamente lo que se esperaría de una esfera que gira.</p>

      <p><strong>Zonas horarias</strong>: Creadas en 1884, dividen la Tierra en 24 sectores. El Sol sale por el este y atraviesa 15° por hora (360° ÷ 24h). Esto se ajusta perfectamente a una Tierra esférica que gira.</p>

      <h3>Hoy: miles de pruebas independientes</h3>
      <ul>
        <li><strong>Satélites</strong>: Varios miles de satélites activos (incluyendo megaconstelaciones), operados por docenas de países</li>
        <li><strong>La ISS</strong>: Astronautas de 20 naciones la han visitado</li>
        <li><strong>GPS</strong>: Tu teléfono usa satélites en órbita y correcciones relativistas; este marco es incompatible con un modelo de Tierra plana sin órbitas</li>
        <li><strong>Aerolíneas</strong>: Ahorran millones en combustible mediante rutas de "círculo máximo" (el camino más corto en una esfera)</li>
        <li><strong>Radioaficionados</strong>: Millones de entusiastas se comunican rebotando ondas desde la ionosfera (capa atmosférica)</li>
      </ul>

      <p><strong>Conclusión del capítulo</strong>: Entonces no es "solo la NASA" la que afirma que la Tierra es esférica. Es toda la humanidad, desde hace 2500 años, a través de todas las culturas, todos los países, todas las épocas.</p>

      <h2>Lo que la Tierra plana no explica en absoluto</h2>

      <p>Para permitirte probar todas las hipótesis de Tierra plana y posibles configuraciones, te ofrecemos este <strong>simulador de Tierra plana</strong>:</p>

      <p>Puedes probar todo tipo de combinaciones de tamaño, distancia e iluminación y también elegir la ciudad desde la que observas el cielo.</p>

        {/* Contenedor para el simulador con altura fija */}
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
            backgroundColor: '#0b1020', // fondo oscuro estable
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
                {currentLanguage === 'es'
                  ? 'Por favor, gira tu dispositivo al modo horizontal para ver el simulador'
                  : currentLanguage === 'de'
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
                  ⏳ Cargando simulador 3D...
                </div>
              }>
                <FlatEarthSimulator key={reloadKey} />
              </Suspense>
            </ErrorBoundary>
          )}
        </div>


      <p>Si usas este simulador y lo comparas con lo que puedes observar en la realidad (o con lo que te da el simulador de "Tierra esférica" de SpaceView), verás que hay muchas cosas que no se pueden explicar en una Tierra plana.</p>

      <h3>La puesta de sol</h3>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', margin: '16px 0', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 360px', minWidth: '280px' }}>
          <p style={{ marginRight: 0}}>En una
          Tierra esférica se ve claramente que el Sol sale por el este y se pone por el
          oeste (a veces un poco al sur, a veces un poco al norte). En una Tierra plana es difícil explicar
          por qué el Sol desaparece bajo el horizonte.
          El simulador nos muestra que si estuviéramos en una Tierra plana, sin importar cómo coloques el Sol o desde dónde mires,
          el Sol circularía en el cielo, viniendo del noreste hacia el noroeste. El simulador muestra que en una Tierra plana el Sol
          se alejaría de nosotros por la tarde, parecería cada vez más pequeño, se acercaría al horizonte
           (debido a la perspectiva), pero nunca tocaría el horizonte.</p>
          <p style={{ marginRight: 0 }}>
            Además, en tal modelo, el tamaño aparente del Sol debería variar considerablemente durante el día.
            Sin embargo, las observaciones muestran un tamaño casi constante (~0,53°), lo que contradice este escenario.
          </p>
        </div>
        <figure className="info-content-margins-right" style={{ marginTop : 0, flex: '0 0 320px', maxWidth: '420px' }}>
          <img
            src="/img/flatearth/fe-sun-to-north.png"
            alt="Trayectoria solar esperada hacia el norte en un modelo de Tierra plana"
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
          />
          <figcaption style={{ fontSize: '0.9em', color: '#aaa', marginTop: '6px' }}>
            <small>En un modelo de Tierra plana, el Sol se movería del noreste al noroeste.</small>
          </figcaption>
        </figure>
      </div>

      <h3>Zonas horarias</h3>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', margin: '16px 0', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 360px', minWidth: '280px' }}>
          <p style={{ marginRight: 0}}>Vimos que con el modelo de Tierra plana se puede explicar por qué puede ser de día en un lugar y de noche en otro lugar al mismo tiempo.
          <br/> Pero sin importar cuánto "juegues" con el simulador de Tierra plana, cambies el ancho del haz solar, modifiques su órbita o altura, no puedes "hacerlo bien".
          <br/>
          <br/> Por ejemplo,
          <br/> - El 21 de marzo de cada año a las 12:25, el Sol está exactamente sobre Kisangani, una gran ciudad (casi) en el ecuador en el centro de África.
          <br/> - Al mismo tiempo en Nueva York son las 6:25 y todavía está oscuro.&nbsp;
          <br/> - Al mismo tiempo en Porto Velho en Brasil son las 6:25 y el Sol acaba de salir.&nbsp;
          <br/>
          <a
            href='?tl=2i2o.t5d2ax&lp=5xc&l=3662762&t=stgybb&F=0&p=5&d=custom&k=1&f=3p&b=94vp&pl=n&sr=-82.675&pc=5128581.212730.3662762'
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            (Simulación en Tierra esférica)
          </a>
          </p>
        </div>
        <figure className="info-content-margins-right" style={{ marginTop : 0, marginBottom : 0, flex: '0 0 320px', maxWidth: '420px' }}>
          <img
            src="/img/capture/capture-earth-noon-at-congo.png"
            alt="En una Tierra esférica, la mitad del planeta está iluminada, y la otra mitad no"
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
          />
          <figcaption style={{ fontSize: '0.9em', color: '#aaa', marginTop: '6px' }}>
            <small>En una Tierra esférica, la mitad del planeta está iluminada, y la otra mitad no.</small>
          </figcaption>
        </figure>
      </div>

      <p >
        Bueno, con el simulador de Tierra plana es muy difícil encontrar una configuración donde esto funcione (de hecho, no lo logramos).
        <br/>Se puede ver que cuando el Sol está verticalmente sobre Kisangani (azul), iluminará Nueva York (rojo) mucho antes que Porto Velho (verde).
      </p>
        <figure className="info-content-margins" style={{ marginTop : 0, marginBottom : 0 }}>
          <img
            src="/img/flatearth/fe-noon-at-congo.png"
            alt="En una Tierra plana en marzo, el Sol sale en Nueva York antes que en el este de Brasil. En la vida real es al revés."
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
          />
          <figcaption style={{ fontSize: '0.9em', color: '#aaa', marginTop: '6px' }}>
            <small>En una Tierra plana en marzo, el Sol sale en Nueva York antes que en el este de Brasil. En la vida real es al revés.</small>
          </figcaption>
        </figure>
      <p>
        De hecho, en una Tierra plana iluminada por una "linterna", las zonas horarias y el círculo iluminado no coinciden.
         <br/>La razón es simple: el haz da una iluminación redonda, y las zonas horarias son triángulos en una Tierra plana.
      </p>

      <h3>La Luna</h3>
      <p>En una Tierra plana no deberías ver la misma imagen
       de la Luna dependiendo de dónde la observes (ya que los "terraplanistas" la teorizan a 5000 km
       de altura — y la Tierra plana mide 40,000 km de un extremo al otro), mientras
        que en el simulador SpaceView (y en la vida real) siempre ves la misma cara y
       la misma fase de la Luna sin importar dónde estés (ya que para los "globotierristas" la Luna está a casi 400,000 km).
       <br/>En una Tierra esférica también ves un efecto adicional: la Luna es la misma, pero la ves "girar" (hasta quedar "al revés")<br/>
       </p>
       <div
        className="info-content-margins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4"
        style={{ marginTop : 0 }}>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-application-moon-paris.jpg"
              alt="Simulación de la Luna vista desde París"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              La Luna vista desde París en una Tierra esférica
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-application-moon-cotonou.jpg"
              alt="Simulación de la Luna vista desde Cotonou"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Vista desde Cotonou (6400 km al sur de París) al mismo tiempo
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-application-moon-somalia.jpg"
              alt="Simulación de la Luna vista desde Somalia"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Vista desde Somalia (6000 km al este de Cotonou) al mismo tiempo
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-application-moon-madagascar.jpg"
              alt="Simulación de la Luna vista desde Madagascar"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Vista desde Madagascar (3000 km al sur de Somalia) al mismo tiempo

            </figcaption>
          </figure>
        </div>
        <p>En el simulador de Tierra plana, la Luna se ve desde un ángulo diferente cuando la observas desde un lugar diferente.</p>
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
              alt="Simulación de la Luna vista desde París en una Tierra plana"
              className="crop570x597 w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              La Luna vista desde París en una Tierra plana
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/flatearth/fe-moon-dakar.png"
              alt="Simulación de la Luna vista desde Dakar en una Tierra plana"
              className="crop570x597 w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Simulación de Tierra plana desde Dakar (4000 km al sur de París) al mismo tiempo
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/flatearth/fe-moon-mexico.png"
              alt="Simulación de la Luna vista desde México en una Tierra plana"
              className="crop570x597 w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Simulación de Tierra plana desde México (10000 km al oeste de París) al mismo tiempo
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/flatearth/fe-moon-rio.png"
              alt="Simulación de la Luna vista desde Río de Janeiro en una Tierra plana"
              className="crop570x597 w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Simulación de Tierra plana desde Río de Janeiro (8800 km al oeste de París) al mismo tiempo

            </figcaption>
          </figure>
        </div>

      <h3>Las estrellas</h3>
      <p>Con un modelo de Tierra plana es muy difícil explicar la existencia de dos polos celestes
      (alrededor de los cuales giran las estrellas) y el hecho de que los cielos de los hemisferios norte y sur son diferentes.
      Sin embargo, los observadores en Australia ven estrellas que son invisibles desde Europa.
      <br />Además, si haces un time-lapse de las estrellas en una Tierra plana, deberías verlas circular alrededor del "norte" sin importar desde dónde las observes, mientras que en una Tierra esférica ves las estrellas girar en sentido horario en el polo sur y en sentido antihorario en el polo norte.<br/>
      En estos videos creados en SpaceView también ves que cuando estás en el ecuador y miras al norte, giran en la dirección opuesta a cuando miras al sur.</p>
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
            Tu navegador no admite la reproducción de videos WebM.
          </video>
          <figcaption className="text-sm text-gray-500 mt-1">
            Time-lapse de estrellas visto desde Santiago de Surco en Perú, mirando al sur.
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
            Tu navegador no admite la reproducción de videos WebM.
          </video>
          <figcaption className="text-sm text-gray-500 mt-1">
            Time-lapse de estrellas visto desde Santiago de Surco en Perú, mirando al norte.
          </figcaption>
        </figure>
      </div>

      <h3>Eclipses solares</h3>
      <p>Durante los eclipses solares, la Luna pasa entre nosotros y el Sol.
      Entonces la Luna debe estar necesariamente más cerca de nosotros que el Sol.
      Esto es posible en el simulador de Tierra plana arriba, pero es complicado averiguar cómo colocar la Luna y el Sol para obtener eclipses como se observan desde diferentes lugares.
      <br/>Si lo intentas con el próximo eclipse (que será visible entre Europa y el norte de África el 12 de agosto de 2026):
      Las siguientes capturas (hechas con SpaceView) nos predicen cómo será el eclipse exactamente a las 20:32 (hora de París) desde diferentes lugares:
      <br/>
      </p>
      <div
        className="info-content-margins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4"
        style={{ marginTop : 0 }}>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-oslo.jpg"
              alt="Oslo, Noruega, el 12 de agosto de 2026 a las 20:32 (simulación SpaceView)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Oslo, Noruega, el 12 de agosto de 2026 a las 20:32 (simulación SpaceView)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-london.jpg"
              alt="Londres, Reino Unido, el 12 de agosto de 2026 a las 19:32 (hora local) (simulación SpaceView)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Londres, Reino Unido, el 12 de agosto de 2026 a las 19:32 (hora local) (simulación SpaceView)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-berlin.jpg"
              alt="Berlín, Alemania, el 12 de agosto de 2026 a las 20:32 (simulación SpaceView)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Berlín, Alemania, el 12 de agosto de 2026 a las 20:32 (simulación SpaceView)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-paris.jpg"
              alt="París, Francia, el 12 de agosto de 2026 a las 20:32 (simulación SpaceView)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              París, Francia, el 12 de agosto de 2026 a las 20:32 (simulación SpaceView)

            </figcaption>
          </figure>
        </div>
      <div
        className="info-content-margins grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-4"
        style={{ marginTop : 0 }}>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-madrid.jpg"
              alt="Madrid, España, el 12 de agosto de 2026 a las 20:32 (simulación SpaceView)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Madrid, España, el 12 de agosto de 2026 a las 20:32 (simulación SpaceView)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-Rabat.jpg"
              alt="Rabat, Marruecos, el 12 de agosto de 2026 a las 19:32 (hora local) (simulación SpaceView)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Rabat, Marruecos, el 12 de agosto de 2026 a las 19:32 (hora local) (simulación SpaceView)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-alger.jpg"
              alt="Argel, Argelia, el 12 de agosto de 2026 a las 19:32 (hora local) (simulación SpaceView)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Argel, Argelia, el 12 de agosto de 2026 a las 19:32 (hora local) (simulación SpaceView)
            </figcaption>
          </figure>
          <figure className="m-0">
            <img
              src="/img/capture/spaceview-eclipse-2026-dakar.jpg"
              alt="Dakar, Senegal, el 12 de agosto de 2026 a las 18:32 (hora local) (simulación SpaceView)"
              className="w-auto max-w-auto h-auto rounded-md border border-black/10 shadow-sm"

            />
            <figcaption className="text-sm text-gray-500 mt-1">
              Dakar, Senegal, el 12 de agosto de 2026 a las 18:32 (hora local) (simulación SpaceView)

            </figcaption>
          </figure>
        </div>
      <p>
        Estas 8 imágenes están simuladas (y pueden verificarse en el lugar) <strong>exactamente</strong> al mismo tiempo. Así que llama a tus amigos durante el eclipse y &nbsp;
      <a
        href="/?tl=2i2o.t5cuxn&lp=5xc&l=3117735&t=tjo65c&F=0&p=0&d=nikon-p1000&z=p1000-2000eq&b=94p3&pl=a&sr=0.0167&pc=3117735.2988507.2643743.2507480.2538475.2950159.2253354.3143244"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Compara con la simulación SpaceView (Tierra esférica)
      </a>
      <br/>Hasta ahora nadie ha encontrado una configuración de Tierra plana que pueda explicar todas estas imágenes simultáneamente.
      </p>
      <h3>Eclipses lunares</h3>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', margin: '16px 0', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 360px', minWidth: '280px' }}>
          <p style={{ marginRight: 0 }}>
          Durante los eclipses lunares, la Luna pasa "detrás de la Tierra" y atraviesa la sombra de nuestro planeta.
          Al principio y al final del eclipse, puedes ver la forma redondeada de nuestro planeta (el borde de la sombra).
          Esta es una de las pruebas más antiguas de la esfericidad de la Tierra (Aristóteles ya lo había notado en 350 a.C.).
          En una Tierra plana no se puede explicar por qué la sombra de la Tierra durante un eclipse lunar siempre es redonda.
          <br/>Además, la Luna se vuelve roja durante un eclipse lunar (debido a la dispersión de luz en la atmósfera terrestre).
          En una Tierra plana no se puede explicar por qué la Luna se vuelve roja durante un eclipse lunar.
          </p>
        </div>
        <figure style={{ marginLeft: '0', marginRight: '5rem', flex: '0 0 320px', maxWidth: '420px' }}>
          <img
            src="/img/examples/export-red-moon.jpg"
            alt="Fase de Luna roja de un eclipse lunar"
            loading="lazy"
            style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #333' }}
          />
          <figcaption style={{ fontSize: '0.9em', color: '#aaa', marginTop: '6px' }}>
            <small>Fase de Luna roja de un eclipse lunar.</small>
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
            Tu navegador no admite la reproducción de videos WebM.
          </video>
          <figcaption className="text-sm text-gray-500 mt-1">
            Inicio del eclipse lunar visto desde Australia. Se ve avanzar la sombra de la Tierra (duración real 38 minutos)
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
            Tu navegador no admite la reproducción de videos WebM.
          </video>
          <figcaption className="text-sm text-gray-500 mt-1">
            El mismo eclipse lunar visto desde Japón.
          </figcaption>
        </figure>
      </div>
      <p>

      <br/>Hasta ahora nadie ha encontrado una configuración de Tierra plana que pueda explicar tanto la sombra que aparece en la Luna en 30 a 40 minutos como el hecho de que no la veas en la misma orientación en los hemisferios norte y sur.  &nbsp;
      <a
        href='/?tl=3wn4.t2884e&lp=5xc&g=rhby8kxye&tz=Australia%2FDarwin&t=t287xz&F=1&p=0&d=custom&k=1&f=1fy&b=9hcf&pl=a&sr=2.0167'
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        Ver simulación en Tierra esférica
      </a>
      </p>

      <p>
        <a
          href="#flat-earth-simulator"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition"
          style={{color:'white'}}
        >
          Intentar de todos modos con el simulador de Tierra plana
        </a>
      </p>

      <h2>¿Y si fuera esférica?</h2>

      <p>La ciencia no significa creer ciegamente lo que te dicen. Significa observar, probar, verificar. Esta aplicación te da las herramientas. ¡Ahora te toca a ti! Compara lo que ves en la aplicación con el cielo real. Hazte preguntas. Busca explicaciones.</p>

      <p>Y recuerda: si la Tierra realmente fuera plana, se necesitaría una conspiración con millones de personas (científicos, pilotos, marineros, ingenieros...) de todos los países, desde hace siglos, sin que nadie haya vendido el secreto para hacerse rico y famoso.</p>

      <p>O... la Tierra simplemente es redonda, ¡y todo se vuelve simple! 🌍</p>

      <p><em>"Lo más hermoso de la ciencia es que funciona, creas en ella o no."</em> - Neil deGrasse Tyson</p>
    </article>
  );
}
