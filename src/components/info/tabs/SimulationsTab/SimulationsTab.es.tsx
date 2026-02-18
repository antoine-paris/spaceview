type Example = {
  label: string;
  desc?: string;
  url: string;            // ISO UTC
  img?: string;
  webm?: string;
};

// Convierte posibles <br/> en saltos de línea reales
function renderDesc(desc?: string) {
  if (!desc) return null;
  const parts = desc.split(/<br\s*\/?>/gi);
  return parts.flatMap((part, idx) =>
    idx < parts.length - 1 ? [part, <br key={idx} />] : [part]
  );
}

export default function SimulationsTabEs() {
  const examples: Example[] = [
    {
      label: 'Tránsito de Venus — 2012-06-05/06 (San Francisco)',
      desc: 'Un tránsito ocurre cuando Venus, cuya órbita está inclinada (~3,4°), pasa por un nodo mientras Tierra-Venus-Sol están perfectamente alineados. Los tránsitos aparecen en pares separados por 8 años, a su vez separados por ~105,5 o 121,5 años: por lo tanto, extremadamente raros. Visualmente, un pequeño disco negro cruza lentamente el Sol; se distinguen cuatro contactos (C1-C4) y a veces el efecto de "gota negra". Seguridad absoluta: nunca a simple vista; usar gafas de eclipse certificadas ISO 12312-2, filtro solar Astrosolar de apertura completa o proyección en pantalla (binoculares/telescopio). Para comparar con la simulación, anota la trayectoria en el disco solar y la orientación del campo. Foto: trípode, enfoque manual en el borde, ISO bajo, tiempos de exposición cortos; dispara a intervalos regulares para documentar el progreso; con un filtro H-alfa, la cromosfera y prominencias son visibles sin cambiar la geometría del tránsito.',
      url: '/?tl=2i2p.m55zs0&lp=74&l=5391959&t=m5608o&F=0&p=1&d=nikon-p1000&z=p1000-2000eq&b=aw1z&pl=2&sr=0.0167',
      img : '/img/examples/export-venus-transit-san-francisco-2012.jpg'
    },
    {
      label: 'Eclipse solar — 2026-08-12 (Madrid)',
      desc: 'Un eclipse solar ocurre cuando la Luna proyecta su sombra sobre la Tierra. En Madrid, la sombra central roza la ciudad: el eclipse es parcial al 99,9% (será total en Coruña, Bilbao, Zaragoza, Valencia y Palma de Mallorca, visible como un "mordisco" moviéndose sobre el Sol). La porción cubierta y la orientación de la media luna dependen de la geometría local y la hora. Seguridad: protección OBLIGATORIA continua (gafas ISO 12312-2, filtro solar en la óptica). Observación: sigue la inclinación de la media luna y la trayectoria aparente a través de varios FOVs/proyecciones; bajo los árboles, los huecos actúan como cámaras estenopeicas y proyectan medias lunas en el suelo. Foto: medición manual/puntual, ISO bajo, tiempos cortos; crea una serie temporal regular; en gran angular, encuadra el contexto urbano para contar la escena.',
      url: '/?tl=2i2p.tjo3a0&lp=5xc&l=6544494&t=tjo3ic&F=0&p=0&d=nikon-p1000&z=p1000-2000eq&b=9hc7&pl=a&sr=0.0167&da=0.15&dh=-0.04',
      img : '/img/examples/export-eclipse-madrid-2026.jpg'
    },
    {
      label: 'Eclipse solar total — 2024-04-08 (Dallas)',
      desc: 'En la banda de totalidad, la Luna cubre completamente el Sol durante varios minutos. Fases: C1 (primer contacto), C2 (entrada en totalidad, perlas de Baily, anillo de diamante), totalidad (corona, prominencias, cromosfera), C3 (fin de totalidad), C4 (último contacto). Atmósfera: caída de brillo/temperatura, estrellas/planetas visibles, vientos locales. Seguridad: filtro obligatorio antes de C2 y después de C3; retirar filtro solo durante la totalidad. Observación: preferir ubicación cerca del eje y horizonte despejado. Foto: gran bracketing (≈ 1/4000 s hasta ≈ 1 s) para cubrir perlas y corona extendida; enfoque en el borde; disparador remoto; usar una segunda cámara gran angular para horizonte y reacción del público.',
      url: '/?tl=2i2o.sbmvgc&lp=5xc&l=4684888&t=sbmw2b&F=0&p=0&d=nikon-p1000&z=p1000-1000eq&b=9hdz&pl=a&sr=3.0167&da=0.15&dh=-0.04',
      img : '/img/examples/export-eclipse-dallas-2024.jpg'
    },
    {
      label: 'Eclipse lunar total — 2025-09-08 (Australia)',
      desc: 'La Luna atraviesa la penumbra y luego la sombra de la Tierra (sombra central). En el máximo, se enrojece: la luz solar, refractada por la atmósfera, es filtrada por la dispersión de Rayleigh — la Luna ve simultáneamente todos los amaneceres y atardeceres del globo. El tinte/oscuridad varía con la transparencia atmosférica (escala Danjon). Observación: sin protección, a simple vista o con binoculares; un horizonte despejado es útil para salidas/puestas. Foto: durante la totalidad, muy poca luminosidad — intenta ≈ 1/4 a 2 s, ISO 400-1600, f/4-f/8 según distancia focal; fuera de la totalidad, volver a tiempos cortos. Compara orientación y velocidad del borde oscuro (sombra) con la simulación.',
      url: '/?tl=3wn4.t2884e&lp=5xc&g=rhby8kxye&tz=Australia%2FDarwin&t=t287xz&F=1&p=0&d=custom&k=1&f=1fy&b=9hcf&pl=a&sr=2.0167',
      img : '/img/examples/export-red-moon.jpg'
    },
    {
      label: 'Cruz del Sur — visibilidad austral (Santiago)',
      desc: 'Crux, pequeña pero muy contrastada, domina el cielo austral. Con α y β Centauri ("punteros"), permite localizar el polo celeste sur: extiende la barra grande ~4,5 veces y cruza con la bisectriz α-β Centauri. Estación/hora: cerca de Santiago, Crux es visible muchas noches y culmina en otoño austral; también encuentra el "Saco de Carbón" (nebulosa oscura). Observación: cielo oscuro, vista hacia el sur; aprende a leer la orientación de la cruz según hora/estación. Foto: gran angular, 10-20 s, ISO 1600-6400; para trazos, acumular varias exposiciones largas o usar seguimiento; compara altura y rotación en la simulación.',
      url: '/?tl=2i2o.skzd40&lp=74&l=3928245&t=slb67m&F=b&p=5&d=custom&k=1&f=2&b=8s7o&pl=n&sr=167.101&da=16.55&dh=33.48',
      img : '/img/examples/export-crux-santiago.jpg'
    },
    {
      label: 'Altura solar al mediodía en el solsticio (Reikiavik)',
      desc: 'La altura al mediodía verdadero sigue h ≈ 90° − |φ − δ| (φ latitud, δ declinación solar). En el solsticio de verano (δ ≈ +23,44°) cerca del círculo polar, el Sol permanece bajo incluso al mediodía y las sombras permanecen largas. El "mediodía verdadero" no siempre coincide con las 12:00 (ecuación del tiempo y zona horaria). Observación: usa la simulación para encontrar el momento exacto; un gnomon (vara vertical) permite medir la sombra mínima. Foto: serie regular con el mismo encuadre para visualizar la variación estacional; seguridad indispensable si el disco entra en el encuadre (filtro certificado o visión indirecta).',
      url: '/?tl=1og5.uh1io0&lp=75&l=3413829&t=uhplc0&F=b&p=5&d=custom&k=1&f=2&b=8s6t&pl=n&sr=0.0167&dh=31.91',
      img : '/img/examples/export-sun-noon-reykjavik.jpg'
    },
    {
      label: 'Polaris y Cruz del Sur simultáneamente visibles (Ecuador)',
      desc: 'A ~0° de latitud, ambos polos celestes rozan el horizonte: Polaris muy bajo al norte, Crux roza el sur según la estación. Los campos giran en direcciones opuestas alrededor de sus respectivos polos. Observación: preferir horizontes norte/sur despejados y noche clara (los equinoccios a menudo ofrecen un buen compromiso). La turbulencia cerca del horizonte puede afectar la nitidez. Foto: time-lapse o exposiciones largas para representar la rotación invertida; gran angular para incluir ambos horizontes; sin seguimiento para trazos, de lo contrario apilar exposiciones cortas. Compara alturas momentáneas y ángulos de rotación en la simulación.',
      url: '/?tl=1og5.tczxg0&lp=75&lat=0.000000&lng=-80.712710&tz=America%2FGuayaquil&t=tdcw40&F=b&p=0&d=VM&z=vm173&b=8s7p&pl=n&sr=0.0167&da=-51.76&dh=89.9',
      img : '/img/examples/export-polaris-crux-equador.jpg'
    },
    {
      label: 'Eclipse solar anular - Anillo de fuego — 2024-10-02 (Océano Pacífico)',
      desc: 'La Luna es demasiado pequeña (apogeo) y no cubre completamente el Sol: queda un anillo luminoso. Interés: dinámica de contactos anulares y orientación de la media luna antes/después. Observación: protección OBLIGATORIA continua. Consejo: sigue el Sol, activa horizonte y refracción para encuadre bajo en el horizonte.',
      url: '/?tl=1iis.skq100&lp=5xc&g=3e1ery7k6&tz=America%2FSantiago&t=skqs9f&F=0&p=0&d=custom&k=1&f=kr&b=5z0n&pl=n&sr=1.0167',
      img: '/img/examples/export-eclipse-annulaire-2024.jpg'
    },
    {
      label: 'La extraña trayectoria de Mercurio',
      desc: 'Mercurio, pequeño y cercano al Sol, sigue la órbita más excéntrica (e ≈ 0,206) e inclinada (~7°) de los planetas interiores. Su velocidad varía mucho: acelera en el perihelio y desacelera en el afelio. Las perturbaciones planetarias hacen rotar su elipse (precesión del perihelio) y la relatividad general agrega 43″/siglo — clave que resolvió el "misterio" dejado por la mecánica newtoniana. El time-lapse "un punto por día al mediodía" muestra sus elongaciones este/oeste (período sinódico ~116 d), la altura que cambia con la estación y la inclinación de la eclíptica, y bucles asimétricos debido a la excentricidad. Consejo de observación: planeta fugaz, visible cerca del horizonte al anochecer o al amanecer en grandes elongaciones; activa eclíptica y refracción en la simulación — y nunca mires al Sol sin protección.',
      url: '/?tl=1og5.t5ieo0&lp=5xd&l=2988507&t=t5z2o0&F=0&p=5&d=custom&k=1&f=r&b=35vp&pl=1&sr=1.0167',
      img: '/img/examples/export-mercury-dance.jpg'
    },
    {
      label: 'Eclipse del 29 de mayo de 1919, confirmación de la relatividad general',
      desc: 'Ese día, durante un eclipse solar total observado desde la isla de Príncipe (Golfo de Guinea) y Sobral (Brasil), los equipos dirigidos por Arthur Eddington midieron la deflexión de la luz estelar que pasaba cerca del Sol. La cantidad de deflexión observada correspondía a la predicción de la teoría de la relatividad general de Einstein y no a la de la física newtoniana. Esto fue considerado como la primera gran confirmación experimental de su teoría y convirtió a Einstein en mundialmente famoso.',
      url: '/?tl=1og4.-qelao0&lp=5xc&g=s0m1ryjyn&tz=Africa%2FMalabo&t=-qel6g4&F=0&p=5&d=custom&k=1&f=1k&b=2t6v&pl=n&sr=2.0167',
      img: '/img/examples/export-eclipse-eddington-1919.jpg'
    },
    {
      label: '(Casi) Sol de medianoche — 21 de junio (Jyväskylä - Finlandia)',
      desc: 'Más allá del círculo polar, en el solsticio de verano, el Sol permanece 24 horas sobre el horizonte. En esta ciudad finlandesa, el 21 de junio, el Sol sale (al norte) a las 2:30 y se pone (al norte) a las 23:00. Durante todo el día, el Sol gira a tu alrededor.',
      url: '/?tl=7apt.tgyag0&lp=5xd&l=655194&t=tgyc2c&F=9&p=0&d=VM&z=vm173&b=9hcl&pl=n&sr=2.0167&dh=89.9',
      img: '/img/examples/export-sun-path-north-finland.jpg'
    },
    {
      label: '(Casi) Sol de medianoche — 21 de junio (Jyväskylä - Finlandia) - Vista del horizonte',
      desc: 'Otra vista del Sol que parece girar a nuestro alrededor el 21 de junio en Jyväskylä, Finlandia, más allá del círculo polar donde el Sol permanece 24 horas sobre el horizonte en el solsticio de verano. En esta ciudad finlandesa, el 21 de junio, el Sol sale (al norte) a las 2:30 y se pone (al norte) a las 23:00. Durante todo el día, el Sol gira a tu alrededor.',
      url: '/?tl=7aps.tgyc2c&lp=5xd&l=655194&t=tgyhou&F=0&p=5&d=custom&k=1&f=7&b=9hh1&pl=n&sr=30.0167&dh=-20.61',
      img: '/img/examples/export-sun-path-north-finland-2.jpg'
    },
    {
      label: 'Noche polar — 21 de diciembre (Jyväskylä - Finlandia)',
      desc: 'Más allá del círculo polar, en el solsticio de invierno, el Sol permanece 24 horas bajo el horizonte. En esta ciudad finlandesa, el 21 de diciembre, el Sol sale (al sur) a las 9:00 y se pone (al sur) a las 15:00. Este corto día será en realidad solo un largo amanecer y atardecer.',
      url: '/?tl=7apt.tqdvg0&lp=5xd&l=655194&t=tqdxj0&F=b&p=0&d=custom&k=1&f=r&b=9hdh&pl=n&sr=2.0167',
      img: '/img/examples/export-sun-path-south-finland.jpg'
    },
    {
      label: 'Analema solar durante 1 año (Quito)',
      desc: 'La forma de "8" resulta de la oblicuidad (23,44°) y la ecuación del tiempo. Interés: posición solar al mediodía verdadero según la fecha. Simula un punto fijo: mismo lugar, misma hora cada día (time-lapse día), proyección Recti-Panini.',
      url: '/?tl=1og5.wer5w0&lp=5xd&l=3652462&t=ts9b80&F=b&p=0&d=custom&k=1&f=1&b=9nsl&pl=n&sr=30.0167&da=-34.73&dh=89.9',
      img: '/img/examples/export-sun-noon-8-quito.jpg'
    },
    {
      label: 'Conjunción Venus-Júpiter — 2025-08-25 (París)',
      desc: 'Espectacular aproximación matutina. Interés: diferencia de brillo, trayectoria en la eclíptica, altura baja. Sigue Venus luego Júpiter, activa la eclíptica y compara varias distancias focales (gran angular vs. tele).',
      url: '/?tl=1og4.ts9b80&lp=5xc&l=2988507&t=t0v4g0&F=5&p=0&d=oeil&z=human&b=94vr&pl=a&sr=30.0167&dh=-10.89',
      img: '/img/examples/export-venus-jupiter-conjonction-2025.jpg'
    },
    {
      label: 'Conjunción Venus-Júpiter — 2025-08-25 (París) - Teleobjetivo',
      desc: 'Espectacular aproximación matutina. Interés: diferencia de brillo, trayectoria en la eclíptica, altura baja. Sigue Venus luego Júpiter, activa la eclíptica y compara varias distancias focales (gran angular vs. tele).',
      url: '/?tl=1og4.ts9b80&lp=5xc&l=2988507&t=t0v4g0&F=5&p=0&d=custom&k=1&f=7r&b=al13&pl=a&sr=30.0167&da=0.37&dh=-0.4',
      img: '/img/examples/export-venus-jupiter-conjonction-zoomed-2025.jpg'
    },
    {
      label: 'Conjunción Venus-Júpiter — 2025-08-25 (París) - Animación',
      desc: 'Espectacular aproximación matutina. En esta versión, el suelo es transparente y los objetos están ampliados.',
      url: '/?tl=sd8h.t0qzdc&lp=5xc&l=2988507&t=t0r8mo&F=5&p=0&d=custom&k=1&f=9k&b=f5z&pl=a&sr=30.0167',
      img: '/img/examples/export-venus-jupiter-conjonction-timelapse-2025.jpg'
    },
    {
      label: 'Oposición de Marte — 2035-09 (Sídney)',
      desc: 'Marte está más cerca y más brillante, su tamaño aparente culmina. Interés: bucle retrógrado alrededor de la oposición ante el fondo estelar. Simula varias semanas (time-lapse día), eclíptica ACTIVADA, compara la altura de culminación.',
      url: '/?tl=uit0jp.y7axg0&lp=5xc&l=2147714&t=y7ghg0&F=4&p=0&d=custom&k=1&f=1&b=2hg7&pl=a&sr=30.0167',
      img: '/img/examples/export-mars-opposition-sydney-2035.jpg'
    },
    {
      label: 'Oposición de Marte — 2035-09 con telescopio astro (tamaño real)',
      desc: 'Marte está más cerca y más brillante, su tamaño aparente culmina. Interés: bucle retrógrado alrededor de la oposición ante el fondo estelar. Simula varias semanas (time-lapse día), eclíptica ACTIVADA, compara la altura de culminación.',
      url: '/?tl=uit0jp.y7ghg0&lp=5xc&l=2147714&t=yb9is0&F=4&p=0&d=astro-1inch&z=sct-6-1500&b=24t3&pl=a&sr=30.0167',
      img: '/img/examples/export-mars-opposition-sydney-astrocam-2035.jpg'
    },
    {
      label: 'Tránsito de Mercurio — 2032-11-13 (Londres)',
      desc: 'Mercurio pasa frente al Sol: minúsculo disco oscuro. Interés: cronología de contactos, orientación en el disco solar. Observación: seguridad absoluta (filtro certificado). En la aplicación, sigue el Sol y aumenta mucho el zoom.',
      url: '/?tl=3wn4.wt6xma&lp=5xc&l=2643743&t=wt6tqv&F=0&p=0&d=custom&k=1&f=35w&b=9hg7&pl=a&sr=2.0167&dh=0.11',
      img: '/img/examples/export-mercury-transit-london-2032.jpg'
    },
    {
      label: 'Salida de Luna llena en perigeo — 2026-11-24 (Nueva York) - Tiempo real en smartphone',
      desc: 'Luna llena cerca del perigeo: disco ligeramente más grande. Interés: ilusiones de tamaño en el horizonte y compresión de perspectiva con teleobjetivo. Activa la refracción, encuadra un monumento urbano y simula minuto a minuto.',
      url: '/?tl=uit0jk.tp0z3k&lp=5xc&l=5128581&t=tp0zab&F=1&p=5&d=galaxy-s21u&z=sd30&b=5z03&pl=a&sr=0.0167',
      img: '/img/examples/export-pleine-lune-perigee-new-york-2026.jpg'
    },
    {
      label: 'Libración lunar (estilo NASA)',
      desc: 'La Luna "se balancea" y "respira" (libraciones en longitud/latitud). La NASA usa fotos satelitales para mostrarlo. En esta aplicación, nos colocamos en el Polo Norte, hacemos la Tierra transparente y alineamos nuestro smartphone con la eclíptica. Tomamos una foto cada 28 días (día lunar) durante varios años...',
      url: '/?tl=v2s7bh.t52l80&lp=5xc&g=upcrvxb65&tz=Etc%2FUTC&t=vo7rks&F=1&p=5&d=galaxy-s21u&z=sd30&b=dl3&pl=a&sr=360',
      webm: '/img/examples/video-moon-libration.webm'
    },
    {
      label: 'Libración de Saturno',
      desc: 'Saturno no siempre nos muestra la misma cara: su eje está inclinado 27° y su posición relativa a la Tierra varía. Al combinar estos dos efectos, vemos alternativamente el hemisferio norte y sur, así como los anillos bajo diferentes ángulos. En esta aplicación, nos colocamos en el Polo Norte, hacemos la Tierra transparente y alineamos nuestro smartphone con la eclíptica. Tomamos una foto cada día sideral (23h56m) durante varios años...',
      url: '/?tl=ebk5.ol9ojc&lp=5xc&g=upcrvxb65&tz=Etc%2FUTC&t=s3t8jc&F=6&p=0&d=nikon-p1000&z=p1000-2000eq&b=e85&pl=g&sr=0.0167',
      webm: '/img/examples/video-saturn-libration.webm'
    },
    {
      label: 'Vía Láctea y Cruz del Sur — invierno austral (Atacama)',
      desc: 'Cielo excepcionalmente oscuro: banda galáctica, Crux y el "Saco de Carbón". Interés: altura del centro galáctico y rotación del campo. Usa gran angular, atmósfera DESACTIVADA para cielo neutral, cuadrícula ACTIVADA para alturas.',
      url: '/?tl=v2s7b4.vo7rks&lp=5xc&l=3899539&t=sy6bjw&F=b&p=0&d=custom&k=1&f=1&b=6odx&pl=n&sr=5.0167&dh=37.84',
      img: '/img/examples/export-crux-atacama.jpg'
    },
    {
      label: '¿Por qué se llaman "planetas"?',
      desc: 'El término "planeta" proviene del griego "planetes", que significa "errante". Esto se refiere al movimiento de los planetas en relación con las estrellas fijas. Nuestros ancestros tardaron siglos en comprender estos movimientos complejos (y finalmente reconocer que el Sol es el centro del sistema), especialmente los bucles retrógrados observados desde la Tierra (cuando el planeta desacelera y retrocede antes de continuar su curso). En la aplicación, tomamos una foto cada día sideral (cuando nuestra posición se realinea con las mismas estrellas cada 23h 56m 4s). Observamos entonces los movimientos de los planetas en relación con las estrellas fijas y destacamos su naturaleza "errante".',
      url: '/?tl=-teqghl.s6l39p&lp=5xc&l=3110876&t=s793kh&F=9&p=0&d=VM&z=vm173&b=9hec&pl=a&sr=-6.9833&da=34.73&dh=89.9',
      img: '/img/examples/export-planetes-errantes.jpg'
    },
    {
      label: 'El Sol en el centro',
      desc: 'Nuestros ancestros tardaron siglos en comprender: el heliocentrismo (que coloca al Sol en el centro de los planetas) y la relatividad (que curva el espacio por la masa solar). Con esta aplicación, estos dos fenómenos se vuelven intuitivos: solo tenemos que hacer el suelo transparente, apuntar al Sol y tomar una foto cada día durante varios años. Se ve claramente la atracción del Sol sobre los planetas y la curvatura de sus órbitas en sinusoides.',
      url: '/?tl=-6z.uikx40.1e.1.15o&lp=5xd&l=524901&t=usgh40&F=0&p=0&d=custom&k=1&f=1&b=5z0l&pl=u&sr=214.852&dh=-14.19',
      img: '/img/examples/export-planet-dance.jpg'
    },
    {
      label: 'El Sol en el centro (5 años en 30 segundos)',
      desc: 'Siguiendo el mismo principio (una foto por día, sin suelo ni atmósfera), aquí hay un video producido con la aplicación.<br/> ¡Adelante, crea tus propias animaciones!',
      url: '/?tl=1iit.usgh40&lp=5xc&l=2988507&t=wad7s0&F=0&p=0&d=custom&k=1&f=1&b=5z2d&pl=a&sr=214.852',
      webm: '/img/examples/video-sun-dance.webm'
    },

  ];

  return (
    <article>
      <h1 className="text-xl font-bold">Algunas simulaciones y ejemplos</h1>
      <p>
        Abre cada enlace para compararlo con observaciones reales. Los parámetros (ubicación, fecha/hora UTC,
        objetivo seguido, proyección, FOV) están codificados en la URL.
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
                  Tu navegador no admite la reproducción de videos WebM.
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
                Abrir simulación
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
