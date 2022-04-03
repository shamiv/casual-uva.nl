import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Casual UvA</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <main>
        <Header title="Casual UvA" />
        <p className="description">
        We are a collective of employees on temporary contracts, including representatives from a range of departments, at the University of Amsterdam.
        </p>
      </main>

      <Footer />
    </div>
  )
}
