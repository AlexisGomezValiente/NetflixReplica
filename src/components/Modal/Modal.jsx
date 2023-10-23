import styles from "./Modal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { modal } from "../../redux/actions";
import { useEffect } from "react";
import espanol from "../../img/espana.png";
import ingles from "../../img/estados-unidos.png";
import { AiTwotoneStar, AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Modal = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieModal);

  const img = (path) => {
    return `https://image.tmdb.org/t/p/w500${path}`;
  };

  useEffect(() => {
    dispatch(modal(id));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Link to={"/"}>
          <button className={styles.close}>
            <AiFillCloseCircle className={styles.closeIcon} />
          </button>
        </Link>
        <h2 className={styles.titulo}>{movie.title}</h2>
        <div className={styles.containerInfo}>
          <div className={styles.containerInfo2}>
            <img className={styles.img} src={img(movie.backdrop_path)} alt="" />
          </div>
          <div className={styles.containerInfo3}>
            <h2 className={styles.description}>Description</h2>
            <p className={styles.parrafo}>{movie.overview}</p>
            <h2 className={styles.date}>
              Fecha de lanzamiento: {movie.release_date}
            </h2>
            <h2 className={styles.votos}>
              Votos: {movie.vote_average}{" "}
              <AiTwotoneStar className={styles.votosIcon} />{" "}
            </h2>
            <h2 className={styles.h2lenguaje}>
              Lenguaje:
              <img
                className={styles.lenguaje}
                src={movie.original_language == "en" ? ingles : espanol}
                alt=""
              />
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
