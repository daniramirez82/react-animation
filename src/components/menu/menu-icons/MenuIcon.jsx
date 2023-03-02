import styles from './MenuIcon.module.scss';
import { useState } from 'preact/hooks';
import Icon from './Icon';

const MenuIcon = ({ name, onClick, catContext }) => {

    const [isSelected, setIsSelected] = useState(false);

    return (
        
            <div data-name={name} onClick={(e)=> {e.stopPropagation(); onClick(name)}} className={`${styles.wrapper} ${ name === catContext ? styles.selected : ""}`}>
                <div  className={styles['icon-wrapper']}>
                    <Icon name={name} color={'none'} size={24}></Icon>
                </div>
            </div>
        
    )

}

export default MenuIcon;