//styles
import styles from "@/app/_styles/dashboard.module.scss"

//components
import ChartSection from "../chart_section/ChartSection"
import CalendarSection from "./subComponent/CalendarSection";

const SchoolCalendarAndFinanceSection = () => {
    return (
        <div className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection}>
            <div className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection__calendarWrapper}>
                <CalendarSection/>
            </div>
            <div className={styles.dashboard__mainSection__schoolCalendarAndFinanceSection__financeWrapper}>
                <ChartSection title={"School Finance"} isMontBtnShow={false} chart={<img src="/images/svg/small_bar_chart.svg"></img>} />
            </div>
        </div>
    );
}
 
export default SchoolCalendarAndFinanceSection;