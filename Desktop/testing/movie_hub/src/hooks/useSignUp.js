import { useState } from "react";
import {db,auth} from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";

export default function useSignUp() {

    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null);
    const signUp=async(email,password)=>{
       try{
        setLoading(true);
         setLoading(true);
        let res=await createUserWithEmailAndPassword(auth,email,password);
        await setDoc(doc(db,"users",res.user.uid),{
            uid:res.user.uid,
            name,
            email,
            cretedAt: new Date()
        })
        setLoading(false);
        return (res.user);
       }catch(error){
        setError(error.message);
        setLoading(false);
       }

    }

  return {loading,error,signUp}
}
