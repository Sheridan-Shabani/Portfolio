import React from "react"
import {Cursor, useTypewriter} from "react-simple-typewriter";
import Image from "next/image";
import VisibilitySensor from 'react-visibility-sensor';
import urlFor from "../../lib/urlFor";

type Props = {
    pageInfo: PageInfo
}

export const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi! I'm ${pageInfo?.name}`,
            "I like system",
            "I like network",
            "And also i like development"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    const [isVisible, setIsVisible] = React.useState(false);

    return (
        <div className={"h-screen flex flex-col space-y-8 items-center justify-center text-center"}>
            <Image className={"relative rounded-full mx-auto h-32 w-32 object-cover"} src={urlFor(pageInfo.heroImage).url()} alt={"My picture"}
                   width={80}
            height={50} priority/>
            <VisibilitySensor
                onChange={(isVisible: boolean) => setIsVisible(isVisible)}
            >
            <div className={""}>
                <h3 className={"text-sm uppercase text-[#0075af] pb-2 tracking-[15px]"}>{pageInfo?.role}</h3>
                <h2 className={"text-3xl lg:text-6xl font-semibold px-10"}>
                    {isVisible && (
                        <>
                            <span className="mr-3">{text}</span>
                            <Cursor cursorColor={"#0075af"}/>
                        </>

                    )}
                </h2>
            </div>
            </VisibilitySensor>
        </div>
    )
}