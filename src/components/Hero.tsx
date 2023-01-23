import React from "react"
import {Cursor, useTypewriter} from "react-simple-typewriter";
import Image from "next/image";

export const Hero = () => {
    const [text, count] = useTypewriter({
        words: [
            "Hi! I'm Sheridan",
            "I like system",
            "I like network",
            "And also i like development"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className={"h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"}>
            <Image className={"relative rounded-full mx-auto h-32 w-32 object-cover"} src={"/pictureB.png"} alt={"My picture"}
                   width={80}
            height={50} priority/>
            <div className={"z-20"}>
                <h3 className={"text-sm uppercase text-[#0075af] pb-2 tracking-[15px]"}>System Engineer</h3>
                <h2 className={"text-5xl lg:text-6xl font-semibold px-10"}>
                    <span className={"mr-3"}>{text}</span>
                    <Cursor cursorColor={"#0075af"}/>
                </h2>
            </div>

        </div>
    )
}