//styles
import styles from "@/app/_styles/teachers.module.scss"

//icons
import SearchIcon from "@/app/_components/icon/SearchIcon"

//components
import UserMenu from "@/app/_components/menu/UserMenu"

const Heading = () => {
    return (
        <div className={styles.teacherDetails__heading}>
            <h2 className={styles.teacherDetails__heading__title}>Teacher Details</h2>
            <div className={styles.teacherDetails__heading__right}>
                <div className={styles.teacherDetails__heading__right__search}>
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