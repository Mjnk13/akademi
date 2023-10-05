//styles
import styles from "@/app/_styles/user_dashboard.module.scss"

//icons
import SearchIcon from "../icon/SearchIcon"

const Heading = () => {
    return (
        <div className={styles.userDashboard__mainSection__heading}>
            <h2 className={styles.userDashboard__mainSection__heading__title}>User Dashboard</h2>
          <div className={styles.userDashboard__mainSection__heading__search}>
            <input type="text" id="dashboard-search" placeholder=""/>
            <label htmlFor="dashboard-search">
              <SearchIcon/>Search here...
            </label>
          </div>
        </div>
    );
}
 
export default Heading;