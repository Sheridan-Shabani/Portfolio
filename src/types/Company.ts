import {
    DocumentData, DocumentReference,
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue,
    Timestamp
} from "firebase/firestore";

export interface Company {
    companyImage: string;
    dateEnded: Timestamp;
    dateStarted: Timestamp;
    isCurrentWork: boolean;
    name: string
    technologies: DocumentReference<DocumentData>[];
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