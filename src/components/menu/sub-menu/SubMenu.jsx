import { useEffect, useState, useContext } from 'preact/hooks';
import { CatContext } from '../../../app';
import { AnimatePresence, motion } from 'framer-motion'
import Input from '../../ui/Input';
import styles from './SubMenu.module.scss';

const SubMenu = ({ onClick, menu }) => {

    const { subMenu, setSubMenu} = useContext(CatContext);

    const [visible, setVisible] = useState();

    const [menuContent, setMenuContent] = useState(null);

    useEffect(() => {

        const myTimer = setTimeout(() => {
            if (menu){
                setVisible(true);
                setMenuContent(menu);
            } else {
                setVisible(false);
            }

        }, 500);

        return () => {
            setVisible(false);
            setMenuContent(null);
            clearTimeout(myTimer)
        }

    }, [menu])

    return (
        <AnimatePresence >
            {subMenu && visible &&
                <motion.div
                    key="sub-menu"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.5 }}
                    className={styles['main-sub-menu']}

                >
                    <div className={styles['sub-menu']}>
                        <h2>{menuContent.subTitle}</h2>
                        <Input/>
                        <h3 className={styles.subtitle}>{menuContent.subTitle}</h3>
                        <ul className={styles.list}>
                            {menuContent.contents.map(i => {
                                return (
                                    <li> <a href={i.url}> <span className={styles['li-content']}>{i.name}</span> </a></li>
                                )
                            })}

                        </ul>
                    </div>
                    <div onClick={onClick} className={styles['empty-area']}></div>
                </motion.div>}
        </AnimatePresence>
    )
}

export default SubMenu; 