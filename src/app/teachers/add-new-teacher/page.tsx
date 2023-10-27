//styles
import styles from "@/app/_styles/teachers.module.scss"

//components
import Heading from "@/app/_components/teachers/add_new_teacher/Heading"
import PersonalDetails from "@/app/_components/teachers/add_new_teacher/PersonalDetails";
import Education from "@/app/_components/teachers/add_new_teacher/Education";

const AddNewTeacher = () => {
    return (
        <div className={styles.addNewTeacher}>
            <Heading/>
            <PersonalDetails/>
            <Education/>
            <div className={styles.addNewTeacher__formsOption}>
                <button className={`text-regular-1 ${styles.addNewTeacher__formsOption__saveAsDraftBtn}`}>Save as Draft</button>
                <button className={`text-regular-1 ${styles.addNewTeacher__formsOption__submitBtn}`}>Submit</button>
            </div>
        </div>
    );
}
 
export default AddNewTeacher