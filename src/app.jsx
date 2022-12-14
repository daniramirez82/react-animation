import { useState } from "preact/hooks";
import styles from "./app.module.scss";
import { Menu } from "./components/menu/Menu";
import { BurguerIcon } from "./components/ui/BurguerIcon";
import Icon from "./components/menu/menu-icons/Icon";
export function App() {
  const [isOpenMenu, setIsOpenMenu] = useState();

  const toggleMenu = (isOpen)=>{
    setIsOpenMenu(isOpen);
  }

  return (
    <>
      <div className={"pure-g " + styles.nav}>
        <div className="pure-u-7-8">
          <BurguerIcon toggleMenu={toggleMenu} />
        </div>
        <div className={"pure-u-1-8 " + styles.logo}>
          <div className={styles["logo-img"]}>
            <img src="/icons/logo.svg" alt="logo" />
          </div>
        </div>
      </div>
      <div className={"pure-g " + styles.content}>
        <Menu isOpen={isOpenMenu}/>
        <Icon name ='account-group' color={'red'} size={50}/>
      </div>
    </>
  );
}
