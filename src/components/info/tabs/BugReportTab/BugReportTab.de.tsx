export default function BugReportTabDe() {
  return (
    <article>
      <h1>Fehler melden</h1>
      <p>
        Vielen Dank, dass Sie helfen, die Anwendung zu verbessern. Ein guter Bericht enthält die teilbare URL (kodierte Parameter), einen Screenshot
        und wenn möglich ein Vor-Ort-Foto, das die Abweichung zeigt.
      </p>

      <h2>Schritte</h2>
      <ol>
        <li>
          Ein Ticket öffnen: <a href="https://github.com/antoine-paris/spaceview/issues" target="_blank" rel="noopener noreferrer">Neues GitHub-Issue</a>.
        </li>
        <li>
          Kontext beschreiben: Browser (Version), Betriebssystem, Gerät, Fenstergröße oder Device Pixel Ratio, falls relevant.
        </li>
        <li>
          Screenshot der Anwendung beifügen (Kamera-Button) und, wenn möglich, ein entsprechendes Foto des Himmels.
        </li>
        <li>
          Die von der App generierte Freigabe-URL beifügen (sie kodiert Ort, Datum/Uhrzeit UTC, Ansicht, Optionen).
        </li>
        <li>
          Die Schritte zur Reproduktion des Problems angeben (Ort, Uhrzeit, aktivierte Optionen).
        </li>
      </ol>

      <h2>Tipps</h2>
      <ul>
        <li>Überprüfen Sie UTC-Zeit und Zeitzone des gewählten Ortes, um DST-Verwirrungen zu vermeiden.</li>
        <li>Geben Sie an, ob die Brechung aktiviert war und die Höhe des Objekts (Effekte sind nahe am Horizont spürbar).</li>
      </ul>
    </article>
  );
}
