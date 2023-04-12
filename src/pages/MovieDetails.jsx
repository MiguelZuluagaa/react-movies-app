import { useParams } from "react-router-dom";
import { get } from "../data/httpClient"
import { useState, useEffect } from "react";
import { getMovieImg } from "../utils/getMovieImg";
import "./MovieDetails.css"

export function MovieDetails(){
     const {movieId} = useParams();
     const [movie, setMovie] = useState([]);
     const [generos, setGeneros] = useState([]);

     useEffect(()=>{
          get("/movie/"+movieId).then((data) =>{
               setMovie(data);
               setGeneros(data.genres.map((dataItem) => {return(dataItem.name)}))
          })
     }, [movieId]);

     const imageUrl = getMovieImg(movie.poster_path,500);

     return(
          <div className="detailContainer">
               <img className="col movieImage" src={imageUrl} alt={movie.title}/>
               <div className="col movieDetails">
                    <p className="title"><strong>{movie.title}</strong></p>
                    <p><strong>Genres:</strong> {generos.join(", ")}</p>
                    <p><strong>Description:</strong> {movie.overview}</p>
               </div>
          </div>
     );
}