import {
    DocumentData,
    QueryDocumentSnapshot,
    FirestoreDataConverter,
    SnapshotOptions,
    DocumentReference,
    WithFieldValue,
    collection,
    doc
} from "firebase/firestore";
import {firestore} from "@/firebase";

export interface Profile {
    address: string;
    backgroundInfo: string;
    email: string;
    role: string;
    heroImage: string;
    name: string;
    phoneNumber: string;
    ref: DocumentReference<DocumentData>;
    id: string;
}

const profileConverter: FirestoreDataConverter<Profile> = {
    toFirestore(profile: WithFieldValue<Profile>): DocumentData {
        return {
            address: profile.address,
            backgroundInfo: profile.backgroundInfo,
            email: profile.email,
            name: profile.name,
            heroImage: profile.heroImage,
            phoneNumber: profile.phoneNumber,
            role: profile.role
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): Profile {
        const data = snapshot.data(options);
        return {
            address: data.address,
            backgroundInfo: data.backgroundInfo,
            email: data.email,
            name: data.name,
            heroImage: data.heroImage,
            phoneNumber: data.phoneNumber,
            role: data.role,
            id: snapshot.id,
            ref: snapshot.ref,
        };
    },
};

export const profileRef = doc(collection(firestore,'en'),'profile').withConverter(profileConverter)
