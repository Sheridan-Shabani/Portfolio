import Head from 'next/head'
import {Inter} from '@next/font/google'
import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Sheridan Shabani</title>
            </Head>
            <main>
                <div className={"h-screen snap-y snap-mandatory overflow-scroll z-0"}>
                    <ParticlesBackground/>
                    <Header/>
                    <section id={"hero"} className={"snap-center"}>
                        <Hero/>
                    </section>
                </div>
            </main>
        </>
    )
}
