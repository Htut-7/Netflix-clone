import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/ShowDetail.css";
import { FiArrowLeft } from "react-icons/fi";

export default function ShowDetail() {

    const {id}=useParams();
    const [show,setShow]=useState('');
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);
    const [trailer,setTrailer]=useState('');

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    useEffect(()=>{
        const showDetail=async()=>{
            try{
                setLoading(true);
                const res=await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`);
                const  data=await res.json();
                setLoading(false);
                setShow(data);

                 const showRes=await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`);
                const showData=await showRes.json();
                 const officialShowTrailer=showData.results.find((video)=>
                        video.type==='Trailer' && video.site==="YouTube"
                    );
                    if(officialShowTrailer){
                        setTrailer(officialShowTrailer.key)
                    }

            }catch(error){
                setError(error.message);
                setLoading(false);
            }
        }
        showDetail();
    },[id,API_KEY]);

    if(error){
        return <p className="error">{error}</p>
    }

  return (
    <div className="showdetail-container">

        {loading && <span className="spinner"></span>}

        {show && (
            <div className="show-content">
                <img src={`https://image.tmdb.org/t/p/w500/${show.backdrop_path}`} alt={show.title}/>

                <div className="show-info">
                    <h3>{show.name}</h3>
                    <p>Release Date: <strong>{show.first_air_date}</strong></p>
                    <span>User Votes: {show.vote_count}</span>
                    <p>Average Vote: {show.vote_average}</p>
                </div>

                <div className="show-overview">
                    <h4>Overview</h4>
                    <p>{show.overview}</p>
                    {trailer && (
                    <div className="showtrailer-container">
                        <h2>Official Trailer</h2>
                       <iframe width="100%" height="450" src={`https://www.youtube.com/embed/${trailer}`}title="Show Trailer" allowFullScreen></iframe>
                    </div>
                )}
                </div>

                

                <Link to='/show'>
                    <FiArrowLeft/>
                </Link>
            </div>
        )}
    </div>
  )
}
