import "../css/WishList.css";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { collection,getDocs,query, where } from "firebase/firestore";
import {db} from "../firebase/firebase";
import { FiDelete } from "react-icons/fi";
import useDeleteWishList from "../hooks/useDeleteWishList";

export default function WishList() {

    let [wishlist,setWishlist]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const {user}=useContext(AuthContext);

    let {deleteList}=useDeleteWishList();

    useEffect(()=>{
        const getWishlist=async()=>{
            try{
                setLoading(true);
                const q=query(collection(db,"wishlist"),
                where("uid","==",user.uid)
            );
            const querySnapshot=await getDocs(q);
            const data=querySnapshot.docs.map((doc)=>({
                id:doc.id,
                ...doc.data()
            }));
             setLoading(false);
            setWishlist(data);

            }catch(error){
                setError(error.message);
                setLoading(false);
            }
        };
        if(user){
            getWishlist();
        };
        
    },[user]);

    {error && <p className="error">{error}</p>}

    const removeWishList=async(id)=>{
        await deleteList(id);

        setWishlist((prev)=>
            prev.filter((item)=>item.id !== id)
        )
    }

  return (
    <div className='wishlist-container'>
        <h2>My WishList</h2>
    {loading && <span className="spinner"></span>}

        <div className="wishlist-content">
            {wishlist.map((w)=>(
                <div className="single-wishlist" key={w.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${w.image}`} alt={w.title}/>

                    <h3>{w.title}</h3>
                    <span>Release Date: <strong>{w.releaseDate}</strong></span>

                    <div className="wishlist-btn">
                        <button onClick={()=>removeWishList(w.id)}>
                            <FiDelete/>
                        </button>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}
