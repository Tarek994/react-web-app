import { useState } from "react";
import "./App.css";
import SearchMovies from "./SearchMovies";
import FavouritesList from "./FavouritesList";

function App() {
  const [favourites, setFavourites] = useState([]);

  const addFavourites = (movie) => {
    setFavourites([...favourites, movie]);
  };

  console.log(favourites);
  return (
    <div className="App">
      <SearchMovies addFavourites={addFavourites} />
      <FavouritesList favourites={favourites} />
    </div>
  );
}

export default App;
