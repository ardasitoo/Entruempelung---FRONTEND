<script setup>
import BrandWordmark from './BrandWordmark.vue'
defineProps({ page: { type: String, required: true } })
</script>

<template>
  <header class="site-header">
    <a class="brand" href="/" aria-label="NEXRUM Startseite"><BrandWordmark /></a>
    <nav class="navigation" aria-label="Hauptnavigation">
      <a href="/">Startseite</a>
      <a href="/#kontakt">Kontakt</a>
    </nav>
  </header>
  <main class="legal-page">
    <article v-if="page === 'impressum'" aria-labelledby="legal-title">
      <h1 id="legal-title">Impressum</h1>
      <h2>Angaben gemäß § 5 DDG</h2>
          <p>NEXRUM</p>
          <p>Inhaber: Simar Keskinoglu</p>
          <p>Wilhelmsruher Damm 133</p>
          <p>13439 Berlin</p>
          <p>Deutschland</p>
          <h2>Kontakt</h2>
          <p>Telefon: <a href="tel:+4915170162872">0151 70162872</a></p>
          <p>E-Mail: <a href="mailto:info.entruempelungen@web.de">info.entruempelungen@web.de</a></p>
          <h2>Unternehmensform</h2>
          <p>Einzelunternehmen</p>
          <h2>Umsatzsteuer-ID</h2>
          <p>Eine Umsatzsteuer-Identifikationsnummer wurde bislang nicht erteilt.</p>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          <h2>Haftung für Links</h2>
          <p>Unsere Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können wir daher keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich.</p>
    </article>
    <article v-else aria-labelledby="legal-title">
      <h1 id="legal-title">Datenschutzerklärung</h1>
      <h2>1. Verantwortlicher</h2>
          <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
          <p>NEXRUM</p>
          <p>Inhaber: Simar Keskinoglu</p>
          <p>Wilhelmsruher Damm 133</p>
          <p>13439 Berlin</p>
          <p>Deutschland</p>
          <p>Telefon: <a href="tel:+4915170162872">0151 70162872</a></p>
          <p>E-Mail: <a href="mailto:info.entruempelungen@web.de">info.entruempelungen@web.de</a></p>
          <h2>2. Allgemeine Hinweise</h2>
          <p>Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst. Personenbezogene Daten sind alle Informationen, mit denen eine Person direkt oder indirekt identifiziert werden kann.</p>
          <p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Website, zur Bearbeitung von Anfragen oder zur Durchführung vorvertraglicher bzw. vertraglicher Maßnahmen erforderlich ist oder eine andere gesetzliche Grundlage für die Verarbeitung besteht.</p>
          <h2>3. Hosting</h2>
          <p>Diese Website und ihre PostgreSQL-Datenbank werden über Render Services, Inc., USA, betrieben. Render verarbeitet die von uns übermittelten Kunden- und Anfragedaten als Auftragsverarbeiter. Die Bedingungen der Auftragsverarbeitung sind im <a href="https://render.com/dpa">Data Processing Addendum von Render</a> beschrieben.</p>
          <p>Beim Aufruf der Website können technisch erforderliche Daten verarbeitet werden. Hierzu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Inhalte, Browserinformationen und Betriebssystem gehören.</p>
          <p>Die Verarbeitung erfolgt insbesondere zum Zweck der sicheren und zuverlässigen Bereitstellung der Website.</p>
          <p>Soweit die Verarbeitung zur Wahrung unserer berechtigten Interessen an einem sicheren und funktionsfähigen Webauftritt erforderlich ist, erfolgt sie auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
          <p>Bei Render können personenbezogene Daten auch außerhalb des Europäischen Wirtschaftsraums, insbesondere in den USA, verarbeitet werden. Render ist im EU-US Data Privacy Framework als aktiver Teilnehmer aufgeführt. Für hiervon erfasste Übermittlungen dient der entsprechende Angemessenheitsbeschluss als Grundlage; für andere Übermittlungen sehen die Bedingungen des Anbieters insbesondere EU-Standardvertragsklauseln vor. Informationen zu den Transfergrundlagen finden Sie im <a href="https://render.com/dpa">DPA von Render</a> und im <a href="https://www.dataprivacyframework.gov/participant/9348">DPF-Registereintrag</a>.</p>
          <h2>4. Kontakt- und Anfrageformular</h2>
          <p>Auf unserer Website können Sie eine Anfrage für unsere Dienstleistungen stellen.</p>
          <p>Dabei können insbesondere folgende personenbezogene Daten verarbeitet werden:</p>
          <ul>
          <li>Vorname</li>
          <li>Nachname</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
          <li>Gewünschte Leistung (zum Beispiel Entrümpelung, Umzug oder einfache Streicharbeiten zur Übergabe)</li>
          <li>Adresse des Einsatzortes</li>
          <li>Postleitzahl</li>
          <li>Wunschtermin</li>
          <li>Nachricht und weitere freiwillig mitgeteilte Informationen</li>
          </ul>
          <p>Diese Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage, zur Kontaktaufnahme, zur Angebotserstellung sowie gegebenenfalls zur Vorbereitung und Durchführung eines Auftrags.</p>
          <p>Die Verarbeitung erfolgt insbesondere auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit sie zur Durchführung vorvertraglicher Maßnahmen auf Ihre Anfrage hin oder zur Durchführung eines Vertrags erforderlich ist.</p>
          <p>Soweit eine Verarbeitung darüber hinaus zur Wahrung berechtigter Interessen erforderlich ist, kann Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage dienen.</p>
          <h3>Speicherung und E-Mail-Benachrichtigung</h3>
          <p>Ihre Anfrage wird in einer PostgreSQL-Datenbank bei Render gespeichert. Zur Bearbeitung verwalten wir außerdem den Bearbeitungsstatus der Anfrage in einem geschützten Admin-Bereich.</p>
          <p>Nach Eingang einer Anfrage versendet unser Backend über den E-Mail-Dienst Resend (Plus Five Five, Inc., USA) eine Benachrichtigung an unser WEB.DE-Postfach. Dabei werden die im Formular übermittelten Angaben als Inhalt der Benachrichtigung verarbeitet; Ihre E-Mail-Adresse wird als Antwortadresse verwendet. Zweck ist die zuverlässige Entgegennahme und Bearbeitung Ihrer Anfrage. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit sie vorvertraglichen oder vertraglichen Maßnahmen dient, im Übrigen auf Grundlage unseres berechtigten Interesses an einer zuverlässigen Bearbeitung geschäftlicher Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.</p>
          <p>Für den Versand der Anfrage-Benachrichtigungen setzen wir Resend als Dienstleister ein. Dabei werden die für den E-Mail-Versand erforderlichen personenbezogenen Daten verarbeitet. Das <a href="https://resend.com/legal/dpa">Data Processing Addendum von Resend</a> ist nach dessen Bedingungen Bestandteil der Nutzungsvereinbarung und regelt die Verarbeitung gemäß Art. 28 DSGVO. Es beschreibt auch die Übermittlung in die USA, die Teilnahme am EU-US Data Privacy Framework und die EU-Standardvertragsklauseln für davon erfasste Drittlandübermittlungen. Weitere Informationen: <a href="https://resend.com/legal/privacy-policy">Datenschutzhinweise von Resend</a>.</p>
          <h2>5. Kontaktaufnahme per E-Mail oder Telefon</h2>
          <p>Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage.</p>
          <p>Die Verarbeitung erfolgt insbesondere auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit die Kommunikation der Anbahnung oder Durchführung eines Vertrags dient. In anderen Fällen kann die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgen, insbesondere aufgrund unseres berechtigten Interesses an der Bearbeitung geschäftlicher Anfragen.</p>
          <h3>E-Mail-Dienst WEB.DE</h3>
          <p>Für den Empfang, die Speicherung und die Bearbeitung von E-Mails verwenden wir WEB.DE, einen Dienst der 1&amp;1 Mail &amp; Media GmbH, Zweigniederlassung Karlsruhe, Brauerstraße 48, 76135 Karlsruhe, Deutschland. Dies betrifft sowohl direkt an uns gesendete E-Mails als auch die über Resend zugestellten Anfrage-Benachrichtigungen. Dabei werden insbesondere Absender- und Empfängeradressen, Nachrichteninhalte, gegebenenfalls Anhänge sowie technische Versand- und Empfangsdaten verarbeitet.</p>
          <p>Wir nutzen diese Daten zur Bearbeitung Ihrer Anfrage und zur geschäftlichen Kommunikation. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung der Anbahnung oder Durchführung eines Vertrags dient, ansonsten Art. 6 Abs. 1 lit. f DSGVO aufgrund unseres berechtigten Interesses an der Bearbeitung geschäftlicher Anfragen. Weitere Informationen zur Verarbeitung durch den Anbieter: <a href="https://web.de/datenschutz/">Datenschutzhinweise von WEB.DE</a>.</p>
          <h2>6. Speicherdauer</h2>
          <p>Unverbindliche Anfragen, aus denen kein Auftrag hervorgegangen ist, werden grundsätzlich sechs Monate nach ihrer Ablehnung aus unserer Anfragedatenbank gelöscht. Wird die Bearbeitung wieder aufgenommen, beginnt die Frist bei einer erneuten Ablehnung von vorn.</p>
          <p>Für laufende Anfragen richtet sich die Speicherdauer nach der noch erforderlichen Bearbeitung. Bei angenommenen oder abgeschlossenen Aufträgen gelten gegebenenfalls längere gesetzliche handels- und steuerrechtliche Aufbewahrungsfristen. Bestehen andere Rechtsgrundlagen für eine weitere Speicherung, werden die betreffenden Daten erst nach deren Wegfall gelöscht.</p>
          <p>Zugehörige E-Mails und weitere Kopien prüfen und löschen wir gesondert nach denselben Kriterien. Sicherungskopien werden im Rahmen der Sicherungs- und Löschzyklen des jeweiligen Dienstleisters entfernt.</p>
          <h2>7. Weitergabe personenbezogener Daten</h2>
          <p>Personenbezogene Daten werden grundsätzlich nicht ohne Rechtsgrundlage an Dritte weitergegeben.</p>
          <p>Eine Weitergabe kann insbesondere erfolgen, wenn dies zur Vertragserfüllung erforderlich ist, eine gesetzliche Verpflichtung besteht, Sie eingewilligt haben oder von uns eingesetzte Dienstleister Daten im Rahmen einer Auftragsverarbeitung verarbeiten.</p>
          <h2>8. Ihre Rechte</h2>
          <p>Im Rahmen der gesetzlichen Voraussetzungen haben Sie insbesondere das Recht auf:</p>
          <ul>
          <li>Auskunft über Ihre gespeicherten personenbezogenen Daten,</li>
          <li>Berichtigung unrichtiger Daten,</li>
          <li>Löschung Ihrer personenbezogenen Daten,</li>
          <li>Einschränkung der Verarbeitung,</li>
          <li>Datenübertragbarkeit,</li>
          <li>Widerspruch gegen bestimmte Verarbeitungen sowie</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft.</li>
          </ul>
          <p>Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, insbesondere an Ihrem Aufenthaltsort, Ihrem Arbeitsplatz oder am Ort des mutmaßlichen Verstoßes.</p>
          <p>Für unseren Unternehmenssitz in Berlin ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit zuständig:</p>
          <p>Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />Alt-Moabit 59–61<br />10555 Berlin<br />E-Mail: <a href="mailto:mailbox@datenschutz-berlin.de">mailbox@datenschutz-berlin.de</a><br /><a href="https://www.datenschutz-berlin.de/buergerinnen-und-buerger/beschwerde/">Informationen und Beschwerdemöglichkeit</a></p>
          <h2>9. Widerspruchsrecht</h2>
          <p>Soweit personenbezogene Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie unter den gesetzlichen Voraussetzungen das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch gegen die Verarbeitung einzulegen.</p>
          <h2>10. Datensicherheit</h2>
          <p>Wir setzen angemessene technische und organisatorische Maßnahmen ein, um personenbezogene Daten vor Verlust, Manipulation, unbefugtem Zugriff und sonstiger unrechtmäßiger Verarbeitung zu schützen.</p>
          <h2>11. Aktualität dieser Datenschutzerklärung</h2>
          <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich unsere Website, die eingesetzten Dienste oder die rechtlichen Anforderungen ändern.</p>
          <p>Stand: Oktober 2026</p>
    </article>
  </main>
</template>
