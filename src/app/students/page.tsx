//style
import styles from "@/app/_styles/students.module.scss"

//components
import Heading from "../_components/students/Heading";
import Table from "../_components/students/Table";

const Student = () => {
    return ( 
        <div className={styles.students}>
            <Heading/>
            <Table/>
        </div>
    );
}
 
export default Student;