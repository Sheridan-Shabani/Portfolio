import React from "react";
import {motion} from "framer-motion";
import {ExperienceCard} from "@/components/ExperienceCard";

export const Experience = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            className={"h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"}>
            <h3 className={"absolute top-24 uppercase text-[#0075af] tracking-[20px] text-2xl"}>
                EXPERIENCE
            </h3>
            <div className={"w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0075af]/80"}>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
            </div>
        </motion.div>
    )
}