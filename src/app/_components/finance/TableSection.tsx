//styles
import styles from '@/app/_styles/finance.module.scss'

//components
import UnpaidStudentIntuition from '../dashboard/UnpaidStudentIntuition'
import SchoolExpense from './subComponent/SchoolExpense';

const TableSection = () => {
    return (
        <div className={styles.finance__tablesSection}>
            <div className={styles.finance__tablesSection__unpaidStudentIntuitionWrapper}>
                <UnpaidStudentIntuition/>
            </div>
            <div className={styles.finance__tablesSection__schoolExpenseWrapper}>
                <SchoolExpense/>
            </div>
        </div>
    );
}
 
export default TableSection;