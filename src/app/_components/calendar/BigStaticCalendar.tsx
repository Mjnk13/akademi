//styles
import styles from '@/app/_styles/components/calendar.module.scss'

//types
import { CalendarEvent } from '@/types/calendar'

type props = {
    month: number, // 0-11 (January is 0, December is 11)
    year: number, // 4-digit year
    events?: CalendarEvent[],
    specialBorderDays?: number[]
}

const BigStaticCalendar = (props:props) => {
    const currentDate = new Date(props.year, props.month)

    const daysInMonth = (month: number, year: number) => new Date(year, month, 0).getDate()

    const renderDaysHeader = () => {
        const daysNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        return daysNames.map(day => <p key={day} className={`text-regular-2 ${styles.bigStaticCalendar__daysHeader__dayOfWeek}`}>{day}</p>)
    };

    const renderDays = () => {
        const days = []
        const month = currentDate.getMonth()
        const year = currentDate.getFullYear()

        //notes: JavaScript's Date object has Sunday as index 0 and Saturday as index 6
        // Calculate days from the previous month to fill up to Sunday
        let firstDayOfMonth = new Date(year, month, 1).getDay() - 1
        if (firstDayOfMonth < 0) firstDayOfMonth = 6 // If it's Sunday, it should be 6 instead of -1
        const daysInPreviousMonth = daysInMonth(month, year)
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            days.push(<div key={`prev-${daysInPreviousMonth - i}`} className={styles.bigStaticCalendar__daysSection__dayWrapper}><h4 className={`${styles.bigStaticCalendar__daysSection__dayWrapper__day} ${styles["bigStaticCalendar__daysSection__dayWrapper--otherMonth"]}`}>{daysInPreviousMonth - i}</h4></div>)
        }

        // Days in current month
        for (let i = 1; i <= daysInMonth(month + 1, year); i++) {
            let eventDetails = props.events?.find(event => event.day === i) as CalendarEvent
            
            days.push(
                <div key={i} className={`${styles.bigStaticCalendar__daysSection__dayWrapper}`}>
                    <div className={`${styles.bigStaticCalendar__daysSection__dayWrapper__day} ${eventDetails?.colorText && styles[`bigStaticCalendar__daysSection__dayWrapper__day--text_${eventDetails.colorText}`]} ${eventDetails?.borderColor && styles[`bigStaticCalendar__daysSection__dayWrapper__day--border_${eventDetails.borderColor}`]} ${eventDetails?.backgroundColor && !eventDetails?.specialBorder && styles[`bigStaticCalendar__daysSection__dayWrapper__day--bg_${eventDetails.backgroundColor}`]}`}>
                        <h4 className={styles.bigStaticCalendar__daysSection__dayWrapper__day__number}>{i}</h4>
                        {eventDetails?.specialBorder && <div className={`${styles.bigStaticCalendar__daysSection__dayWrapper__day__specialBackground} ${styles[`bigStaticCalendar__daysSection__dayWrapper__day__specialBackground--${eventDetails?.backgroundColor}`]}`}/>}
                        {eventDetails?.dots &&
                            <div className={styles.bigStaticCalendar__daysSection__dayWrapper__day__dotsWrapper}>
                                { eventDetails?.dots?.map((dot:string, index:number) => <span key={`dot-${index}`} className={`${styles.bigStaticCalendar__daysSection__dayWrapper__day__dotsWrapper__dot} ${styles[`bigStaticCalendar__daysSection__dayWrapper__day__dotsWrapper__dot--${dot}`]}`}></span>) }
                            </div>
                        }
                        {eventDetails?.peopleCounts && 
                            <div className={styles.bigStaticCalendar__daysSection__dayWrapper__day__avatarsWrapper}>
                                <span className={styles.bigStaticCalendar__daysSection__dayWrapper__day__avatarsWrapper__avatar}/>
                                <span className={styles.bigStaticCalendar__daysSection__dayWrapper__day__avatarsWrapper__avatar}/>
                                <span className={`text-semibold-2 ${styles.bigStaticCalendar__daysSection__dayWrapper__day__avatarsWrapper__avatar}`}>{eventDetails?.peopleCounts}+</span>
                            </div>
                        }
                        {eventDetails?.invoice &&
                            <div className={styles.bigStaticCalendar__daysSection__dayWrapper__day__invoice}>
                                <div className={`${styles.bigStaticCalendar__daysSection__dayWrapper__day__invoice__divider} ${styles[`bigStaticCalendar__daysSection__dayWrapper__day__invoice__divider--${eventDetails.invoice?.dividerColor}`]}`}/>
                                <p className={`text-semibold-2 ${styles.bigStaticCalendar__daysSection__dayWrapper__day__invoice__infoText}`}>{eventDetails?.invoice?.name}{eventDetails?.invoice?.count ? `, ${eventDetails?.invoice?.count}+` : ""}</p>
                            </div>
                        }
                    </div>
                </div>
            );
        }

        // Calculate days from the next month to fill the grid
        let totalSlots = 35; // 5 rows x 7 columns
        if (days.length > 35)
          totalSlots = 42; // 6 rows x 7 columns
        while (days.length < totalSlots) {
          const nextDay = days.length + 1 - (firstDayOfMonth + daysInMonth(month + 1, year))
          days.push(<div key={`next-${nextDay}`} className={styles.bigStaticCalendar__daysSection__dayWrapper}><h4 className={`${styles.bigStaticCalendar__daysSection__dayWrapper__day} ${styles["bigStaticCalendar__daysSection__dayWrapper--otherMonth"]}`}>{nextDay}</h4></div>)
        }

        return days;
    };

    return (
        <div className={styles.bigStaticCalendar}>
            <div className={styles.bigStaticCalendar__daysHeader}>
                {renderDaysHeader()}
            </div>
            <div className={styles.bigStaticCalendar__daysSection}>
                {renderDays()}
            </div>
        </div>
    );
}
 
export default BigStaticCalendar;