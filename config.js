import firebase from 'firebase';
require('@firebase/firestore')




const firebaseConfig = {
  apiKey: "AIzaSyAeChz5RumDUNw2KZimNtEdWYpHmNEMHEo",
  authDomain: "barter-system-57968.firebaseapp.com",
  projectId: "barter-system-57968",
  storageBucket: "barter-system-57968.appspot.com",
  messagingSenderId: "357393753413",
  appId: "1:357393753413:web:a12277f916d10f35d88a2c",
  measurementId: "G-XE02WYHS4L"
};


if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();