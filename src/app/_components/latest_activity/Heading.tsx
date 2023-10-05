//styles
import styles from "@/app/_styles/latest_activity.module.scss"

//icons
import SearchIcon from "../icon/SearchIcon"

//components
import UserMenu from "../menu/UserMenu"

const Heading = () => {
    return (
        <div className={styles.latestActivity__heading}>
            <h2 className={styles.latestActivity__heading__title}>Notification & Latest Activity</h2>
            <div className={styles.latestActivity__heading__right}>
                <div className={styles.latestActivity__heading__right__search}>
                    <input type="text" id="dashboard-search" placeholder=""></input>
                    <label htmlFor="dashboard-search">
                        <SearchIcon/>Search here...
                    </label>
                </div>
                <UserMenu/>
            </div>
        </div>
    );
}
 
export default Heading;