import React from "react";
import '../styles.css';
import { useState ,useEffect  } from "react";

export default function MoviesGrid(){

    const age =20;
    // const [movies,setMovies] = useState([]);

    const [movies,setMovies] = useState([]);
    // fetch(movies.)
    // to get the data from File
    // fetch('movies.json');
    

    //    setMovies=(m);
        useEffect(()=>
        {
        //  const m =['1','2','3'];
            fetch("movies.json")
            .then(response => response.json())
            .then(data=> setMovies(data))

                // setMovies(m)
        },[]
        );


        // useEffect(()=>{},[]);

    return (

        <div className="movies-grid">

            {/* {movies.length} */}
            {/* {movies.to} */}

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

