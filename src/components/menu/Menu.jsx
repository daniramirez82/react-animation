import { useEffect, useRef, useState } from 'preact/hooks';
import styles from './Menu.module.scss';
import MenuIcon from './menu-icons/MenuIcon';
import gsap from 'gsap';
import { menu } from '../../data/menu-info';
import SubMenu from './sub-menu/SubMenu';

export const Menu = ({ isOpen }) => {
    const contMenu = useRef();
    const [isMenuOpen, setIsMenusOpen] = useState(isOpen);
    const [subMenu, setSubMenu]= useState();

    useEffect(() => {
        console.log('desde menu', isOpen);
        if (isOpen) {
            const enter = gsap.to(contMenu.current, {
                left: 0,
            })
        } else {
            const exit = gsap.to(contMenu.current, {
                left: -contMenu.current.offsetWidth,
            })
        }


    }, [isOpen])

    const updateMenu = (e) => {
        e.preventDefault();

        const subMenuTemp = menu.filter(i=> i.name === e.currentTarget.dataset.name);        
        console.log(subMenuTemp);
        setSubMenu(subMenuTemp[0]);
    }
    return (
        <div ref={contMenu} className={styles.principal}>
            <div className={styles.icons}>
                {menu.map(i => {
                    return <MenuIcon icon={i.icon} name={i.name} onClick={updateMenu} />

                })}
            </div>
            <div className={styles['sub-menu']}>
                {subMenu && <SubMenu subMenu={subMenu}/> }
                <p>Others: </p>
            </div>
        </div>
    )
}