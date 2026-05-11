import { signOut } from "firebase/auth";
import {auth} from "../firebase/firebase";

export default function useSignOut() {

    const logOut=()=>{
        signOut(auth)
    }


  return {logOut}
}
