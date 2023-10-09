//styles
import styles from "@/app/_styles/dashboard.module.scss"

//icons
import DropdownIcon from "../../icon/DropdownIcon"

//components
import Calendar from "./Calendar";

const CalendarSection = () => {
    return (
        <div className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection__calendarWrapper__content}>
            <div className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection__calendarWrapper__content__header}>
                <h3 className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection__calendarWrapper__content__header__title}>School Calendar</h3>
                <button className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection__calendarWrapper__content__header__dateBtn}>{(new Date()).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} <DropdownIcon/></button>
            </div>
            <Calendar markDays={[20, 23]}/>
        </div>
    );
}
 
export default CalendarSection;