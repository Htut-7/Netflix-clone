import './Movie.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


export default function Movie() {
let [data,setData]=useState([]);
 let [loading,setLoading]=useState(true);
 let [error,setError]=useState(null)
 let [filterdata,setFilterdata]=useState([]);
 

 useEffect(()=>{
    fetch('http://localhost:3000/movies')
    .then(res=>{
        if(!res.ok){
            throw Error('Something went wrong');
        }
        return res.json();
    })
    .then(data=>{
        setData(data);
        setLoading(false)
        setFilterdata(data);
    })
    .catch(e=>{
        setError(e.message)
    })
 },[])

const filterBy=(genre)=>{

    if(genre==='All'){
        setFilterdata(data);
    }
   else{
    setFilterdata(data.filter(m=>m.genre === genre))
   }
}

    return (
        <>
        <div className="movie-page">
                {error && <p className="error-msg">Error: {error}</p>}
                {loading && <p className="loading-msg">🎬 Loading Movies...</p>}

                <div className="fil-btn">
                    <button className={``} onClick={()=>filterBy('All')}>All</button>
                    <button onClick={()=>filterBy('Sci-Fi')}>Sci-Fi</button>
                    <button onClick={()=>filterBy('Action')}>Action</button>
                    <button onClick={()=>filterBy('Thriller')}>Thriller</button>
                    <button onClick={()=>filterBy('Adventure')}>Adventure</button>
                    <button onClick={()=>filterBy('Horror')}>Horror</button>

                   <div className='search-box'>
                    <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="search-icon"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  />
</svg>

                    <input type='text' placeholder='Search Movie name here'/>
                   </div>
                </div>

             <section className="movie-section">
                 <h2 className="section-title">All Movies</h2>
                 <div className="movie-row" role="list">
                     { filterdata.map((movies) => (
                         <article className="movie-card" key={movies.id} role="listitem">
                             <div className="poster-wrap">
                                 <img src={movies.cover} alt={movies.title} />
                                 <button className="play-btn" aria-label={`Play ${movies.title}`}>▶</button>
                             </div>
                             <div className="card-meta">
                                 <h3 className="card-title">{movies.title}</h3>
                                 <div className="card-sub">
                                     <span className="genre">{movies.genre}</span>
                                     <span className="rating">⭐ {movies.rating}</span>
                                 </div>

                                 <div className='movie-btn'>
                                    <NavLink to={`/movie/${movies.id}`}>▶ Watch Now</NavLink>
                                 </div>
                             </div>
                         </article>
                     ))}
                 </div>
             </section>
        </div>
       
        </>
    )
}
