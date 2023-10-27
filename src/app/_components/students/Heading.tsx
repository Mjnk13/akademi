//style
import styles from "@/app/_styles/students.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//components
import UserMenu from "../menu/UserMenu"

//icon
import SearchIcon from "../icon/SearchIcon"
import DropdownIcon from "../icon/DropdownIcon"
import PlusIcon from "../icon/PlusIcon"

//reacts
import Link from "next/link"

const Heading = () => {
    return (
        <div className={styles.students__heading}>
            <div className={styles.students__heading__1}>
                <h2 style={{color: variables.colorText}}>Students</h2>
                <UserMenu />
            </div>
            <div className={styles.students__heading__2}>
                <div className={styles.students__heading__2__search}>
                    <input type="text" id="dashboard-search" placeholder=""></input>
                    <label htmlFor="dashboard-search">
                        <SearchIcon/>Search here...
                    </label>
                </div>
                <div className={styles.students__heading__2__btnGroup}>
                    <button className={styles.students__heading__2__btnGroup__newest}>Newest <DropdownIcon/></button>
                    <Link href="/students/add-new-student" className={styles.students__heading__2__btnGroup__newStudent}><PlusIcon/> New Student</Link>
                </div>
            </div>
        </div>
    );
}
 
export default Heading;