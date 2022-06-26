import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:"AIzaSyAlLYCJul__QNd5qPSqXhYmXdHLhA7votQ",
  authDomain: "dashboard-66e5f.firebaseapp.com",
  projectId: "dashboard-66e5f",
  storageBucket: "dashboard-66e5f.appspot.com",
  messagingSenderId: "319102959331",
  appId: "1:319102959331:web:6edb9fb0a0078cc33d8fd6",
  measurementId: "G-2YNX67XRS5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);