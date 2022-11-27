import classNames from "classnames/bind";
import styles from "./ButtonIcon.module.scss";

const cx = classNames.bind(styles);
function ButtonIcon({iconName , link }) {
    return ( 
        <button className={cx('wrapper')}>
            <img src={link} alt={iconName}/>
        </button>
     );
}

export default ButtonIcon;