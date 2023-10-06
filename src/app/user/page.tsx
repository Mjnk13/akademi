//styles
import styles from "@/app/_styles/user_dashboard.module.scss"

//components
import Heading from "../_components/user_dashboard/Heading"
import RightMenu from "../_components/user_dashboard/RightMenu"
import Profile from "../_components/profile/Profile"
import Contact from "../_components/user_dashboard/Contact"
import Message from "../_components/user_dashboard/Message"

const User = () => {
    return (
        <div className={styles.userDashboard}>
            <div className={styles.userDashboard__mainSection}>
                <Heading/>
                <Profile/>
                <div className={styles.userDashboard__mainSection__contactMessageSection}>
                    <div className={styles.userDashboard__mainSection__contactMessageSection__contactWrapper}>
                        <Contact/>
                    </div>
                    <div className={styles.userDashboard__mainSection__contactMessageSection__messageWrapper}>
                        <Message/>
                    </div>
                </div>
            </div>
            <RightMenu/>
        </div>
    );
}
 
export default User;