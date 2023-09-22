import styles from "@/app/_styles/user_menu.module.scss";
import BellIcon from "../icon/BellIcon";
import SettingIcon from "../icon/SettingIcon";
import variables from "@/app/_styles/utils/variables.module.scss";

const UserMenu = () => {
    return (
        <div className={styles.userMenu}>
            <button className={styles.userMenu__notification}><BellIcon/></button>
            <button className={styles.userMenu__setting}><SettingIcon/></button>
            <div className={styles.userMenu__user}>
                <div className={styles.userMenu__user__userInfo}>
                    <p className="text-semibold-2" style={{color: variables['color-text']}}>Minh</p>
                    <p className="text-regular-2" style={{color: variables['color-grey-3']}}>Admin</p>
                </div>
                <div className={styles.userMenu__user__avatar}></div>
            </div>
        </div>
    );
}
 
export default UserMenu;