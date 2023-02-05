import {motion} from "framer-motion"
import React from "react"

import {Profile} from "@/types/Profile";

export const About = (props: { profile: Profile }) => {
    const parseLines = (value:string) => value.replaceAll(/(\\n)/g, "\n");

    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            className={"flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "}>
            <h3 className={"absolute top-16 uppercase text-[#0075af] tracking-[20px] text-2xl lg:hidden"}>
                About
            </h3>
            <div className={"space-y-2 md:space-y-10 px-0 md:px-10"}>
                <h4 className={"text-lg md:text-4xl font-semibold"}>
                    Here is a little background
                </h4>
                <p className={"text-[0.7rem] md:text-base whitespace-pre-line"}>
                    {parseLines(props.profile.backgroundInfo)}
                </p>
            </div>
        </motion.div>
    )
}