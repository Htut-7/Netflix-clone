import "../css/TVShow.css";
import ShowList from "../Components/ShowList";
import ShowSearch from "../Components/ShowSearch";
import { useEffect, useState } from "react";

export default function TVShow() {

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const [show,setShow]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const [search,setSearch]=useState('');
  const [page,setPage]=useState(1);

  useEffect(()=>{
    const getShow=async()=>{
      try{
        setLoading(true);
        let url='';
        if(search){
          url=`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search}&include_adult=false&language=en-US&page=${page}`
        }else{
          url=`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${page}&include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc`
        }
        const ref=await fetch(url);
        const data=await ref.json();
        setShow(data.results);
        setLoading(false);
      }catch(error){
        setError(error.message);
        setLoading(false);
      }
    }
    getShow();
  },[page,search,API_KEY]);

 

  if(error){
    return <p className="error">{error}</p>
  }

  return (
    <div className="show">
      <h2>Popular TV Shows</h2>

    {loading && <span className="spinner"></span>}

      <div className="show-search">
        <ShowSearch search={search} setSearch={setSearch}/>
      </div>

      <div className="show-list">
        <ShowList show={show}/>
      </div>

      <div className="show-pagination">
        {[1,2,3,4,5].map((p)=>(
          <button key={p} onClick={()=>setPage(p)} className={page===p ? "active-page" : ''}>
            {p}
          </button>
        ))}
      </div>
    </div>
  )
}
