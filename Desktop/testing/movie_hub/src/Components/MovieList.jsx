import "../css/MovieList.css";
import { Link } from "react-router-dom";
import useWishList from "../hooks/useWishList";
import {AuthContext} from "../Context/AuthContext";
import { useContext } from "react";

export default function MovieList({movie}) {

    const {addWishList}=useWishList();

    const {user}=useContext(AuthContext);

  return (
    <div className="list-container">
        {movie.map((m)=>(
            <div className="single-movie" key={m.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`}alt={m.title}/>
                <h3 className="single-title">{m.title}</h3>
                <span>{m.release_date}</span>

                <div className="action-btn">
                    <Link to={`/moviedetail/${m.id}`}>Read More</Link>
                    <button onClick={()=>addWishList(m,user)}>WishList</button>    
                </div> 
            </div>
        ))}
    </div>
  )
}
