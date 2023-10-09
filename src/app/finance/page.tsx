//styles
import styles from '@/app/_styles/finance.module.scss'

//components
import Heading from '../_components/finance/Heading'
import Overview from '../_components/finance/Overview'
import TableSection from '../_components/finance/TableSection'
import ChartSection from '../_components/chart_section/ChartSection'

const Finance = () => {
    return (
        <div className={styles.finance}>
            <Heading/>
            <Overview/>
            <ChartSection title={"Balance Analytics"} isMontBtnShow={true} chart={<img src="/images/svg/big_line_chart.svg"></img>} />
            <TableSection/>
        </div>
    );
}
 
export default Finance;