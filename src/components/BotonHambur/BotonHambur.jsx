import styles from './BotonHambur.module.css'
import { useState } from 'react';

const BotonHambur = (props) => {
    const [hambur, setHambur] = useState(false);

    const handleClick = () => {
        setHambur(!hambur);
    }

    const cambiarNav = () =>{
      props.handleNav()
    }

  return (
    <div onClick={() => {
      handleClick();
      cambiarNav()
    }} className={`${styles.hamburger} ${hambur ? styles.isActive: ''}`} id={styles.hamburger1}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
};

export default BotonHambur;
