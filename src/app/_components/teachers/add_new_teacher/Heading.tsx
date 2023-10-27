//styles
import styles from "@/app/_styles/teachers.module.scss"

//components
import UserMenu from "../../menu/UserMenu"

const Heading = () => {
    return (
        <div className={styles.addNewTeacher__heading}>
            <h2 className={styles.addNewTeacher__heading__title}>Add New Teacher</h2>
            <UserMenu/>
        </div>
    );
}
 
export default Heading;