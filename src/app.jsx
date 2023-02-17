import { useState } from "preact/hooks";
import { createContext } from "preact";
import styles from "./app.module.scss";
import { Menu } from "./components/menu/Menu";
import { BurguerIcon } from "./components/ui/BurguerIcon";
import Icon from "./components/menu/menu-icons/Icon";


export function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(null);

  const MenuContext = createContext();
  const CatContext = createContext();

  const handleClick = () => {

    setIsOpenMenu(false);
    setSubMenu(null);
    
  }

  return (
    <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      <CatContext.Provider value={{ subMenu, setSubMenu }} >
        {/* navBar */}
        <div className={"pure-g " + styles.nav}>
          <div className="pure-u-7-8">
            <BurguerIcon />
          </div>
          <div className={"pure-u-1-8 " + styles.logo}>
            <div className={styles["logo-img"]}>
              <img src="/icons/logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        {/* end navBar */}
        {/* todo fix the problem with he hover to hte icons lose the background dark when click */}
        {/* menu */}
        <div className={"pure-g " + styles.content}>
          <Menu isOpen={isOpenMenu} />
          <Icon name='account-group' color={'red'} size={50} />
          {isOpenMenu && <div onClick={handleClick} className={styles.backdrop}></div>}
        </div>
        {/* end menu */}
      </CatContext.Provider>
    </MenuContext.Provider>
  );
}
