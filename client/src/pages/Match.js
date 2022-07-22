import { useRef } from "react";
import { useLinkClickHandler } from "react-router-dom";

const Match = ({ likedMovies }) => { 
  // andreaelvegard@gmail.com
  // nikola.lukic@appliedtechnology.se
  // morvaridmahmoudi@gmail.com
  const search = useRef(null);
  const matches = useRef(null);
  const matchList = [];

  // const MovieCard = ({ movie }) => {
  //   console.log('inni', movie);
  //   return (
  //     <div>
  //       <h2>{movie.title}</h2>
  //       <img src={`https://image.tmdb.org/t/p/w500/${movie.image}`} />
  //       <p>Rating: {movie.rating}/10</p>
  //     </div>
  //   )
  // }

  const handleSubmit = (e) => {
    matches.current.innerHTML = '';
    e.preventDefault();
    // E-mail of user to serach for
    const searchWord = search.current.value;
    // Fetching to the endpoint that responds with all information about a user
    fetch('http://localhost:3001/storedLists', {  
        method: 'POST', 
        mode: 'cors', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          user: searchWord,
        }) 
      })
      .then(res => res.json())
      .then(data => {
        return data.liked_movies;
      })
      .then(movies => movies.forEach(el => {
        likedMovies.forEach(movie => {
          if(movie.id === el.id) {
            console.log(movie, el);
            const img = `https://image.tmdb.org/t/p/w500/${el.image}`;
            matches.current.innerHTML += (`<div><h2>${el.title}</h2><img src=${img} /><p>Rating: ${el.rating}/10</p></div>`);    
            return matchList.push(el);
          }
        });
      }));
      console.log(matchList)
  }

  return (
    <div>
      <h1>Match</h1>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="What's your friends email?" 
          ref={search} />
      </form>
      <div ref={matches}>
      </div>
    </div>
  );
};

export default Match;