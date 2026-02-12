// import React from "react";
// import '../styles.css';


// function MovieCard({movie}){

//     const ImageHandler= (e)=>e.target.src= "images/default.jpg";
//     const GetRate=(rating)=>{
//         if(rating>=8)return 'rating-good';
//         if (rating >=5 && rating<8)return 'rating-ok';
//         return 'rating-bad';
//         // that one not work i don't know i will search for it later "XD"
//         // i know why because only else without return will not work {"Syntax Error"}
//         // else{} 'rating-bad';

//     };


//     return(

//           <div key={movie.id} className="movie-card">
//                     <img src={`images/${movie.image}`}
//                      alt={movie.title}
//                      onError={ImageHandler}
//                      />

//                     <h3 className="movie-card-title">{movie.title}</h3>
//                     <div className="movie-card-genre">{movie.genre}</div>
//                     <div className={`movie-card-rating ${GetRate(movie.rating)}`}>{movie.rating}</div>
//                 </div>
//     );
// }
 
// export default MovieCard

// 

// 


