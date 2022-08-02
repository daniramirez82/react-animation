import { useState } from "preact/hooks";
import styles from "./BurguerIcon.module.scss";

export const BurguerIcon = ({toggleMenu}) => {

    const [isOpen, setIsOpen]=useState(false);

    const checkedHandler = ({currentTarget})=>{
        setIsOpen(currentTarget.checked); 
        toggleMenu(currentTarget.checked);
    }
    
  return (
    <div className="button-movil">
      <div className={styles["icon-wrap"]}>
        <label for="check" className={styles["icon-cont"]}>
          <input onInput={checkedHandler} className= {styles['checkbox-input']} type="checkbox" id="check" checked={isOpen}></input>
          <div className={`${styles.shape} ${styles.one}`}></div>
          <div className={`${styles.shape} ${styles.two}`}></div>
          <div className={`${styles.shape} ${styles.three}`}></div>
        </label>
      </div>
    </div>
  );
};
