import React from 'react';
import {Link, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import './Detail.css';

export default function Detail() {

    let params=useParams();
    let [movie, setMovie]=useState([]);
    let [loading,setLoading]=useState(true);
    let[error,setError]=useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3000/movies/`+params.id)
        .then(res=>{
            if(!res.ok){
                throw Error('Something went wrong')
            }
            return res.json();
        })
        .then(movie=>{
            setMovie(movie);
            setLoading(false);
            setError(false);
        })
        .catch(e=>
            setError(e.message)
        )
    },[params.id])

  return (
        <div className='detail-container'>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {movie &&<div className='detail-page'>
                <img src={movie.cover} alt={movie.title}/>
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                    <Link to='/movie'>Back</Link>
                    <Link>▶ Watch Now</Link>
            </div>}
        </div>
  )
}
