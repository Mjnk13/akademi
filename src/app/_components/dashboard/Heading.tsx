//styles
import styles from "@/app/_styles/dashboard.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//icons
import SearchIcon from "../icon/SearchIcon";

const Heading = () => {
    return (
        <div className={styles.dashboard__mainSection__heading}>
          <h2 style={{color: variables.colorText}}>Dashboard</h2>
          <div className={styles.dashboard__mainSection__heading__search}>
            <input type="text" id="dashboard-search" placeholder=""></input>
            <label htmlFor="dashboard-search">
              <SearchIcon/>Search here...
            </label>
          </div>
        </div>
    );
}
 
export default Heading;