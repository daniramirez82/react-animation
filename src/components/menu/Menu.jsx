import { useContext, useEffect, useRef, useState } from 'preact/hooks';
import { CatContext } from '../../app';
import styles from './Menu.module.scss';
import MenuIcon from './menu-icons/MenuIcon';
import { menu } from '../../data/menu-info';
import SubMenu from './sub-menu/SubMenu';
import { AnimatePresence, motion } from 'framer-motion'

export const Menu = ({onClick, isOpen}) => {

    const { subMenu, setSubMenu } = useContext(CatContext);
    const [contentMenu, setContentMenu] = useState(null)

    const handleClick = (name) => {


        if (subMenu) {
            if (subMenu == name) {
                setContentMenu(null);
                setSubMenu(null);
                return
            }
        }

        setSubMenu(name);

        const tempSubMenu = menu.filter(i => i.name === name)

        setContentMenu(tempSubMenu[0]);
    }
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles['wrapper-animated-cont']}
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

                    <div className={styles.principal} onClick={onClick}>
                        <div className={styles['icons-cont']}>
                            <div className={styles.icons}>
                                {menu.map(i => {
                                    return <MenuIcon catContext={subMenu} name={i.name} onClick={handleClick} />

                                })}
                            </div>
                            <img className={styles['profile-pic']} src="/profile-pic.png" alt="profile pic" />
                        </div>
                        <div className={styles['sub-menu-cont']}>
                            <SubMenu menu={contentMenu} />
                        </div>
                    </div>


                </motion.div>)}
        </AnimatePresence>
    )
}