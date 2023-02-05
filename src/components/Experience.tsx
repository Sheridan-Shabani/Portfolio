import React from "react";
import {motion} from "framer-motion";
import {ExperienceCard} from "@/components/ExperienceCard";
import {Experiences} from "@/types/Experiences";

export const Experience = (props: {experiences: Experiences[]}) => {

     props.experiences.sort((a, b) => a.numberJob < b.numberJob ? 1 : -1)

    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            className={"h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full md:px-10 justify-evenly mx-auto items-center"}>
            <h3 className={"absolute top-16 uppercase text-[#0075af] tracking-[20px] text-2xl lg:hidden"}>
                EXPERIENCE
            </h3>
            <div className={"w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0075af]/80"}>
                {props.experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience}/>
                ))}
            </div>
        </motion.div>
    )
}