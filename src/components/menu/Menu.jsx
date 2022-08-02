import { useEffect, useRef, useState } from 'preact/hooks';
import styles from './Menu.module.scss';
import gsap from 'gsap';

export const Menu = ({isOpen})=>{
   const contMenu= useRef();
   const [isMenuOpen, setIsMenusOpen] = useState(isOpen);
    useEffect(()=>{
        console.log('desde menu', isOpen);
        if (isOpen) {
            gsap.to(contMenu.current, {
                left: 0,
            })
        }else{
            gsap.to(contMenu.current,{
                left: -screen.width
            })
        }

    },[isOpen])



    return(
        <div ref={contMenu} className={styles.principal}></div>
    )
}