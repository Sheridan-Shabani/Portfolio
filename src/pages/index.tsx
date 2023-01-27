import Head from 'next/head'
import {Inter} from '@next/font/google'
import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";
import {About} from "@/components/About";
import {Experience} from "@/components/Experience";
import {Portfolio} from "@/components/Portfolio";

const inter = Inter({subsets: ['latin']})

export default function Home(

) {
    return (
        <>
            <Head>
                <title>Sheridan Shabani</title>
            </Head>
            <main>
                <div className={"h-screen snap-y snap-mandatory overflow-scroll"}>
                    <ParticlesBackground/>
                    <Header/>
                    <section id={"hero"} className={"relative snap-start z-1"}>
                        <Hero/>
                    </section>
                    <section id={'about'} className={"relative snap-center z-1"}>
                        <About/>
                    </section>
                    <section id={'experience'} className={"relative snap-center z-1"}>
                        <Experience/>
                    </section>
                    <section id={'portfolio'} className={"relative snap-start z-1"}>
                        <Portfolio/>
                    </section>
                </div>
            </main>
        </>
    )
}
