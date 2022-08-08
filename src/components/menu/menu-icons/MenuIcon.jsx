import styles from './MenuIcon.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-regular-svg-icons';

const MenuIcon = ({ icon, name, onClick }) => {


    return (
        <div data-name={name} onClick={onClick} className={styles.wrapper}>
            <div  className={styles['icon-wrapper']}>
                <img src={`icons/${icon}`} alt={name} />
            </div>
        </div>
    )

}

export default MenuIcon;