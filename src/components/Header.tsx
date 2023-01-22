import React from "react"
import Image from "next/image";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <header className={"sticky top-0 flex items-start justify-between items-center w-full px-10 pt-4"}>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className={"flex flex-row items-center flex-1 justify-start space-x-3"}>
                <Image src={"/logo.png"} alt={"logo"}
                       width={50} height={50}
                       priority/>
                <h1 className={""}>
                    Sheridan
                    SHABANI
                </h1>
            </motion.div>
            <motion.div
                initial={{
                    y: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className={"flex flex-row items-center flex-1 justify-center"}>
                <nav className={"flex flex-row items-center space-x-3"}>
                    <a className={""}>HOME</a>
                    <a>ABOUT</a>
                    <a>PORTFOLIO</a>
                    <a>RESUME</a>
                    <a>CONTACT</a>
                </nav>
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className={"flex flex-1 justify-end space-x-3 items-center"}>
                <a>FRA</a>
                <a>ENG</a>
                <FontAwesomeIcon className={"px-10"} size={"lg"} icon={faSun} beat/>
            </motion.div>
        </header>

    )
}

