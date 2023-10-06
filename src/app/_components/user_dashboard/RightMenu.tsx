//styles
import styles from "@/app/_styles/user_dashboard.module.scss"

//components
import UserMenu from "../menu/UserMenu";
import UserPlan from "./subComponent/UserPlan";
import LatestActivity from "./subComponent/LatestActivity";

const RightMenu = () => {
    return (
        <div className={styles.userDashboard__rightMenu}>
            <UserMenu/>
            <UserPlan/>
            <LatestActivity/>
        </div>
    );
}
 
export default RightMenu;