// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TEMPORARY imports for testing project without using a module bundler
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.STOREFRONT_FIREBASE_API_KEY,
//   authDomain: process.env.STOREFRONT_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.STOREFRONT_FIREBASE_DATABASE_URL,
//   projectId: process.env.STOREFRONT_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.STOREFRONT_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.STOREFRONT_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.STOREFRONT_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyAjj63sodNxmevObtdJSHoul4WbohicRCg",
  authDomain: "storefront-e0b92.firebaseapp.com",
  databaseURL: "https://storefront-e0b92-default-rtdb.firebaseio.com",
  projectId: "storefront-e0b92",
  storageBucket: "storefront-e0b92.appspot.com",
  messagingSenderId: "27134202615",
  appId: "1:27134202615:web:1c96bca0fa9bee378979f2",
};

// Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

// Export the service objects
export { db, storage };
