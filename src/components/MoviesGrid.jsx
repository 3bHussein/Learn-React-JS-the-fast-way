import React from "react";
import '../styles.css';
import { useState ,useEffect  } from "react";
import MovieCard from "./MovieCard";
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
 
                    // add the div using the prop function
                      <MovieCard movie={movie} key={movie.id}></MovieCard>             
    ))
 }


     

        
        </div>
    );
}

export default MoviesGrid