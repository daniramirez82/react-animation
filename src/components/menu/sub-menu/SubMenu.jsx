import { useEffect, useState } from 'preact/hooks';
import { AnimatePresence, motion } from 'framer-motion'
import styles from './SubMenu.module.scss';

const SubMenu = ({ menu }) => {
    const [visible, setVisible] = useState();
    const [subMenu, setSubMenu] = useState();

    useEffect(() => {
        const myTimer = setTimeout(() => {
            setVisible(true);
            setSubMenu(menu);
        }, 500);

        return () => {
            setVisible(false);
            clearTimeout(myTimer)
        }
    }, [menu])

    return (
        <AnimatePresence >
            {menu && visible &&
                <motion.div
                    key="sub-menu"
                    initial={{ opacity: 0, x: -300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.5 }}
                    className={styles['main-sub-menu']}

                >
                    <div className={styles['sub-menu']}>
                        <h2>{subMenu.subTitle}</h2>
                        <div className={styles.input}>
                            <input className={styles['input-search']} type="text" placeholder='Type here'/>
                        </div>
                        <h3 className={styles.subtitle}>{subMenu.subTitle}</h3>
                        <ul className={styles.list}>
                            {subMenu.contents.map(i => {
                                return (
                                    <li> <a href={i.url}> <span className={styles['li-content']}>{i.name}</span> </a></li>
                                )
                            })}

                        </ul>
                    </div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default SubMenu; 