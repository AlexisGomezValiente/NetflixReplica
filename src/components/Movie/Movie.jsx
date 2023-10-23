import styles from "./Movie.module.css";
import { Link, NavLink } from "react-router-dom";

const Movie = (props) => {
  return (
    <div className={styles.container}>
      <NavLink className={styles.titulo} to={`/details/${props.id}`}>
        <h2 className={styles.titulo}>{props.title}</h2>
      </NavLink>
      <img className={styles.img} src={props.img} alt="" />
    </div>
  );
};

export default Movie;
