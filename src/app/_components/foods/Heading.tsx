//styles
import styles from "@/app/_styles/foods.module.scss"

//icons
import SearchIcon from "../icon/SearchIcon"

//components
import UserMenu from "../menu/UserMenu"

const Heading = () => {
    return (
        <div className={styles.foods__heading}>
            <h2>Food</h2>
            <div className={styles.foods__heading__right}>
                <div className={styles.foods__heading__right__search}>
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