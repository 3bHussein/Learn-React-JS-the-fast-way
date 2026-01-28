import React from "react";
import '../styles.css';
import { useState ,useEffect  } from "react";

export default function MoviesGrid(){

    const age =20;
    const [movies,setMovies] = useState([]);
    fetch(movies.json);
    //    setMovies=(m);
        useEffect(()=>
        {
        //  const m =['1','2','3'];
            fetch(movies.json)
            .then(Response => Response.json())
            .then(data=> setMovies(data))

                // setMovies(m)
        },[]
        );


        useEffect(()=>{},[]);

    return (

        <div>{age}
        {/* {moveBy.length} */}
        length : {movies.length}
        <br></br>
         
        </div>

        
        
    );
}

