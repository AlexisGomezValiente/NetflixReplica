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
    }} class={`${styles.hamburger} ${hambur ? styles.isActive: ''}`} id={styles.hamburger1}>
      <span class={styles.line}></span>
      <span class={styles.line}></span>
      <span class={styles.line}></span>
    </div>
  );
};

export default BotonHambur;
