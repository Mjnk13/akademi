//styles
import styles from "@/app/_styles/dashboard.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//types
import { overview_dashboard } from "@/types/overviewdasboard"

//icon
import StudentIcon from "../icon/StudentIcon"
import TeacherIcon from "../icon/Teacher"
import CalendarIcon from "../icon/CalendarIcon"
import RestaurantIcon from "../icon/RestaurantIcon"

const OverView = () => {
    function formatNumber(number: number): string {
        const suffixes = ["", "K", "M", "B", "T"];
        let i = 0;
      
        while (number >= 1000 && i < suffixes.length - 1) {
          number /= 1000;
          i++;
        }
      
        return `${number.toFixed(1)}${suffixes[i]}`;
    }

    const overviews:overview_dashboard[] = [
        {
            icon: <StudentIcon/>,
            name: "Students",
            amount: 932,
            color: "purple"
        },
        {
            icon: <TeacherIcon/>,
            name: "Teachers",
            amount: 754,
            color: "orange"
        },
        {
            icon: <CalendarIcon/>,
            name: "Events",
            amount: 40,
            color: "yellow"
        },
        {
            icon: <RestaurantIcon/>,
            name: "Foods",
            amount: 32000,
            color: "text"
        }
    ]
    return (
        <div className={styles.dashboard__mainSection__overview}>
            {overviews.map((overview:overview_dashboard, index:number) => (
                <div className={styles.dashboard__mainSection__overview__item}>
                    <div className={`${styles.dashboard__mainSection__overview__item__iconBg} ${styles[`dashboard__mainSection__overview__item__iconBg--${overview.color}`]}`}>
                        {overview.icon}
                    </div>
                    <div className={styles.dashboard__mainSection__overview__item__info}>
                        <p className="text-regular-2" style={{color: variables.colorGrey3}}>{overview.name}</p>
                        <h3>{formatNumber(overview.amount)}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default OverView;