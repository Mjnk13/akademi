//styles
import styles from '@/app/_styles/event.module.scss'

//components
import Heading from '../_components/event/Heading'
import BigStaticCalendar from '../_components/calendar/BigStaticCalendar'
import ScheduleDetails from '../_components/schedule_details/ScheduleDetails'

//types
import { schedule_details } from '@/types/scheduledetails'
import { CalendarEvent } from '@/types/calendar'

//icons
import PlusIcon from '../_components/icon/PlusIcon'
import DropdownIcon from '../_components/icon/DropdownIcon'

const Event = () => {
    const scheduleDetails:schedule_details[] = [
        {
            title: "Basic Algorithm",
            subTitle: "Algorithm",
            date: "March 20, 2021",
            time: "9:00 AM - 10:00 AM",
            color: "purple"
        },
        {
            title: "Basic Art",
            subTitle: "Art",
            date: "March 20, 2021",
            time: "9:00 AM - 10:00 AM",
            color: "orange"
        },
        {
            title: "HTML & CSS Class",
            subTitle: "Programming",
            date: "March 20, 2021",
            time: "9:00 AM - 10:00 AM",
            color: "yellow"
        },
        {
            title: "Simple Past Tense",
            subTitle: "English",
            date: "March 20, 2021",
            time: "9:00 AM - 10:00 AM",
            color: "text"
        }
    ]
    
    const events:CalendarEvent[] = [
        {
            day: 2,
            borderColor: "text",
            dots: ["yellow", "purple", "orange"]
        },
        {
            day: 5,
            borderColor: "text",
        },
        {
            day: 6,
            colorText: "white",
            backgroundColor: "orange",
            borderColor: "orange",
            peopleCounts: 7,
        },
        {
            day: 10,
            specialBorder: true,
            borderColor: "purple",
            backgroundColor: "purple",
            colorText: "white",
            invoice: {
                name: "Karen",
                dividerColor: "yellow",
                count: 2
            }
        },
        {
            day: 15,
            borderColor: "text",
            peopleCounts: 2
        },
        {
            day: 18,
            borderColor: "text",
            invoice: {
                name: "Tony",
                dividerColor: "orange",
                count: 2
            }
        },
        {
            day: 20,
            borderColor: "yellow",
            dots: ["purple", "orange", "orange"]
        },
        {
            day: 24,
            borderColor: "text",
            dots: ["purple", "orange", "yellow"],
        },
        {
            day: 29,
            borderColor: "text",
            invoice: {
                name: "Johnny",
                dividerColor: "yellow",
            }
        }
    ]

    return (
        <div className={styles.event}>
            <Heading/>
            <div className={styles.event__mainSection}>
                <div className={styles.event__mainSection__calendarSection}>
                    <div className={styles.event__mainSection__calendarSection__wrapper}>
                        <div className={styles.event__mainSection__calendarSection__wrapper__header}>
                            <h2 className={styles.event__mainSection__calendarSection__wrapper__header__title}>Calendar</h2>
                            <div className={styles.event__mainSection__calendarSection__wrapper__header__btnGroup}>
                                <button className={styles.event__mainSection__calendarSection__wrapper__header__btnGroup__month}>October <DropdownIcon/></button>
                                <button className={styles.event__mainSection__calendarSection__wrapper__header__btnGroup__year}>2023 <DropdownIcon/></button>
                                <button className={styles.event__mainSection__calendarSection__wrapper__header__btnGroup__newEvent}><PlusIcon/> New Event</button>
                            </div>
                        </div>
                        <BigStaticCalendar month={9} year={2023} events={events}/>
                    </div>
                </div>
                <div className={styles.event__mainSection__scheduleDetailsSection}>
                    <ScheduleDetails scheduleDetails={scheduleDetails} isShowAvatar={true}/>
                </div>
            </div>
        </div>
    );
}
 
export default Event