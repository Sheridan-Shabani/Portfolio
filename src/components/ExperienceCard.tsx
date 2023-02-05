import React from "react";
import {motion} from "framer-motion";
import {Experiences} from "@/types/Experiences";
import {useDocumentData} from "react-firebase-hooks/firestore";
import {companyConverter} from "@/types/Company";
import {TechnologyIcon} from "@/components/TechnologyIcon";

export const ExperienceCard = (props: { experience: Experiences }) => {

    const [company/*, companyLoading, companyError*/] = useDocumentData(props.experience.info.withConverter(companyConverter))

    const enDateStarted = company?.dateStarted.toDate().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    const enDateEnded = company?.isCurrentWork ? "Today" : company?.dateEnded.toDate().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    return (
        <article
            className={"flex flex-col rounded-lg items-center md:space-y-7 flex-shrink-0 w-screen md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"}>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                src={company?.companyImage} alt={company?.name}
                className={"hidden md:block w-20 h-20 md:w-32 md:h-32 xl:w-[200px] xl:h-[200px] object-center"}/>
            <div className={"px-7 md:px-10"}>
                <div className={"flex flex-row items-center"}>
                    <motion.img
                        initial={{
                            y: -100,
                            opacity: 0,
                        }}
                        transition={{duration: 1.2}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        src={company?.companyImage} alt={company?.name}
                        className={"md:hidden w-20 h-20 md:w-32 md:h-32 xl:w-[200px] xl:h-[200px] object-center mr-2"}/>
                    <div>
                        <h4 className={"text-xl md:text-4xl font-light"}>{props.experience.jobTitle}</h4>

                        <p className={"font-bold text-lg md:text-2xl mt-1"}>{company?.name}</p>
                    </div>
                </div>


                {company?.technologies &&
                    <div className={"flex space-x-2 my-1"}>
                        {company?.technologies.map((technologyRef, index) => (
                            <TechnologyIcon key={index} technologyRef={technologyRef}/>
                        ))}
                    </div>}

                <p className={"py-1 text-gray-300"}>
                    {enDateStarted} - {enDateEnded}
                </p>

                <ul className={"list-disc space-y-2 ml-5 text-sm md:text-base"}>
                    {props.experience.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}