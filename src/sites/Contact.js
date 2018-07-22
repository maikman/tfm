import React from 'react'
export default function Contact(props) {
  return (
    <div>
      <img alt="Top Fahrschule Manthey Logo" className="logo" src="logo.jpg" />
      <h1>Willkommen!</h1>
      <h2>Sprechzeiten & Kontakt</h2>
      <p>Dienstag: 15 - 17 Uhr</p>
      <p>Donnerstag: 15 - 17 Uhr</p>
      <p>
        Büro:{' '}
        <a
          href="https://maps.google.de/maps?q=54.106768,13.039381"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heinrich-Heine-Straße 1 / 18507 Grimmen
        </a>
      </p>

      <br />
      <p>
        Telefon: <a href="tel:038326/81304">038326/81304</a>
      </p>
      <p>
        mobil: <a href="tel:0173/2069928">0173/2069928</a>
      </p>
      <p>
        e-Mail:{' '}
        <a href="mailto:info@top-fahrschule-manthey.de">
          info@top-fahrschule-manthey.de
        </a>
      </p>
    </div>
  )
}
