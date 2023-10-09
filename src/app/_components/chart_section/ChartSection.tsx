//styles
import styles from '@/app/_styles/components/chart_section.module.scss'

//icons
import DropdownIcon from '../icon/DropdownIcon';

//types
import { chart_section } from '@/types/chartsection';

const ChartSection = (props: chart_section) => {
    return (
        <div className={styles.chartSection}>
            <div className={styles.chartSection__header}>
                <h3 className={styles.chartSection__header__title}>{props.title}</h3>
                <div className={styles.chartSection__header__right}>
                    <div className={styles.chartSection__header__right__label}>
                        <div className={`${styles.chartSection__header__right__label__dots} ${styles["chartSection__header__right__label__dots--expense"]}`}></div>
                        <div className={styles.chartSection__header__right__label__info}>
                            <p className={`text-regular-2 ${styles.chartSection__header__right__label__info__title}`}>Expense</p>
                            <h5 className={styles.chartSection__header__right__label__info__amount}>1,245</h5>
                        </div>
                    </div>
                    <div className={styles.chartSection__header__right__label}>
                        <div className={`${styles.chartSection__header__right__label__dots} ${styles["chartSection__header__right__label__dots--income"]}`}></div>
                        <div className={styles.chartSection__header__right__label__info}>
                            <p className={`text-regular-2 ${styles.chartSection__header__right__label__info__title}`}>Income</p>
                            <h5 className={styles.chartSection__header__right__label__info__amount}>1,356</h5>
                        </div>
                    </div>
                    { props.isMontBtnShow && <button className={styles.chartSection__header__right__monthBtn}>Month <DropdownIcon/></button> }
                </div>
            </div>
            <div className={styles.chartSection__chart}>
                {props.chart}
            </div>
        </div>
    );
}
 
export default ChartSection;