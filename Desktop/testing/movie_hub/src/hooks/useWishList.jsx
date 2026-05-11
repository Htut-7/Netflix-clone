import { addDoc, collection, getDocs, query,where } from "firebase/firestore";
import {db} from "../firebase/firebase";
import { useState } from "react";
import {toast} from "react-toastify"

export default function useWishList() {

    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const addWishList=async(item,user)=>{
        try{
            setLoading(true);
           const q=query(collection(db,"wishlist"),
            where("uid","==",user.uid),
            where("mediaId","==",String(item.id))
        );

        const querySnapshot=await getDocs(q);
        if(!querySnapshot.empty){
            toast.error('Already in Wishlist');
            setLoading(false);
            return;
        }
        await addDoc(collection(db,"wishlist"),{
            uid:user.uid,
            mediaId:String(item.id),
            title:item.title || item.name,
            image: item.poster_path,

            releaseDate: item.release_date || item.first_air_date,
            overview: item.overview,
            type: item.title ? "movie" : "tv"
        });
        toast.success('Added to Wishlist');
        setLoading(false);

        }catch(error){
            setError(error.message);
            setLoading(false);
        }
    }

  return {loading,error,addWishList}
}
