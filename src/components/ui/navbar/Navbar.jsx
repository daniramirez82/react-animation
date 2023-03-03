import styles from "./Navbar.module.scss";
import { BurguerIcon } from "../BurguerIcon";

const Navbar = ({isOpenMenu, setIsOpenMenu}) => {
    return < div className={styles.nav} >
        <div className="">
            <BurguerIcon isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>
        </div>
        <div className={"" + styles.logo}>
            <div className={styles["logo-img"]}>
                <img src="/icons/logo.svg" alt="logo" />
            </div>
        </div>
    </div >

}

export default Navbar;