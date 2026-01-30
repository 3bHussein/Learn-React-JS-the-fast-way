import React from "react";
import '../styles.css';
import { useState ,useEffect  } from "react";
import MovieCard from "./MovieCard";
 function MoviesGrid(){


    const [movies,setMovies] = useState([]);
    const [searchTerm ,setSearchTerm]=useState('');
   
    // to get the data from File
    // fetch('movies.json');
        useEffect(()=>{

            fetch("movies.json")
            .then(response =>response.json())
            .then(data=>setMovies(data))
        },[]);
    // const handleSearchChange = (e)=>{ 
    //     searchTerm(e.target.value)  
        
    //     };
        const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
};


        const filterMovives= movies.filter(movie=>movie.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()))


    
        // don't forget it :)
        // useEffect(()=>{},[]);

    return (
    <div>

    <input type="text" placeholder="Search your Movie..."
     className="search-input"
     value={searchTerm}

     onChange={handleSearchChange}
     
     />
  <div className="movies-grid">
    {
    filterMovives.map(movie=>(
    // movies Values  id,  rating ,images,genre 

    // add the div using the prop function
    <MovieCard movie={movie} key={movie.id}></MovieCard>             
    ))
    }


    </div>
</div>
  
    );
}

export default MoviesGrid