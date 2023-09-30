//style
import styles from "@/app/_styles/teachers.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//components
import UserMenu from "../menu/UserMenu"

//icon
import SearchIcon from "../icon/SearchIcon"
import DropdownIcon from "../icon/DropdownIcon"
import PlusIcon from "../icon/PlusIcon"

const Heading = () => {
    return (
        <div className={styles.teachers__heading}>
            <div className={styles.teachers__heading__1}>
                <h2 style={{color: variables.colorText}}>Teachers</h2>
                <UserMenu />
            </div>
            <div className={styles.teachers__heading__2}>
                <div className={styles.teachers__heading__2__search}>
                    <input type="text" id="dashboard-search" placeholder=""></input>
                    <label htmlFor="dashboard-search">
                        <SearchIcon/>Search here...
                    </label>
                </div>
                <div className={styles.teachers__heading__2__btnGroup}>
                    <button className={styles.teachers__heading__2__btnGroup__newest}>Newest <DropdownIcon/></button>
                    <button className={styles.teachers__heading__2__btnGroup__newTeacher}><PlusIcon/> New Teacher</button>
                </div>
            </div>
        </div>
    );
}
 
export default Heading;