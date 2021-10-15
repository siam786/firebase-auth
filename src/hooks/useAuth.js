import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

const UseAuth = () =>{
    return useContext(AuthContext)
}

export default UseAuth;

/* REACT_APP_FIREBASE_API_KEY=AIzaSyD16Yj1kQQJ8LsKox8lSYMAO5kvYP0LpF4
REACT_APP_FIREBASE_AUTH_DOMAIN=new-genius.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=new-genius
REACT_APP_FIREBASE_STORAGE_BUCKET=new-genius.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=141554524757
REACT_APP_FIREBASE_APP_ID=1:141554524757:web:cafe78c2c2a314185feadc */