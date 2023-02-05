import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {Experiences} from "@/types/Experiences";
import {useDocumentData} from "react-firebase-hooks/firestore";
import {companyConverter} from "@/types/Company";

export const ExperienceCard = (props: {experience: Experiences}) => {

    const [company, companyLoading, companyError] = useDocumentData(props.experience.info.withConverter(companyConverter))

    console.log(company)

    return (
        <article
            className={"flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"}>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                src={"/LOGO_MEDIAMETRIE_RVB.png"} alt={"Logo Médiamétrie"}
                className={"w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"}/>
            <div className={"px-0 md:px-10"}>

                <h4 className={"text-4xl font-light"}>{props.experience.jobTitle}</h4>

                <p className={"font-bold text-2xl mt1"}>{company?.name}</p>

                <div className={"flex space-x-2 my-2"}>
                    <div className={"relative h-10 w-10 rounded-full"}>
                        <Image src={"/Avaya_Logo.svg.png"}
                            alt={"Logo avaya"} fill className={"object-contain"}/>
                    </div>
                    <div className={"relative h-10 w-10 rounded-full"}>
                        <Image src={"/Avaya_Logo.svg.png"}
                               alt={"Logo avaya"} fill className={"object-contain"}/>
                    </div>
                    <div className={"relative h-10 w-10 rounded-full"}>
                        <Image src={"/Avaya_Logo.svg.png"}
                               alt={"Logo avaya"} fill className={"object-contain"}/>
                    </div>
                    <div className={"relative h-10 w-10 rounded-full"}>
                        <Image src={"/Avaya_Logo.svg.png"}
                               alt={"Logo avaya"} fill className={"object-contain"}/>
                    </div>
                </div>

                <p className={"uppercase py-5 text-gray-300"}>
                    Started work ... -Ended ...</p>

                <ul className={"list-disc space-y-4 ml-5 text-lg"}>
                    <li>SummaryPoints</li>
                    <li>SummaryPoints</li>
                    <li>SummaryPoints</li>
                    <li>SummaryPoints</li>
                    <li>SummaryPoints</li>
                </ul>
            </div>
        </article>
    )
}