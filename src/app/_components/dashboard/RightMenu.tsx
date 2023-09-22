import styles from "@/app/_styles/dashboard.module.scss" 
import UserMenu from "../menu/UserMenu";

const RightMenu = () => {
    return (
        <div className={styles.dashboard__rightMenu}>
            <UserMenu/>
            <div className={styles.dashboard__rightMenu__recentStudent}>

            </div>
        </div>
    );
}
 
export default RightMenu;