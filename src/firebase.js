import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9Knj2mOrMzzsauwe5GGfXe1FBTZu-P9k",
  authDomain: "healthcure-e332a.firebaseapp.com",
  projectId: "healthcure-e332a",
  storageBucket: "healthcure-e332a.firebasestorage.app",
  messagingSenderId: "222697995022",
  appId: "1:222697995022:web:e09624d92ca4b2c7bc355f"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)