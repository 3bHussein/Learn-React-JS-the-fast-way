import React from "react";
import '../styles.css';
import { useState ,useEffect  } from "react";

 function MoviesGrid(){


    const [movies,setMovies] = useState([]);
   
    // to get the data from File
    // fetch('movies.json');
    


        useEffect(()=>
        {
        //  const m =['1','2','3'];
            fetch("movies.json")
            // fetch(movies.json)
            .then(response => response.json())
            .then(data=> setMovies(data))
            console.log("hello from fetchasda");
             
        },[]
        );


        // useEffect(()=>{},[]);

    return (

        <div className="movies-grid">
 

         {
            movies.map(movie=>(
                <div key={movie.id} className="movie-card">
                    <img src={`images/${movie.image}`} alt={movie.title} />
                    <div className="movie-card-info">
                        <h3 className="movie-card-title">{movie.title}</h3>
                        <p className="movie-card-genre">{movie.genre}</p>
                        <p className="movie-card-rating">{movie.rating}</p>
                        
                    </div>
                </div>
            ))
         }
        </div>

        
        
    );
}

export default MoviesGrid