import React from "react";
import '../styles.css';
import { useState ,useEffect  } from "react";

export default function MoviesGrid(){

    const age =20;
    const [movies,setMovies] = useState([]);

    //    setMovies=(m);
        useEffect(()=>
        {
         const m =['1','2','3'];

                setMovies(m)
        },[]
        );


        useEffect(()=>{},[]);

    return (
        <div>{age}
        {/* {moveBy.length} */}
        {movies.length}
        </div>

        
        
    );
}

