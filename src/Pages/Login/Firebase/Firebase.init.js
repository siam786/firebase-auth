import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase";

const firebaseAuthentication = () =>{
    initializeApp(firebaseConfig)
}

export default firebaseAuthentication;