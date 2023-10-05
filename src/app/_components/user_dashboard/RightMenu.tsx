//styles
import styles from "@/app/_styles/user_dashboard.module.scss"

//components
import UserMenu from "../menu/UserMenu";

const RightMenu = () => {
    return (
        <div className={styles.userDashboard__rightMenu}>
            <UserMenu/>
        </div>
    );
}
 
export default RightMenu;