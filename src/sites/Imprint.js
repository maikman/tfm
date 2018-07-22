import React from 'react'
export default function Imprint(props) {
  return (
    <div className="page_container">
      <section className="page1">
          <h2>Impressum</h2>
          <p>
            Angaben gemäß § 5 TMG:<br />
            <br />
          </p>
          <p>
            Fred Manthey<br />
            TOP Fahrschule Manthey<br />
            Heinrich-Heine-Straße 1<br />
            18507 Grimmen<br />
          </p>

          <h2>Kontakt:</h2>
          <p>
            Telefon: <a href="tel:038326/81345">038326/81345</a>
            <br />
            E-Mail:{' '}
            <a href="mailto:info@top-fahrschule-manthey.de">
              info@top-fahrschule-manthey.de
            </a>
            <br />
          </p>

          <h2>Umsatzsteuer-ID:</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            082/247/02486
          </p>
      </section>
    </div>
  )
}
