import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "YOUR_APIKEY",
    authDomain: "YOUR_AUTHDOMAIN",
    databaseURL: "YOUR_DATABASEURL",
    projectId: "YOUR_PROJECTID",
    storageBucket: "YOUR_STORAGEBUCKET",
    messagingSenderId: "YOUR_MESSAGINGSENDERID",
    appId: "YOUR_APPID"
});

export const db = app.databse();
export const namesRef = db.ref('names');