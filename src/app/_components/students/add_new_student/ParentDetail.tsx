//styles
import styles from "@/app/_styles/students.module.scss"

//components
import InputField from "../../inputField/InputField"

const ParentDetails = () => {
    return (
        <div className={styles.addNewStudent__parentDetails}>
            <h4 className={styles.addNewStudent__parentDetails__title}>Parent Details</h4>
            <div className={styles.addNewStudent__parentDetails__formGroup}>
                <InputField title="First Name *" inputPlaceHolder="Mana" type={"input"}/>
                <InputField title="Last Name *" inputPlaceHolder="William" type={"input"}/>
                <InputField title="Email *" inputPlaceHolder="Mana@email.com" type={"input"}/>
                <InputField title="Phone *" inputPlaceHolder="+1234567890" type={"input"}/>
                <InputField title="Address *" inputPlaceHolder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." type={"textarea"}/>
                <InputField title="Payments *" type="radio" radioOptions={["Cash", "Debit"]}/>
            </div>
        </div>
    );
}
 
export default ParentDetails;