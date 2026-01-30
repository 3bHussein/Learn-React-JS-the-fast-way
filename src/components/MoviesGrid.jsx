import React from "react";
import '../styles.css';
import { useState ,useEffect  } from "react";

 function MoviesGrid(){


    const [movies,setMovies] = useState([]);
   
    // to get the data from File
    // fetch('movies.json');
        useEffect(()=>{

            fetch("movies.json")
            .then(response =>response.json())
            .then(data=>setMovies(data))
        },[]);


    
        // don't forget it :)
        // useEffect(()=>{},[]);

    return (

        <div className="movies-grid">
 {
    movies.map(movie=>(
                            // movies Values  id,  rating ,images,genre 
 
                <div key={movie.id} className="movie-card">
                    <img src={`images/${movie.image}`} alt={movie.title} />
                    <h3 className="movie-card-title">{movie.title}</h3>
                    <div className="movie-card-genre">{movie.genre}</div>
                    <div className="movie-card-rating">{movie.rating}</div>
                </div>
                
    ))
 }


     

        
        </div>
    );
}

export default MoviesGrid