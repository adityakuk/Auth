// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAkU_kSLYAYT6t62yI3Ib5UkhtFz7-dXg8",
  authDomain: "fir-973b4.firebaseapp.com",
  projectId: "fir-973b4",
  storageBucket: "fir-973b4.appspot.com",
  messagingSenderId: "915875309584",
  appId: "1:915875309584:web:bf00211056d6eee0ee0295",
  measurementId: "G-Q6M0N2VWX7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

export {app, auth};
