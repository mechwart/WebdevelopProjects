import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARj0KUQhSiko1Z6CYdiKx7HvW1D92_bnQ",
    authDomain: "instagram-clone-e90b0.firebaseapp.com",
    databaseURL: "https://instagram-clone-e90b0.firebaseio.com",
    projectId: "instagram-clone-e90b0",
    storageBucket: "instagram-clone-e90b0.appspot.com",
    messagingSenderId: "921750419928",
    appId: "1:921750419928:web:a31dcfce6d7b4c8ade5aad",
    measurementId: "G-1L2ZQSK18D"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage };
