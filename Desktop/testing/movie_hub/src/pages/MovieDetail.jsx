import { useEffect, useState } from "react";
import "../css/MovieDetail.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {  FiArrowLeft } from "react-icons/fi";

export default function MovieDetail() {

    const {id}=useParams();
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    const [movie,setMovie]=useState('');
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [trailer,setTrailer]=useState('');

    useEffect(()=>{
        const getMovieDetail=async()=>{
          try{
            setLoading(true);
              const res=await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc)`);
              const data=await res.json();
            setLoading(false);
            setMovie(data);

            const trailerRes=await fetch (`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
            const trailerData=await trailerRes.json();
            const officialTrailer=trailerData.results.find((video)=>
              video.type === "Trailer" && video.site === "YouTube"
            );
            if(officialTrailer){
              setTrailer(officialTrailer.key)
            }
          }catch(error){
            setError(error.message);
            setLoading(false);
          }
        }
        getMovieDetail();
    },[id,API_KEY])

    if(error){
        return <p className="error">{error}</p>
    }

  return (
    <div className="detail-container">
        {loading && <span className="spinner"></span>}
        {movie && (
            <div className="detail-content">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}/>
                <div className="detail-info">
                    <h3>{movie.title}</h3>
                <span>Release Date: <strong>{movie.release_date}</strong></span>
                <p>Popularity: {movie.popularity}</p>
                <p>User Votes: {movie.vote_count}</p>
                <span>Average Vote: {movie.vote_average}</span>
                </div>

                <div className="overview">
                    <h4>Overview</h4>
                    <p>{movie.overview}</p>

                    {trailer && (
                      <div className="trailer-container">
                        <h2>Official Trailer</h2>
                        <iframe width="100%" height="450" src={`https://www.youtube.com/embed/${trailer}`} title="Movie Trailer"
                        allowFullScreen></iframe>
                      </div>
                    )}
                </div>

                <Link to='/movie'>
                    <FiArrowLeft className="detail-icon"/>
                </Link>
            </div>
        )}
    </div>
  )
}
