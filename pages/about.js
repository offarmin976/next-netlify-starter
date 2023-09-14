import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className="loader"></div>
      <div className="container">
        <Head>
          <title>About Us - Next.js Starter!</title>
          <link rel="icon" href="/CoverIG.png" />
          {/* CSS-Regeln zur Änderung der Schriftart auf Helvetica */}
          <style>{`
            body {
              font-family: "Helvetica Neue", sans-serif;
            }
          `}</style>
        </Head>

        <Header title="About Us" />

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

        <main className="about-content">
          <div className="about-image">
            <Image src="/your-about-image.jpg" alt="About Us" width={400} height={300} />
          </div>
          <div className="about-text">
            <p>
              Hier können Sie Ihren Text zur "About"-Seite hinzufügen. 
              Dies ist der rechte Textbereich. Sie können beliebigen Text, 
              Absätze und Formatierungen hinzufügen.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}