//styles
import styles from "@/app/_styles/dashboard.module.scss"

//dashboard component
import RightMenu from "./_components/dashboard/RightMenu"
import Heading from "./_components/dashboard/Heading"
import OverView from "./_components/dashboard/OverView"
import UnpaidStudentIntuition from "./_components/dashboard/UnpaidStudentIntuition"

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__mainSection}>
        <Heading/>
        <OverView/>
        <UnpaidStudentIntuition/>
      </div>
      <RightMenu/>
    </div>
  )
}