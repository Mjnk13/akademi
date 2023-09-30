//style
import styles from "@/app/_styles/teachers.module.scss"

//components
import Heading from "../_components/teachers/Heading";
import TeacherList from "../_components/teachers/TeacherList";

const Teachers = () => {
    return ( 
        <div className={styles.teachers}>
            <Heading/>
            <TeacherList/>
        </div>
    );
}
 
export default Teachers;