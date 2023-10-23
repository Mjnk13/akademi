//styles
import styles from "@/app/_styles/components/schedule_details.module.scss"

//types
import { schedule_details } from "@/types/scheduledetails"

//icons
import CalendarIcon from "../icon/CalendarIcon"
import ClockIcon from "../icon/ClockIcon"

type props = {
    scheduleDetails: schedule_details[],
    isShowAvatar: boolean
}

const ScheduleDetails = (props: props) => {
    return (
        <div className={styles.scheduleDetails}>
            <div className={styles.scheduleDetails__header}>
                <h3 className={styles.scheduleDetails__header__title}>Schedule Details</h3>
                <p className={`text-regular-2 ${styles.scheduleDetails__header__time}`}>Thursday, 10th April , 2021</p>
            </div>
            <div className={styles.scheduleDetails__body}>
                <div className={styles.scheduleDetails__body__scheduleDetailsList}>
                    { props.scheduleDetails.map((item, index) => (
                        <div key={`schedule-details-${index}`} className={styles.scheduleDetails__body__scheduleDetailsList__item}>
                            <div className={`${styles.scheduleDetails__body__scheduleDetailsList__item__status} ${styles[`scheduleDetails__body__scheduleDetailsList__item__status--${item.color}`]}`}/>
                            <div className={styles.scheduleDetails__body__scheduleDetailsList__item__wrapper}>
                                <div className={styles.scheduleDetails__body__scheduleDetailsList__item__wrapper__titleSection}>
                                    <p className={`text-semibold-1 ${styles.scheduleDetails__body__scheduleDetailsList__item__wrapper__titleSection__title}`}>{item.title}</p>
                                    <p className={`text-regular-2 ${styles.scheduleDetails__body__scheduleDetailsList__item__wrapper__titleSection__subject}`}>{item.subTitle}</p>
                                </div>
                                <div className={styles.scheduleDetails__body__scheduleDetailsList__item__wrapper__dateSection}>
                                    <p className={`text-regular-2 ${styles.scheduleDetails__body__scheduleDetailsList__item__wrapper__dateSection__date}`}><CalendarIcon/> {item.date}</p>
                                    <p className={`text-regular-2 ${styles.scheduleDetails__body__scheduleDetailsList__item__wrapper__dateSection__time}`}><ClockIcon/> {item.time}</p>
                                </div>
                            </div>
                            {props.isShowAvatar && <div className={styles.scheduleDetails__body__scheduleDetailsList__item__avatar}></div>}
                        </div>
                    )) }
                </div>
            </div>
            <div className={styles.scheduleDetails__footer}>
                <button className={`text-semibold-1 ${styles.scheduleDetails__footer__viewMoreBtn}`}>View More</button>
            </div>
        </div>
    );
}
 
export default ScheduleDetails;