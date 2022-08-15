import { useEffect, useRef, useState } from 'preact/hooks';
import styles from './Menu.module.scss';
import MenuIcon from './menu-icons/MenuIcon';
import { menu } from '../../data/menu-info';
import SubMenu from './sub-menu/SubMenu';
import { AnimatePresence, motion } from 'framer-motion'

export const Menu = ({ isOpen }) => {

    const contMenu = useRef();
    const [subMenu, setSubMenu] = useState();
    const subMenuCont = useRef();



    const updateMenu = ({ currentTarget }) => {

        if (subMenu) {
            if (subMenu.name == currentTarget.dataset.name) return
        }
        const tempSubMenu = menu.filter(i => i.name === currentTarget.dataset.name)

        setSubMenu(tempSubMenu[0]);
    }
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    exit={{
                        opacity: 0,
                        x: -120
                    }}
                >
                    <div ref={contMenu} className={styles.principal}>
                        <div className={styles.icons}>
                            {menu.map(i => {
                                return <MenuIcon icon={i.icon} name={i.name} onClick={updateMenu} />

                            })}
                        </div>
                        <div ref={subMenuCont} className={styles['sub-menu']}>
                            {subMenu && <SubMenu menu={subMenu} />}
                        </div>
                    </div>
                </motion.div>)}
        </AnimatePresence>
    )
}