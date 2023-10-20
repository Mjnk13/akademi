//styles
import styles from '@/app/_styles/event.module.scss'

//components
import Heading from '../_components/event/Heading'
import BigStaticCalendar from '../_components/calendar/BigStaticCalendar'

//types
import { schedule_details } from '@/types/scheduledetails'
import { CalendarEvent } from '@/types/calendar'

//icons
import PlusIcon from '../_components/icon/PlusIcon'
import DropdownIcon from '../_components/icon/DropdownIcon'
import CalendarIcon from '../_components/icon/CalendarIcon'
import ClockIcon from '../_components/icon/ClockIcon'

const Event = () => {
    const scheduleDetails:schedule_details[] = [
        {
            title: "Basic Algorithm",
            subject: "Algorithm",
            date: "March 20, 2021",
            time: "9:00 AM - 10:00 AM",
            color: "purple"
        },
        {
            title: "Basic Art",
            subject: "Art",
            date: "March 20, 2021",
            time: "9:00 AM - 10:00 AM",
            color: "orange"
        },
        {
            title: "HTML & CSS Class",
            subject: "Programming",
            date: "March 20, 2021",
            time: "9:00 AM - 10:00 AM",
            color: "yellow"
        },
        {
            title: "Simple Past Tense",
            subject: "English",
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
                    <div className={styles.event__mainSection__scheduleDetailsSection__wrapper}>
                        <div className={styles.event__mainSection__scheduleDetailsSection__wrapper__header}>
                            <h3 className={styles.event__mainSection__scheduleDetailsSection__wrapper__header__title}>Schedule Details</h3>
                            <p className={`text-regular-2 ${styles.event__mainSection__scheduleDetailsSection__wrapper__header__time}`}>Thursday, 10th April , 2021</p>
                        </div>
                        <div className={styles.event__mainSection__scheduleDetailsSection__wrapper__body}>
                            <div className={styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList}>
                                { scheduleDetails.map((item, index) => (
                                    <div key={`schedule-details-${index}`} className={styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item}>
                                        <div className={`${styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item__status} ${styles[`event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item__status--${item.color}`]}`}/>
                                        <div className={styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item__wrapper}>
                                            <div className={styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item__wrapper__titleSection}>
                                                <p className={`text-semibold-1 ${styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item__wrapper__titleSection__title}`}>{item.title}</p>
                                                <p className={`text-regular-2 ${styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item__wrapper__titleSection__subject}`}>{item.subject}</p>
                                            </div>
                                            <div className={styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item__wrapper__dateSection}>
                                                <p className={`text-regular-2 ${styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item__wrapper__dateSection__date}`}><CalendarIcon/> {item.date}</p>
                                                <p className={`text-regular-2 ${styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item__wrapper__dateSection__time}`}><ClockIcon/> {item.time}</p>
                                            </div>
                                        </div>
                                        <div className={styles.event__mainSection__scheduleDetailsSection__wrapper__body__scheduleDetailsList__item__avatar}></div>
                                    </div>
                                )) }
                            </div>
                        </div>
                        <div className={styles.event__mainSection__scheduleDetailsSection__wrapper__footer}>
                            <button className={`text-semibold-1 ${styles.event__mainSection__scheduleDetailsSection__wrapper__footer__viewMoreBtn}`}>View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Event