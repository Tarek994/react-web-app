import FavouriteMovie from "./FavouriteMovie";

function FavouritesList(props) {
  return (
    <div>
      <h3>My Favourite Movie</h3>
      <ul>
        {props.favourites.map((movie) => (
          <FavouriteMovie movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default FavouritesList;
