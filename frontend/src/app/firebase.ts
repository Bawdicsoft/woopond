import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB7pDkmnP3N-OnpoD1xHwLSsO-gLtghfqs",
  authDomain: "wopond-1fa4d.firebaseapp.com",
  projectId: "wopond-1fa4d",
  storageBucket: "wopond-1fa4d.appspot.com",
  messagingSenderId: "125707428873",
  appId: "1:125707428873:web:ce202eb9c6b1f27d0a04d8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
