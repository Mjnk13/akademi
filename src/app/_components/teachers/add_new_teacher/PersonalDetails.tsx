//styles
import styles from "@/app/_styles/teachers.module.scss"

//components
import InputField from "../../inputField/InputField";

const PersonalDetails = () => {
    
    return (
        <div className={styles.addNewTeacher__personalDetails}>
            <h4 className={styles.addNewTeacher__personalDetails__title}>Personal Details</h4>
            <div className={styles.addNewTeacher__personalDetails__formGroup}>
                <InputField title="First Name *" inputPlaceHolder="Maria" type={"input"}/>
                <InputField title="Last Name *" inputPlaceHolder="Hirtoria" type={"input"}/>
                <InputField title="Email *" inputPlaceHolder="Historia@mail.com" type={"input"}/>
                <InputField title="Phone *" inputPlaceHolder="+1234567890" type={"input"}/>
                <InputField title="Address *" inputPlaceHolder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." type={"textarea"}/>
                <InputField title="photo *" inputPlaceHolder="Drag and drop or click here to select file" type={"file"}/>
                <InputField title="Date of birth *" inputPlaceHolder="24 February 1997" type={"input"}/>
                <InputField title="Place of birth *" inputPlaceHolder="Jakarta, Indonesia" type={"input"}/>
            </div>
        </div>
    );
}
 
export default PersonalDetails