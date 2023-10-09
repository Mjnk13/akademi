//styles
import styles from "@/app/_styles/dashboard.module.scss"

//dashboard component
import RightMenu from "./_components/dashboard/RightMenu"
import Heading from "./_components/dashboard/Heading"
import OverView from "./_components/dashboard/OverView"
import ChartSection from "./_components/chart_section/ChartSection"
import SchoolCalendarAndFinanceSection from "./_components/dashboard/SchoolCalendarAndFinanceSection"
import UnpaidStudentIntuition from "./_components/dashboard/UnpaidStudentIntuition"

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__mainSection}>
        <Heading/>
        <OverView/>
        <ChartSection title={"School Performance"} isMontBtnShow={false} chart={<img src="/images/svg/big_line_chart.svg"></img>} />
        <SchoolCalendarAndFinanceSection/>
        <UnpaidStudentIntuition/>
      </div>
      <RightMenu/>
    </div>
  )
}