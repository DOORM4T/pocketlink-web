import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/functions";
import config from "./firebase.config.json";

firebase.initializeApp(config);
export const db = firebase.firestore().collection("links");
export const functions = firebase.functions();
