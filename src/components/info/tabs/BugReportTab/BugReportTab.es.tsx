export default function BugReportTabEs() {
  return (
    <article>
      <h1>Informar un error</h1>
      <p>
        Gracias por ayudar a mejorar la aplicación. Un buen informe incluye la URL compartible (parámetros codificados), una captura de pantalla
        y si es posible una foto en el lugar que muestre la desviación.
      </p>

      <h2>Pasos</h2>
      <ol>
        <li>
          Abrir un ticket: <a href="https://github.com/antoine-paris/spaceview/issues" target="_blank" rel="noopener noreferrer">Nuevo issue en GitHub</a>.
        </li>
        <li>
          Describir el contexto: navegador (versión), sistema operativo, dispositivo, tamaño de ventana o Device Pixel Ratio, si es relevante.
        </li>
        <li>
          Adjuntar captura de pantalla de la aplicación (botón cámara) y, si es posible, una foto correspondiente del cielo.
        </li>
        <li>
          Adjuntar la URL compartible generada por la aplicación (codifica ubicación, fecha/hora UTC, vista, opciones).
        </li>
        <li>
          Indicar los pasos para reproducir el problema (ubicación, hora, opciones activadas).
        </li>
      </ol>

      <h2>Consejos</h2>
      <ul>
        <li>Verifica la hora UTC y la zona horaria de la ubicación elegida para evitar confusiones con el horario de verano.</li>
        <li>Indica si la refracción estaba activada y la altura del objeto (los efectos son perceptibles cerca del horizonte).</li>
      </ul>
    </article>
  );
}
