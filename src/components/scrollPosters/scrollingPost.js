import React,{useState,useEffect} from 'react'
import './poster.css'
import axios from 'axios'
import { baseUrl ,imageUrl,TMDB_API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'


function ScrollingPost(props) {
    const [movie,setMovie] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(()=>{
        axios.get(baseUrl+props.url).then((response)=>{
            console.log(response.data)
            setMovie(response.data.results)
        }).catch(err=>{
            alert('network error')
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
        autoplay: 0,
        }}
        const handleMovie = (id)=>{
            axios.get(`${baseUrl}/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`).then((response)=>{
                console.log(response.data)
              if(response.data.results.length !==0){
                setUrlId(response.data.results[0])
              }else{
                console.log('data is empty')
              }
            }).catch((err)=>{
              console.log('no data on the url')
            })
        }
  return (
    <div className='scrolling'>
      <h2>
        {props.tittle} 
      </h2>
      <div className="posters">
       {movie.map((obj)=>{
            return(
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPosterImage':'posterImage'} src={`${imageUrl+obj.backdrop_path}`} alt=''></img>
            )
       }
       )}
      </div>
      {urlId && <Youtube opts = {opts} videoId ={urlId.key} />  }
      
    </div>
  )
}

export default ScrollingPost
