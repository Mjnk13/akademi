//styles
import styles from "@/app/_styles/components/contact_item.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//icon
import MailIcon from "../icon/MailIcon"

//types
import { contact } from "@/types/contact"

const StudentContactItem = (props:contact) => {
    return (
        <div className={styles.contactItem}>
            <div className={styles.contactItem__avatar}></div>
            <div className={styles.contactItem__info}>
                <p className="text-semibold-2" style={{color: variables.colorText}}>{props.name}</p>
                <p className="text-regular-2" style={{color: variables.colorGrey3}}>Class {props.class}</p>
            </div>
            <button className={styles[`contactItem__mailBtn${ props.isNotify ? "--active" : "" }`]}>
                <MailIcon/>
            </button>
        </div>
    );
}
 
export default StudentContactItem;