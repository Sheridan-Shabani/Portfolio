import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import * as firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_APPID
};

const app = !firebase.getApps().length ? firebase.initializeApp(firebaseConfig) : firebase.getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };