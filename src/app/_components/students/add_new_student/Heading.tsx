//styles
import styles from "@/app/_styles/students.module.scss"

//components
import UserMenu from "../../menu/UserMenu"

const Heading = () => {
    return (
        <div className={styles.addNewStudent__heading}>
            <h2 className={styles.addNewStudent__heading__title}>Add New Student</h2>
            <UserMenu/>
        </div>
    );
}
 
export default Heading;