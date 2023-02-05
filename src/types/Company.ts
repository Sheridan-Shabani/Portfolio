import {Technology} from "@/types/Technology";
import {
    DocumentData, DocumentReference,
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue
} from "firebase/firestore";

export interface Company {
    companyImage: string;
    dateEnded: Date;
    dateStarted: Date;
    isCurrentWork: boolean;
    name: string
    technologies: Technology[];
    ref: DocumentReference<DocumentData>;
    id: string;
}

export const companyConverter: FirestoreDataConverter<Company> = {
    toFirestore(company: WithFieldValue<Company>): DocumentData {
        return {
            companyImage: company.companyImage,
            dateEnded: company.dateEnded,
            dateStarted: company.dateStarted,
            isCurrentWork: company.isCurrentWork,
            name: company.name,
            technologies: company.technologies
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): Company {
        const data = snapshot.data(options);
        return {
            companyImage: data.companyImage,
            dateEnded: data.dateEnded,
            dateStarted: data.dateStarted,
            isCurrentWork: data.isCurrentWork,
            name: data.name,
            technologies: data.technologies,
            id: snapshot.id,
            ref: snapshot.ref
        };
    },
};

export function getCompanyRef(companyRef: DocumentReference<DocumentData>) {
    return companyRef.withConverter(companyConverter)
}