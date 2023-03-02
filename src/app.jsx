import { useState } from "preact/hooks";
import { createContext } from "preact";
import styles from "./app.module.scss";
import { Menu } from "./components/menu/Menu";
import { BurguerIcon } from "./components/ui/BurguerIcon";
import Icon from "./components/menu/menu-icons/Icon";
import Navbar from "./components/ui/navbar/Navbar";


export function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(null);
  
  const MenuContext = createContext();
  const CatContext = createContext();

  const closeMenu = (e) => {
    setIsOpenMenu(false);
    setSubMenu(null);
  }

  return (
    <MenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      <CatContext.Provider value={{ subMenu, setSubMenu }} >
        <div className={styles["app-wrapper"]}>
          <Navbar />
          {/* menu */}
          <div className={styles.content}>
            <Menu onClick={closeMenu} />
          </div>
          {/* end menu */}
        </div>
      </CatContext.Provider>
    </MenuContext.Provider>
  );
}
