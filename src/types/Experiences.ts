import {
    collection,
    DocumentData, DocumentReference,
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue
} from "firebase/firestore";
import {firestore} from "@/firebase";

export interface Experiences {
    info: DocumentReference<DocumentData>;
    jobTitle: string;
    points: string[];
    numberJob: number;
    ref: DocumentReference<DocumentData>;
    id: string;
}

const experienceConverter: FirestoreDataConverter<Experiences> = {
    toFirestore(experiences: WithFieldValue<Experiences>): DocumentData {
        return {
            info: experiences.info,
            jobTitle: experiences.jobTitle,
            points: experiences.points,
            numberJob: experiences.numberJob,
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): Experiences {
        const data = snapshot.data(options);
        return {
            info: data.info,
            jobTitle: data.jobTitle,
            points: data.points,
            numberJob: data.numberJob,
            id: snapshot.id,
            ref: snapshot.ref
        };
    },
};

export const experiencesRef = collection(firestore,'en', 'experience', 'experience').withConverter(experienceConverter)
