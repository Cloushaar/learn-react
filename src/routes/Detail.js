import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTubeVideo from "../components/Youtube";

function Detail() {
    const [loading, setLoading] = useState(true)
    const [movieDetail, setMovieDetail] = useState()
    const { id } = useParams()
    const getMovie = async () => { 
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
            setMovieDetail(json)
            setLoading(false)
    }
    
    useEffect(()=>{
        getMovie();
    }, [])
    return(
        loading ? <h1>Loading...</h1> : 
        <div>
            <img src={movieDetail.data.movie.medium_cover_image}></img>
            <h2>{movieDetail.data.movie.title_long}</h2>
            <strong>Rating: {movieDetail.data.movie.rating} Runtime: {movieDetail.data.movie.runtime} Minutes</strong>
            <br/>
            <a>{movieDetail.data.movie.genres.join(", ")}</a>
            <YouTubeVideo videoId={movieDetail.data.movie.yt_trailer_code}/>
        </div>
    )
}

export default Detail;