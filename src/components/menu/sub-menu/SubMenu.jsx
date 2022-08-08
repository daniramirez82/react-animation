import gsap from 'gsap';
import { useEffect, useRef } from 'preact/hooks';
import styles from './SubMenu.module.scss';

const SubMenu = ({ subMenu }) => {
    const subMenuCont = useRef();

    useEffect(()=>{
        gsap.to(subMenuCont.current, {
            x:0,
            opacity:1,
        });
        return ()=>{
            console.log(subMenu);
            gsap.to(subMenuCont.current, {
                x:-100,
                opacity:0,
            })
        }
        
    },[subMenu])

    return (
        <div ref={subMenuCont} className={styles['sub-menu']}>
            <h2>{subMenu.subTitle}</h2>
            <input className={styles['input-search']} type="text" />
            <h3 className={styles.subtitle}>{subMenu.subTitle}</h3>
            <ul className={styles.list}>
            {subMenu.contents.map(i=>{
                return (
                   <li> <a href={i.url}> <span>{i.name}</span> </a></li>
                )
            })}

            </ul>
        </div>
    )
}

export default SubMenu; 