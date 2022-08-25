import styles from './MenuIcon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretUp } from '@fortawesome/free-regular-svg-icons';
import { animate, motion } from 'framer-motion';
import Icon from './Icon';
const MenuIcon = ({ icon, name, onClick }) => {


    return (
        <motion.div
            whileTap={{
                scale: 0.8,
            }}
            whileHover={{
                backgroundColor: 'red'

            }}

        >
            <div data-name={name} onClick={onClick} className={styles.wrapper}>
                <div  className={styles['icon-wrapper']}>
                    <Icon name={name} color={'red'} size={24}></Icon>
                </div>
            </div>
        </motion.div>
    )

}

export default MenuIcon;