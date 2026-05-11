import { useState } from 'react';
import {db} from "../firebase/firebase";
import { deleteDoc,doc } from 'firebase/firestore';

export default function useDeleteWishList() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const deleteList=async(id)=>{
        try{
            setLoading(true);
            await deleteDoc(doc(db,'wishlist',id));
            setLoading(false);
        }
        catch(error){
            setError(error.message);
            setLoading(false);
        }
    }

  return {loading,error,deleteList}
}
