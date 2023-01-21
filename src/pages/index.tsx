import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sheridan Shabani - Portfolio</title>
      </Head>
      <main>
        <h1 className={"text-red-500"}>
          Sheridan Shabani
        </h1>
      </main>
    </>
  )
}
