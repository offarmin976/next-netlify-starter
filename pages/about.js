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