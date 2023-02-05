import React from "react"
import Image from "next/image";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSun, faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Header = (
) => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    return (
        <div className={"z-20 sticky top-0 flex items-start justify-between items-center w-full px-10 pt-4 z-100 backdrop-blur-sm"}>
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
                       width={32} height={32}
                       priority/>
                <h1 className={"text-sm"}>
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
                className={"hidden lg:flex flex-row items-center flex-1 justify-center"}>

                <nav className={"flex flex-row items-center space-x-3"}>
                    <Link href={"#about"}>
                        <button className={"navButton"}>ABOUT</button>
                    </Link>
                    <Link href={"#experience"}>
                        <button className={"navButton"}>EXEPRIENCE</button>
                    </Link>
                    <Link href={"#education"}>
                        <button className={"navButton"}>EDUCATION</button>
                    </Link>
                    <Link href={"#projects"}>
                        <button className={"navButton"}>PROJECTS</button>
                    </Link>
                    <Link href={"#contact"}>
                        <button className={"navButton"}>CONTACT</button>
                    </Link>
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
                className={"hidden lg:flex flex-1 justify-end space-x-3 items-center"}>
                <button>FRA</button>
                <button>ENG</button>
                <button><FontAwesomeIcon className={"px-10"} size={"lg"} icon={faSun} beat/></button>
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
                className={"flex lg:hidden flex-1 justify-end"}>
                <button onClick={() => setIsNavOpen((prev) => !prev)}>
                    <FontAwesomeIcon icon={faBars} size={"lg"}/>
                </button>
                <div className={isNavOpen ? "showMenu" : "hideMenu"}>
                    <button className={"absolute top-0 right-0 px-8 py-8"}
                    onClick={() => setIsNavOpen(false)}>
                        <FontAwesomeIcon icon={faXmark} size={"lg"}/>
                    </button>
                    <nav  className={"flex flex-col space-y-6 text-center"}>
                        <Link href={"#about"} onClick={() => setIsNavOpen(false)}>
                            <button className={"navButton"}>ABOUT</button>
                        </Link>
                        <Link href={"#experience"} onClick={() => setIsNavOpen(false)}>
                            <button className={"navButton"}>EXEPRIENCE</button>
                        </Link>
                        <Link href={"#education"} onClick={() => setIsNavOpen(false)}>
                            <button className={"navButton"}>EDUCATION</button>
                        </Link>
                        <Link href={"#projects"} onClick={() => setIsNavOpen(false)}>
                            <button className={"navButton"}>PROJECTS</button>
                        </Link>
                        <Link href={"#contact"} onClick={() => setIsNavOpen(false)}>
                            <button className={"navButton"}>CONTACT</button>
                        </Link>
                    </nav>
                    <div className={"flex flex-col space-y-6"}>
                        <div className={"space-x-3 text-xs flex justify-center"}>
                            <button>FRA</button>
                            <button>ENG</button>
                        </div>
                        <button
                            className={""}>
                            <FontAwesomeIcon className={"px-10"} size={"sm"} icon={faSun} beat/>
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

