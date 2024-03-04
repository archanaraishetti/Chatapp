// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBPANBbmiFjP5KX2z3rVkGUlRSb0Z2_frg",
//     authDomain: "projectchat-20fba.firebaseapp.com",
//     projectId: "projectchat-20fba",
//     storageBucket: "projectchat-20fba.appspot.com",
//     messagingSenderId: "230676016564",
//     appId: "1:230676016564:web:eb5a3538057dcf286a16e1"
//   };
// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const storage = getStorage();
// export const db = getFirestore()

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBPANBbmiFjP5KX2z3rVkGUlRSb0Z2_frg",
    authDomain: "projectchat-20fba.firebaseapp.com",
    projectId: "projectchat-20fba",
    storageBucket: "projectchat-20fba.appspot.com",
    messagingSenderId: "230676016564",
    appId: "1:230676016564:web:eb5a3538057dcf286a16e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = initializeFirestore(app);


