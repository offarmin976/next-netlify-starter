import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/animated.png" />
      </Head>

      <main>
        <Header title="XBLADE2 - DYNAMIC THREATS" />
        <p className="19/10/23">
        <button onclick="location.href = 'www.xblade2.bandcamp.com';" id="myButton" class="float-left submit-button" >Home</button>
        </p>
      </main>

      <Footer />
    </div>
  )
}
