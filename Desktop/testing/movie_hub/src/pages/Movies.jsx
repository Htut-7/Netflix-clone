import { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";
import MovieSearch from "../Components/MovieSearch";
import "../css/Movies.css";

export default function Movies() {

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const [movie,setMovie]=useState([]);
    const [search,setSearch]=useState('');
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const [page,setPage]=useState(1);

    useEffect(()=>{
        const getMovie=async()=>{
           try{
            setLoading(true);
           let url='';
           if(search){
            url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}&include_adult=false&language=en-US&page=${page}`
           }else{
            url=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`
           }
           const ref=await fetch(url);
           const data=await ref.json();
           setMovie(data.results);
           setLoading(false);
           }catch(error){
            setError(error.message);
           }
        };
        getMovie();
    },[page,search,API_KEY])

 

if(error){
    return <p className="error">{error}</p>
}
  

  return (
    <div className="movie">
        <h2>Popular Movies</h2>

    {loading && <span className="spinner"></span>}

        <div className="movie-search">
            <MovieSearch search={search} setSearch={setSearch}/>
        </div>

        <div className="movie-list">
            <MovieList movie={movie}/>
        </div>

        <div className="pagination">
            {[1,2,3,4,5].map((p)=>(
                <button key={p} onClick={()=>setPage(p)} className={page ===p ? "active-page" : ''}>
                    {p}
                </button>
            ))}
        </div>
    </div>
  )
}
