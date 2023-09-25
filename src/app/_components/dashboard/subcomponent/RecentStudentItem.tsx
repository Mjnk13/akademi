//styles
import styles from "@/app/_styles/dashboard.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//icon
import MailIcon from "../../icon/MailIcon"

//types
import { recent_student } from "@/types/recentstudent"

const RecentStudentItem = (props:recent_student) => {
    return (
        <div className={styles.dashboard__rightMenu__recentStudents__list__item}>
            <div className={styles.dashboard__rightMenu__recentStudents__list__item__avatar}></div>
            <div className={styles.dashboard__rightMenu__recentStudents__list__item__info}>
                <p className="text-semibold-2">{props.name}</p>
                <p className="text-regular-2" style={{color: variables.colorGrey3}}>Class {props.class}</p>
            </div>
            <button className={styles[`dashboard__rightMenu__recentStudents__list__item__mailBtn${ props.isNotify ? "--active" : "" }`]}>
                <MailIcon/>
            </button>
        </div>
    );
}
 
export default RecentStudentItem;