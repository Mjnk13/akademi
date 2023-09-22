import styles from "@/app/_styles/dashboard.module.scss"
import RightMenu from "./_components/dashboard/RightMenu"

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__mainSection}>
        <p className="text-regular-1" style={{marginLeft: "5px"}}>this is dashboard main section</p>
      </div>
      <RightMenu/>
    </div>
  )
}