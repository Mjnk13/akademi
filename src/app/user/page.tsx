//styles
import styles from "@/app/_styles/user_dashboard.module.scss"

//components
import Heading from "../_components/user_dashboard/Heading"
import RightMenu from "../_components/user_dashboard/RightMenu";
import Profile from "../_components/profile/Profile";


const User = () => {
    return (
        <div className={styles.userDashboard}>
            <div className={styles.userDashboard__mainSection}>
                <Heading/>
                <Profile/>
            </div>
            <RightMenu/>
        </div>
    );
}
 
export default User;