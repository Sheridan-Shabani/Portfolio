import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

export const Projects = () => {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            className={"relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"}>

            <h3 className={"absolute top-16 uppercase tracking-[20px] text-[#0075af] text-2xl lg:hidden"}>
                Projects
            </h3>

            <div className={"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0075af]/80 z-10"}>

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={"w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"}>

                        <div className={"relative h-[100px] w-[200px] md:h-[200px] md:w-[300px]"}>
                            <Image src={"/LOGO_MEDIAMETRIE_RVB.png"} alt={"Image case study"} fill
                                   className={"object-contain"}/>
                        </div>

                        <div className={"md:space-y-10 px-0 md:px-10 maw-w-6xl"}>
                            <h4 className={"text-lg md:text-4xl font-semibold text-center"}>
                                <span className={"underline decoration-[#0075af]/50"}>
                                    Case Study {index + 1} of {projects.length}:
                                </span> {" "}
                                FaceBouffe, {project}
                            </h4>
                            <p className={"text-sm md:text-lg text-center  md:text-left"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies porttitor enim
                                vitae ultricies. Pellentesque est lacus, varius in erat ut, mattis malesuada arcu. Sed
                                congue, eros vel accumsan ullamcorper, quam nisi efficitur sem, laoreet dapibus turpis
                                dui ut leo. Etiam in lectus ut ex convallis porttitor. Maecenas sodales posuere.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={"w-full absolute top-[30%] bg-[#0075af]/10 left-0 h-[300px] sm:h-[500px] -skew-y-12"}>
            </div>
        </motion.div>
    )
}