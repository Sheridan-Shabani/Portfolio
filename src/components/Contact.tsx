import React from "react";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faMapPin} from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
    return (
        <div className={"h-screen flex relative flex-col text-center md-text-left md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"}>
            <h3 className={"absolute top-24 uppercase text-[#0075af] tracking-[20px] text-2xl"}>
                Contact
            </h3>

            <div className={"flex flex-col space-y-10"}>
                <h4 className={"text-4xl font-semibold text-center"}>
                    I have got just what you need. {" "}
                    <span className={"underline decoration-[#0075af]/50"}>
                        Lets Talk.
                    </span>
                </h4>

                <div className={"space-y-10"}>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <FontAwesomeIcon icon={faPhone} size={"lg"} color={"#0075af"} fade/>
                        <p className={"text-2xl"}>+33750440990</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <FontAwesomeIcon icon={faEnvelope} size={"lg"} color={"#0075af"} fade/>
                        <p className={"text-2xl"}>sheridan.shabani@outlook.fr</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <FontAwesomeIcon icon={faMapPin} size={"lg"} color={"#0075af"} fade/>
                        <p className={"text-2xl"}>11 résidence des oiseaux, 62530 - Hersin-coupigny, France</p>
                    </div>
                </div>

                <form className={"flex flex-col space-y-2 w-fit mx-auto"}>
                    <div className={"flex space-x-2"}>
                        <input placeholder={"Name"} className={"contactInput"} type={"text"}/>
                        <input placeholder={"Email"} className={"contactInput"} type={"email"}/>
                    </div>
                    <input placeholder={"Subject"} className={"contactInput"} type={"text"}/>
                    <textarea placeholder={"Message"} className={"contactInput"}/>
                    <button
                        type={"submit"}
                        className={"bg-[#0075af] py-5 px-10 rounded-md text-black font-bold"}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}