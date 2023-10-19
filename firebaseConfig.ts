import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.EXPO_APIKEY,
  authDomain: process.env.EXPO_AUTHDOMAIN,
  projectId: process.env.EXPO_PROJECTID,
  storageBucket: process.env.EXPO_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_MESSAGINGSENDERID,
  appId: process.env.EXPO_APPID,
};

const app = initializeApp(firebaseConfig);
