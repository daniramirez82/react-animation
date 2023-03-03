import { useState } from "preact/hooks";
import { createContext } from "preact";
import styles from "./app.module.scss";
import { Menu } from "./components/menu/Menu";
import Navbar from "./components/ui/navbar/Navbar";

export const CatContext = createContext();

export function App() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(null);

  const closeMenu = (e) => {
    setIsOpenMenu(false);
    setSubMenu(null);
  }

  return (
    <CatContext.Provider value={{ subMenu, setSubMenu }} >
      <div className={styles["app-wrapper"]}>
        <Navbar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        {/* menu */}
        <div className={styles.content}>
          <Menu onClick={closeMenu} isOpen={isOpenMenu} />
        </div>
        {/* end menu */}
      </div>
    </CatContext.Provider>
  );
}
