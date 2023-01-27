import React from "react";
import {motion} from "framer-motion";
export const Portfolio = () => {
    return (
        <div className={"relative h-screen flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center"}>
            <h3 className={"absolute top-24 uppercase tracking-[20px] text-[#0075af] text-2xl"}>
                Portfolio
            </h3>
            <div>

            </div>
            <div className={"w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"}>
            </div>
        </div>
    )
}