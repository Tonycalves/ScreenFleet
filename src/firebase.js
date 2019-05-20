import { initializeApp } from 'firebase';

const app = initializeApp({
	apiKey: "AIzaSyBx7he4Ww6H_zQpwh7zT0GplJcva9q4naI",
    authDomain: "screenfleet-2c77f.firebaseapp.com",
    databaseURL: "https://screenfleet-2c77f.firebaseio.com",
    projectId: "screenfleet-2c77f",
    storageBucket: "screenfleet-2c77f.appspot.com",
    messagingSenderId: "154709207643",
    appId: "1:154709207643:web:85cae06eadf6991e"
});

export const db = app.databse();
export const namesRef = db.ref('names');