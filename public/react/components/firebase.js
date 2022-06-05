import { useState} from "react"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD76fz1cp_6L2qFwAnrTXAIMVGcbw-riD4",
  authDomain: "inventory-12a79.firebaseapp.com",
  projectId: "inventory-12a79",
  storageBucket: "inventory-12a79.appspot.com",
  messagingSenderId: "859797011507",
  appId: "1:859797011507:web:edf6130ec61a3a8fe9f746"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password){
    return createUserWithEmailAndPassword(auth , email, password);
}

// Custom Hook
export function useAuth(){
  const [ currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub
  }, [])

  return currentUser;