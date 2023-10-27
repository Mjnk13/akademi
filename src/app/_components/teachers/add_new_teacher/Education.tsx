//styles
import styles from "@/app/_styles/teachers.module.scss"

///components
import InputField from "../../inputField/InputField";

const Education = () => {
    return (
        <div className={styles.addNewTeacher__education}>
            <h4 className={styles.addNewTeacher__education__title}>Education</h4>
            <div className={styles.addNewTeacher__education__formGroup}>
                <InputField title="University *" inputPlaceHolder="University Akademi Historia" type={"input"}/>
                <InputField title="University Akademi Historia" inputPlaceHolder="History Major" type={"input"}/>
                <InputField title="Start & End Date" inputPlaceHolder={["September 2013", "September 2017"]} type={"input"}/>
                <InputField title="City *" inputPlaceHolder="Yogyakarta, Indonesia" type={"input"}/>
            </div>
        </div>
    );
}
 
export default Education;