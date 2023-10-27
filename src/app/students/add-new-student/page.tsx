//styles
import styles from "@/app/_styles/students.module.scss"

//components
import Heading from "@/app/_components/students/add_new_student/Heading"
import StudentDetails from "@/app/_components/students/add_new_student/StudentDetails";
import ParentDetails from "@/app/_components/students/add_new_student/ParentDetail";

const AddNewStudent = () => {
    return (
        <div className={styles.addNewStudent}>
            <Heading/>
            <StudentDetails/>
            <ParentDetails/>
            <div className={styles.addNewStudent__formsOption}>
                <button className={`text-regular-1 ${styles.addNewStudent__formsOption__saveAsDraftBtn}`}>Save as Draft</button>
                <button className={`text-regular-1 ${styles.addNewStudent__formsOption__submitBtn}`}>Submit</button>
            </div>
        </div>
    );
}
 
export default AddNewStudent