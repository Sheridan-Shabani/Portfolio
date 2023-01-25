import Head from 'next/head'
import {Inter} from '@next/font/google'
import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";
import {About} from "@/components/About";
import {Experience} from "@/components/Experience";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Sheridan Shabani</title>
            </Head>
            <main>
                <div className={"h-screen snap-y snap-mandatory overflow-scroll"}>
                    <ParticlesBackground/>
                    <Header/>
                    <section id={"hero"} className={"snap-start"}>
                        <Hero/>
                    </section>
                    <section id={'about'} className={"snap-center"}>
                        <About/>
                    </section>
                    <section id={'experience'} className={"snap-center"}>
                        <Experience/>
                    </section>
                </div>
            </main>
        </>
    )
}
