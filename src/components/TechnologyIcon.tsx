import React from "react";
import Image from "next/image";
import {technolgyConverter} from "@/types/Technology";
import {useDocumentData} from "react-firebase-hooks/firestore";
import {DocumentData, DocumentReference} from "firebase/firestore";

export const TechnologyIcon = (props: { technologyRef: DocumentReference<DocumentData>}) => {
    const [technology/*, technologyLoading, technologyDataError*/] = useDocumentData(props.technologyRef.withConverter(technolgyConverter))

    return (
        <div className={"relative h-10 w-10"}>
            {technology?.image && (
                <Image src={technology.image}
                       alt={technology.name} fill className={"object-contain"}/>
            )}
        </div>
    )
}