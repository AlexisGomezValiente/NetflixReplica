import { useEffect } from "react";
import { getMovies } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const img = (path) => {
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {movies.map((movie) => {
          return (
            <Movie
              id={movie.id}
              key={movie.id}
              title={movie.original_title}
              img={img(movie.poster_path)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
