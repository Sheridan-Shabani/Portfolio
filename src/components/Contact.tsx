import React from "react";
import {motion} from "framer-motion";

export const Contact = () => {
    return (
        <div className={"h-screen flex relative flex-col text-center md-text-left md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}>
            <h3 className={"absolute top-24 uppercase text-[#0075af] tracking-[20px] text-2xl"}>
                Contact
            </h3>

            <div className={"flex flex-col space-y-10"}>
                <h4 className={"text-4xl font-semibold text-center"}>
                    I have got just what you need. {" "}
                    <span className={"underline"}>
                        Lets Talk.
                    </span>
                </h4>
            </div>
        </div>
    )
}