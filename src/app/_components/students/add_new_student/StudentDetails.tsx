//styles
import styles from "@/app/_styles/students.module.scss"

//components
import InputField from "../../inputField/InputField"

const StudentDetails = () => {
    return (
        <div className={styles.addNewStudent__studentDetails}>
            <h4 className={styles.addNewStudent__studentDetails__title}>Student Details</h4>
            <div className={styles.addNewStudent__studentDetails__mainWrapper}>
                <div className={styles.addNewStudent__studentDetails__mainWrapper__inputFileWrapper}>
                    <InputField title="Photo" inputPlaceHolder="Drag and drop or click here to select file" type="file"/>
                </div>
                <div className={styles.addNewStudent__studentDetails__mainWrapper__formGroup}>
                    <InputField title="First Name *" inputPlaceHolder="Samantha" type="input"/>
                    <InputField title="Last Name *" inputPlaceHolder="William" type="input"/>
                    <InputField title="Date & Place of Birth *" inputPlaceHolder={["24 February 1997", "Jakarta, Indonesia"]} type="input"/>
                    <InputField title="Parent Name *" inputPlaceHolder="Mana William" type="input"/>
                    <InputField title="Email *" inputPlaceHolder="william@mail.com" type="input"/>
                    <InputField title="Phone *" inputPlaceHolder="+1234567890" type="input"/>
                    <InputField title="Address *" inputPlaceHolder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." type="textarea"/>
                </div>
            </div>
        </div>
    );
}
 
export default StudentDetails;