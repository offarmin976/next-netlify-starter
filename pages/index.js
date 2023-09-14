import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react';

export default function Home() {
  // Funktion zum Erzeugen eines Pixel-Fehlers
  function createPixelError() {
    const pixelError = document.createElement("div");
    pixelError.style.width = "4px";
    pixelError.style.height = "4px";
    pixelError.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    pixelError.style.position = "absolute";
    pixelError.style.left = `${Math.random() * window.innerWidth}px`;
    pixelError.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(pixelError);
  }

  // Pixel-Fehler erstellen, wenn die Komponente geladen wird
  useEffect(() => {
    const numErrors = 1000; // Anzahl der simulierten Pixel-Fehler
    for (let i = 0; i < numErrors; i++) {
      createPixelError();
    }
  }, []);

  return (
    <>
      <div className="loader"></div>
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/CoverIG.png" />
        </Head>

        <main>
          <Header title="XBLADE2 - DYNAMIC THREATS" />
          <p className="19/10/23">
            <button onClick={() => window.location.href = 'https://www.xblade2.bandcamp.com'} id="myButton" className="float-left submit-button">LISTEN HERE</button>
          </p>
        </main>

        <Footer />
      </div>
    </>
  )
}