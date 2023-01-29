import Head from 'next/head'
import {Inter} from '@next/font/google'
import {Header} from "@/components/Header";
import {Hero} from "@/components/Hero";
import ParticlesBackground from "@/components/ParticlesBackground";
import {About} from "@/components/About";
import {Experience} from "@/components/Experience";
import {Projects} from "@/components/Projects";
import {Contact} from "@/components/Contact";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleArrowUp} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";

import {PreviewSuspense} from 'next-sanity/preview'


const inter = Inter({subsets: ['latin']})

export default function Home() {

    return (
        <>
            <Head>
                <title>Sheridan Shabani</title>
            </Head>
            <main>
                <div
                    className={"h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0075af]/80"}>
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
                    <section id={'projects'} className={"relative snap-start z-1"}>
                        <Projects/>
                    </section>
                    <section id={'contact'} className={"relative snap-start z-1"}>
                        <Contact/>
                    </section>


                    <footer className={"sticky bottom-5 w-full flex items-center justify-center"}>
                        <Link href={"#hero"}>
                            <FontAwesomeIcon icon={faCircleArrowUp} size={"xl"} color={"gray"} className={"hover:text-[#0075af]"}/>
                        </Link>
                    </footer>


                </div>
            </main>
        </>
    )
}
