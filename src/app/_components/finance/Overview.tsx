//styles
import styles from '@/app/_styles/finance.module.scss'

//types
import { finance_overview } from '@/types/financeoverview'

//icon
import StudentIcon from '../icon/StudentIcon'
import TeacherIcon from '../icon/Teacher'
import FinanceIcon from '../icon/FinanceIcon'

const Overview = () => {
    const overviews:finance_overview[] = [
        {
            title: "Total Students",
            amount: 932,
            percentageThanLastMonth: 10,
            icon: <StudentIcon/>,
            iconColor: "purple"
        },
        {
            title: "Total Teachers",
            amount: 754,
            percentageThanLastMonth: -0.5,
            icon: <TeacherIcon/>,
            iconColor: "orange"
        },
        {
            title: "School Balance",
            amount: 123456,
            percentageThanLastMonth: 23,
            icon: <FinanceIcon/>,
            iconColor: "yellow",
            chart: <img src="/images/svg/small_line_chart.svg" alt="Small Line Chart"/>
        },
    ]

    return (
        <div className={styles.finance__overview}>
            {overviews.map((overview:finance_overview) => (
                <div className={`${styles.finance__overview__itemWrapper} ${ overview.chart && styles["finance__overview__itemWrapper--chart"] }`}>
                    <div className={styles.finance__overview__itemWrapper__item} key={`finance-overview-${overview.title}`}>
                        <div className={`${styles.finance__overview__itemWrapper__item__icon} ${styles[`finance__overview__itemWrapper__item__icon--${overview.iconColor}`]}`}>
                            {overview.icon}
                        </div>
                        <div className={styles.finance__overview__itemWrapper__item__info}>
                            <p className={`text-regular-2 ${styles.finance__overview__itemWrapper__item__info__title}`}>
                                {overview.title}
                            </p>
                            <h3 className={styles.finance__overview__itemWrapper__item__info__amount}>
                                {overview.amount.toLocaleString('en-US')}
                            </h3>
                            <p className={`text-regular-2 ${styles.finance__overview__itemWrapper__item__info__compare}`}>
                                <span className={ `text-semibold-2 ${overview.percentageThanLastMonth > 0 ? styles["finance__overview__itemWrapper__item__info__compare--green"] : styles["finance__overview__itemWrapper__item__info__compare--red"]}` }>{overview.percentageThanLastMonth}%</span> than last month
                            </p>
                        </div>
                        <div className={styles.finance__overview__itemWrapper__item__chart}>
                            {overview.chart}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default Overview;