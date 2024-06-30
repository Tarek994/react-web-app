import { useState } from "react";

function SearchMovies(props) {
  const [movieTitle, setMovieTitle] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=adc8afc5=${movieTitle}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      props.addFavourites(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={searchMovie}>
        <label htmlFor="query"> Movie Title</label>
        <input
          type="text"
          name="query"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Enter Movie Title"
          role="search"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default SearchMovies;