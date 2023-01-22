import React from "react"
import Image from "next/image";

export const Header = () => {
    return (
        <div className={"flex px-4 content-between space-y-2"}>
            <div className={"flex"}>
                <Image src={"/logo.png"} alt={"logo"}
                       width={50} height={50}
                       priority/>
                <h1 className={""}>
                    Sheridan
                    SHABANI
                </h1>
            </div>
            <div>
                <nav className={"space-x-5"}>
                    <a>HOME</a>
                    <a>ABOUT</a>
                    <a>PORTFOLIO</a>
                    <a>RESUME</a>
                    <a>CONTACT</a>
                </nav>
            </div>
        </div>

    )
}

