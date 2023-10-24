import styles from "./MoviePrincipal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { movieTrailer } from "../../redux/actions";
import { useEffect, useState } from "react";

const MoviePrincipal = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const trailer = useSelector((state) => state.movieTrailer);

  useEffect(() => {
    // Verificar si ya tenemos la lista de películas, si no, obtén las películas primero.
    if (movies.length) {
      // Una vez que tenemos la lista de películas, elige una al azar.
      const moviesIDS = movies.map((movie) => movie.id);
      const cantidadIDS = moviesIDS.length;
      const numAleatorio = Math.floor(Math.random() * cantidadIDS);
      const id = moviesIDS[numAleatorio];

      // Solo haz el dispatch para obtener el tráiler si tenemos un ID válido.
      if (id) {
        dispatch(movieTrailer(id));
      }
    }
  }, [dispatch, movies]);

  return (
    <div className={styles.container}>
      {trailer ? (
        <iframe
          src={`https://www.${trailer.site}.com/embed/${trailer.key}?autoplay=1&controls=0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.video}
        ></iframe>
      ) : null}
    </div>
  );
};

export default MoviePrincipal;
