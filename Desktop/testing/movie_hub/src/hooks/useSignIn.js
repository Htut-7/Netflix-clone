import { useState } from "react";
import {db,auth} from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";


export default function useSignIn() {

    let [loading,setLoading]=useState(false);
    let [error,setError]=useState('');
    const signIn=async(email,password)=>{
        try{
            setLoading(true);
            let res=await signInWithEmailAndPassword(auth,email,password);
            const userRef= doc(db,"users",res.user.uid);
            await updateDoc(userRef,{
                lastLogin: new Date()
            });
            setLoading(false);
            return (res.user);
        }catch(error){
            setError(error.message);
            setLoading(false);
        }
    }

  return {loading,error,signIn}
}
