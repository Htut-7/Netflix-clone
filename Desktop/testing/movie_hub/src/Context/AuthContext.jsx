import { createContext, useEffect } from "react";
import { useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase/firebase"

const AuthContext=createContext();

const AuthReducer=(state,action)=>{
    switch(action.type){
        case "LOG_IN":
            return {...state, user:action.payload}
        
        case "LOG_OUT":
            return {...state, user:null}

        case "AUTH_READY":
            return {...state, authReady:true}

        default:
            return state
    }
}

export default function AuthContextProvider({children}){

    let [state,dispatch]=useReducer(AuthReducer,{user:null,authReady:false});

    useEffect(()=>{
       const unsub= onAuthStateChanged(auth,(user)=>{
            dispatch({type:'AUTH_READY'})
            if(user){
                dispatch({type:'LOG_IN',payload:user})
            }else{
                dispatch({type:'LOG_OUT'})
            }
        });
        return ()=>unsub();
    },[])
    
    return(
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext,AuthContextProvider}