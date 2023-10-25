//styles
import styles from "@/app/_styles/foods.module.scss"

//icons
import SearchIcon from "../../icon/SearchIcon"

//components
import UserMenu from "../../menu/UserMenu"

const Heading = () => {
    return (
        <div className={styles.foodDetails__heading}>
            <h2 className={styles.foodDetails__heading__title}>Food Details</h2>
            <div className={styles.foodDetails__heading__right}>
                <div className={styles.foodDetails__heading__right__search}>
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