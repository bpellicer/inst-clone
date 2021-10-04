import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Import seed file
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBEC3ZqmK1gfNOoYCvUkzRytSCrkCmIq-M",
    authDomain: "inst-clone-72396.firebaseapp.com",
    projectId: "inst-clone-72396",
    storageBucket: "inst-clone-72396.appspot.com",
    messagingSenderId: "477044457747",
    appId: "1:477044457747:web:a929b1893142acb42f1ae6",
    measurementId: "G-MNLNBFNKDC"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// Call the seed file just once
// SeedDatabase
// seedDatabase(firebase);

export { firebase, FieldValue };