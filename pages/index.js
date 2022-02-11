import Head from 'next/head'
// import Image from 'next/image'
import Sidebar from '../components/sidebar'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
      </Head>

      <main className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
        <Sidebar/>
      </main>

    </div>
  )
}
