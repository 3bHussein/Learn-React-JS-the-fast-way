import React from "react";
import '../styles.css';


function MovieCard({movie}){




    return(

          <div key={movie.id} className="movie-card">
                    <img src={`images/${movie.image}`} alt={movie.title} />
                    <h3 className="movie-card-title">{movie.title}</h3>
                    <div className="movie-card-genre">{movie.genre}</div>
                    <div className="movie-card-rating">{movie.rating}</div>
                </div>
    );
}
 
export default MovieCard