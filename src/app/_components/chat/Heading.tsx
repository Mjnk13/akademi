//styles
import styles from "@/app/_styles/chat.module.scss"

//icons
import SearchIcon from "../icon/SearchIcon"

//components
import UserMenu from "../menu/UserMenu"

const Heading = () => {
    return (
        <div className={styles.chat__heading}>
            <h2 className={styles.chat__heading__title}>Chat</h2>
            <div className={styles.chat__heading__right}>
                <div className={styles.chat__heading__right__search}>
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