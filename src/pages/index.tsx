import Head from 'next/head'
import { Inter } from '@next/font/google'
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sheridan Shabani - Portfolio</title>
      </Head>
      <main>
          <div className={"flex"}>
              <Image src={"/logo.png"} alt={"logo"}
                     width={50} height={50}
                     priority/>
              <h1 className={"text-red-500"}>
                  Sheridan Shabani
              </h1>
          </div>
      </main>
    </>
  )
}
