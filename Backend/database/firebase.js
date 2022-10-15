import { initializeApp } from "firebase/app";
require("dotenv/config");
const firebaseConfig = process.env.firebaseConfig;
// Initialize Firebase
const app = initializeApp(firebaseConfig);