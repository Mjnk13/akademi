//styles
import styles from "@/app/_styles/user_dashboard.module.scss"

//icon
import DotsIcon from "../../icon/DotsIcon";


const UserPlan = () => {
    return (
        <div className={styles.userDashboard__rightMenu__userPlan}>
            <div className={styles.userDashboard__rightMenu__userPlan__pillDecorate1}></div>
            <div className={styles.userDashboard__rightMenu__userPlan__pillDecorate2}></div>
            <div className={styles.userDashboard__rightMenu__userPlan__header}>
                <div className={styles.userDashboard__rightMenu__userPlan__header__plan}>
                    <p className="text-regular-1">Your Plan</p>
                    <h3>Free</h3>
                </div>
                <button className={styles.userDashboard__rightMenu__userPlan__header__optionBtn}><DotsIcon/></button>
            </div>
            <div className={styles.userDashboard__rightMenu__userPlan__body}>
                <ul className={styles.userDashboard__rightMenu__userPlan__body__ul}>
                    <li className={styles.userDashboard__rightMenu__userPlan__body__ul__li}>
                        <p className="text-semibold-1">50 GB Storage</p>
                    </li>
                    <li className={styles.userDashboard__rightMenu__userPlan__body__ul__li}>
                        <p className="text-semibold-1">Limited Features</p>
                    </li>
                </ul>
                <p className={`text-regular-2 ${styles.userDashboard__rightMenu__userPlan__body__description}`}>Upgrade to Premium Plan to get more Features & Storage memory</p>
            </div>
            <div className={styles.userDashboard__rightMenu__userPlan__footer}>
                <button className={styles.userDashboard__rightMenu__userPlan__footer__upgradePlanBtn}><p className="text-semibold-2">Upgrade Plan</p></button>
            </div>
        </div>
    );
}
 
export default UserPlan;