import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"



const firebaseConfig = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_Api_Key,
  authDomain: process.env.NEXT_PUBLIC_Auth_Domain,
  projectId: process.env.NEXT_PUBLIC_Project_Id,
  storageBucket: process.env.NEXT_PUBLIC_Storage_Bucket,
  messagingSenderId: process.env.NEXT_PUBLIC_Messaging_Sender_Id,
  appId: process.env.NEXT_PUBLIC_App_Id,
  measurementId: process.env.NEXT_PUBLIC_Measurement_Id
})


export default getFirestore()


// import firebase from "firebase/app"
// import "firebase/firestore"

// const firebaseConfig = firebase.initializeApp({
//   apiKey: "AIzaSyCJ_zCZgZr_v3f_sj2TcDMMIFNLYNzjivo",
//   authDomain: "ciryu-838f0.firebaseapp.com",
//   projectId: "ciryu-838f0",
//   storageBucket: "ciryu-838f0.appspot.com",
//   messagingSenderId: "907647490495",
//   appId: "1:907647490495:web:9062003a12e3300abe290a",
//   measurementId: "G-PT4EB2Z2DV"
// })


// export default firebase

// import admin from 'firebase-admin';
// import { getFirestore } from "firebase-admin/firestore"
// import serviceAccount from "../serverAccount.json"

// if (!admin.apps.length) {
//   admin.initializeApp({
//     // credential: admin.credential.cert({
//     //   project_id: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     //   private_key: process.env.FIREBASE_PRIVATE_KEY,
//     //   client_email: process.env.FIREBASE_CLIENT_EMAIL,
        
    
//     // }),

//     credential : admin.credential.cert(serviceAccount),
//     databaseURL : "https://ciryu-838f0.firebaseio.com"
//   });
// }


// export default getFirestore() ;
