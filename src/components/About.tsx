import React from "react"

export const About = () => {
    return (
        <div
            className={"flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}>
            <h3 className={"absolute top-24 uppercase text-[#0075af] tracking-[20px] text-2xl"}>
                About
            </h3>
            <div className={"space-y-10 px-0 md:px-10"}>
                <h4 className={"text-4xl font-semibold"}>
                    Here is a little background
                </h4>
                <p className={"text-sm"}>
                    Welcome to my world, that of Sheridan SHABANI, your computer prodigy. At 24, I am currently an
                    apprentice engineer at CESI in Arras, but don&apos;t be fooled.
                    <br/><br/>
                    I am doing my apprenticeship at Médiamétrie in Amiens as a junior systems engineer. During my school
                    and work experiences, I have tackled projects in all sorts of fields, from computer systems to
                    development and networking, and more. I am like a Swiss Army knife in IT, able to adapt to any
                    situation.
                    <br/><br/>
                    I didn&apos;t get where I am today by accident. I&apos;ve had my fair share of struggles along the way, but
                    I&apos;ve always believed that with a little determination, anything is possible. Moreover, it is these
                    struggles that have made me the person I am today.
                    <br/><br/>
                    My journey started as a trainee in a computer shop, but I worked my way up and now I&apos;m living my
                    dream as a junior systems engineer. And let me tell you, I&apos;m not afraid to take on responsibility.
                    I&apos;ve always set high limits for myself to keep growing and learning.
                    <br/><br/>
                    So if you&apos;re looking for an IT whiz who isn&apos;t afraid to roll up his sleeves and get his hands dirty,
                    look no further.
                </p>
            </div>
        </div>
    )
}