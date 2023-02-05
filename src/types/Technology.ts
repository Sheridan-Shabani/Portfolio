import {
    DocumentData, DocumentReference,
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions,
    WithFieldValue
} from "firebase/firestore";

export interface Technology {
    image: string;
    name: string
    ref: DocumentReference<DocumentData>;
    id: string;
}

export const technolgyConverter: FirestoreDataConverter<Technology> = {
    toFirestore(technology: WithFieldValue<Technology>): DocumentData {
        return {
            image: technology.image,
            name: technology.name,
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): Technology {
        const data = snapshot.data(options);
        return {
            image: data.image,
            name: data.name,
            id: snapshot.id,
            ref: snapshot.ref
        };
    },
};