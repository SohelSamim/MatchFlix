import React, { useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

function MovieBox({title, poster_path, vote_average, release_date,overview}) {
  
  return (
    <div className="App">
      <h1>{title}</h1>
      <img src={API_IMG+poster_path} alt={title}></img>
      <p>{overview}</p>
        MOVIE INFO
    </div>
  );
}
export default MovieBox;