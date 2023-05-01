import React,{useState,useEffect} from 'react'
import './banner.css'
import axios from 'axios'
import { TMDB_API_KEY } from '../../constants/constants'
import { imageUrl } from '../../constants/constants'
import { baseUrl } from '../../constants/constants'

function Banner() {
    const[movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(`${baseUrl}/trending/movie/day?api_key=${TMDB_API_KEY}`).then((response)=>{
            const trendingMovies = response.data.results
            const randomIndex = Math.floor(Math.random() * trendingMovies.length);
            setMovie(response.data.results[randomIndex])
        })
    },[])

  return (
    <div
    style={{backgroundImage:`url(${movie?imageUrl+ movie.backdrop_path:''})`}} 
     className='banner'>
      <div className="content">
        <h1 className='tittle'>
        Unlimited movies, TV shows, and more
        </h1>
        <div className="contentButton">
            <button>
                Play
            </button>
            <button>
                My Playlist
            </button>
            <h4 className='subTittle'>
            Watch anywhere. Cancel anytime.
            </h4>
        </div>
      </div>
      <div className="bannerFade"></div>
    </div>
  )
}

export default Banner
