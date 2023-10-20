//styles
import styles from "@/app/_styles/dashboard.module.scss"

//icons
import DropdownIcon from "../../icon/DropdownIcon"

//components
import SmallStaticCalendar from "../../calendar/SmallStaticCalendar"

//types
import { mark_day } from "@/types/calendar"

const CalendarSection = () => {
    const markDays:mark_day[] = [
        {
            day: 20,
            background: "yellow"
        },
        {
            day: 23,
            background: "orange"
        }
    ]

    return (
        <div className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection__calendarWrapper__content}>
            <div className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection__calendarWrapper__content__header}>
                <h3 className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection__calendarWrapper__content__header__title}>School Calendar</h3>
                <button className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection__calendarWrapper__content__header__dateBtn}>March 2021 <DropdownIcon/></button>
            </div>
            <SmallStaticCalendar markDays={markDays} year={2021} month={2} day={8}/>
        </div>
    );
}
 
export default CalendarSection;