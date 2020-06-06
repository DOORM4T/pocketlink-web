import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/functions";

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
  console.log("\x1b[33m", "DEVELOPMENT MODE", "\x1b[0m");
}

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  applicationId: process.env.APP_ID,
  projectId: process.env.PROJECT_ID,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  measurementId: process.env.MEASUREMENT_ID,
});

console.log("Connected to Firebase");

export const linksDB = firebase.firestore().collection("links");
export const functions = firebase.functions();
