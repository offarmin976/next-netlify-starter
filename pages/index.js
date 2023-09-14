import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react';

export default function Home() {
  // Funktion zum Erzeugen eines Pixel-Fehlers mit zufälliger Farbe (Schwarz oder Blau)
  function createPixelError() {
    const pixelError = document.createElement("div");
    pixelError.style.width = "1px";
    pixelError.style.height = "1px";
    const color = Math.random() < 0.5 ? "black" : "blue"; // Zufällige Auswahl von Schwarz oder Blau
    pixelError.style.backgroundColor = color;
    pixelError.style.position = "absolute";
    pixelError.style.left = `${Math.random() * window.innerWidth}px`;
    pixelError.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(pixelError);
  }

  // Pixel-Fehler erstellen und alle zwei Sekunden wechseln
  useEffect(() => {
    const numErrors = 1000; // Anzahl der simulierten Pixel-Fehler
    let intervalId;

    function updateErrors() {
      // Entfernen aller vorhandenen Fehler
      const existingErrors = document.querySelectorAll(".pixel-error");
      existingErrors.forEach((error) => error.remove());

      // Erstellen neuer Fehler
      for (let i = 0; i < numErrors; i++) {
        createPixelError();
      }
    }

    // Starten des Intervalls und initialer Aufruf
    updateErrors();
    intervalId = setInterval(updateErrors, 2000);

    // Aufräumen des Intervalls, wenn die Komponente entladen wird
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="loader"></div>
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/CoverIG.png" />
          {/* CSS-Regeln zur Änderung der Schriftart auf Helvetica */}
          <style>{`
            body {
              font-family: "Helvetica", sans-serif;
            }
          `}</style>
        </Head>

        <Header title="XBLADE2 - DYNAMIC THREATS" />

        {/* Bootstrap-Navigationsmenü */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/shop">Shop</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <p className="19/10/23">
            <button onClick={() => window.location.href = 'https://www.xblade2.bandcamp.com'} id="myButton" className="float-left submit-button">LISTEN HERE</button>
          </p>
        </main>

        <Footer />
      </div>
    </>
  )
}