// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: 'mern-blog-b327f.firebaseapp.com',
//   projectId: 'mern-blog-b327f',
//   storageBucket: 'mern-blog-b327f.appspot.com',
//   messagingSenderId: '699397991367',
//   appId: '1:699397991367:web:88ff565ef72a182d6b87e2',
// };


const firebaseConfig = {
  apiKey: "AIzaSyC1ltLAhJvVeFWJiFMu1LGw3xmve37CbB8",
  authDomain: "blog-a0740.firebaseapp.com",
  projectId: "blog-a0740",
  storageBucket: "blog-a0740.appspot.com",
  messagingSenderId: "393140868832",
  appId: "1:393140868832:web:c28ad572d91df9cf266285"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
