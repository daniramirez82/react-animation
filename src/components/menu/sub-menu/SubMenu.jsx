import styles from './SubMenu.module.scss';

const SubMenu = ({ subMenu }) => {

    return (
        <div className={styles['sub-menu']}>
            <p>SubTitle {subMenu.subTitle}</p>

        </div>
    )
}

export default SubMenu;