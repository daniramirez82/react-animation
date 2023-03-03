import { useContext } from "preact/hooks";
import styles from "./BurguerIcon.module.scss";
import { CatContext } from "../../app";

export const BurguerIcon = ({ isOpenMenu, setIsOpenMenu }) => {
  const { subMenu, setSubMenu } = useContext(CatContext);
  const checkedHandler = ({ currentTarget }) => {
    setIsOpenMenu(currentTarget.checked);
    if (subMenu) setSubMenu(null);
  }

  return (
    <div className="button-movil">
      <div className={styles["icon-wrap"]}>
        <label for="check" className={styles["icon-cont"]}>
          <input onInput={checkedHandler} className={styles['checkbox-input']} type="checkbox" id="check" checked={isOpenMenu}></input>
          <div className={`${styles.shape} ${styles.one}`}></div>
          <div className={`${styles.shape} ${styles.two}`}></div>
          <div className={`${styles.shape} ${styles.three}`}></div>
        </label>
      </div>
    </div>
  );
};
