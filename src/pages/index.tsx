import Head from 'next/head'
import { Inter } from '@next/font/google'
import Image from "next/image";
import {Header} from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
          <title>Sheridan Shabani - Accueil</title>
      </Head>
      <main>
          <div className={"flex"}>
              <Header/>
          </div>
      </main>
    </>
  )
}
