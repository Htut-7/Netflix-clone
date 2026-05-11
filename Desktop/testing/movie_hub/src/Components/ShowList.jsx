import "../css/ShowList.css";
import { Link } from "react-router-dom";
import useWishList from "../hooks/useWishList";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export default function ShowList({show}) {

    const {user}=useContext(AuthContext);

    const {addWishList}=useWishList();

  return (
    <div className="show-container">
        {show.map((s)=>(
            <div className="single-show" key={s.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${s.poster_path}`} alt={s.title}/>
                <h3>{s.name}</h3>
                <span>On Air Date: <strong>{s.first_air_date}</strong></span>

                <div className="content-btn">
                    <Link to={`/showdetail/${s.id}`}>Read More</Link>
                    <button onClick={()=>addWishList(s,user)}>WishList</button>
                </div>
            </div> 
        ))}
    </div>
  )
}
