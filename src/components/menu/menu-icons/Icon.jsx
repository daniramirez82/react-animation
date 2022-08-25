import Icons from "../../../data/my-icons.svg"; // Path to your icons.svg
import styles from './Icon.module.scss';

const Icon = ({ name, color, size }) => (
  <svg className={styles.icon}  fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#${name}`} />
  </svg>
);



export default Icon;