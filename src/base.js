import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp =  firebase.initializeApp({
        apiKey: "AIzaSyDLGF4PKnqfeeh9NyuuXDpsMKaABqfZB_I",
        authDomain: "catch-of-the-day-2b427.firebaseapp.com",
        databaseURL: "https://catch-of-the-day-2b427-default-rtdb.firebaseio.com",
      });

const base = Rebase.createClass(firebaseApp.database());

// named export //
export {firebaseApp};

// default export //
export default base;
