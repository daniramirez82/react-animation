import styles from './Input.module.scss';

const Input = () => {

    return (
        <div className={styles.input}>
            <input className={styles['input-search']} type="text" placeholder='Search' />
        </div>
    )
}

export default Input;