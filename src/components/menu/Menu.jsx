import { useEffect, useRef, useState } from 'preact/hooks';
import styles from './Menu.module.scss';
import MenuIcon from './menu-icons/MenuIcon';
import gsap from 'gsap';
import { menu } from '../../data/menu-info';
import SubMenu from './sub-menu/SubMenu';

export const Menu = ({ isOpen }) => {
    const contMenu = useRef();
    const [subMenu, setSubMenu] = useState();
    const subMenuCont = useRef();

    useEffect(() => {
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

        console.log('esto es e en updatemenu?,', e);
        if (subMenu) {
            if (subMenu.name == e.currentTarget.dataset.name) return
        }

        const setNewSubMenu = (t) => {
            console.log('lo que envia on complete', t.target);
            const subMenuTemp = menu.filter(i => i.name === e.currentTarget.dataset.name);
            setSubMenu((prevSubMenu) => {
                return subMenuTemp[0];
            });

        }


        const tl = gsap.timeline({
            onComplete: setNewSubMenu,
            onCompleteParams: [e],
        });
        tl.to(subMenuCont.current, {
            x: -100,
            opacity: 0,

        }).to(subMenuCont.current, {
            x: 0,
            opacity: 1
        });

    }
    return (
        <div ref={contMenu} className={styles.principal}>
            <div className={styles.icons}>
                {menu.map(i => {
                    return <MenuIcon icon={i.icon} name={i.name} onClick={updateMenu} />

                })}
            </div>
            <div ref={subMenuCont} className={styles['sub-menu']}>
                {subMenu && <SubMenu subMenu={subMenu} />}
                <p>Others: </p>
            </div>
        </div>
    )
}