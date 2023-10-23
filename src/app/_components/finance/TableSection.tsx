//styles
import styles from '@/app/_styles/finance.module.scss'

//components
import UnpaidStudentIntuition from '../dashboard/UnpaidStudentIntuition'
import SchoolExpense from './subComponent/SchoolExpense'

//types
import { shool_expense } from '@/types/schoolexpense'

const TableSection = () => {
    const tableData:shool_expense[] = [
        {
            id: 123456789,
            date_time: '2 March 2021, 13:45 PM',
            amount: 50036,
            status: "completed",
        },
        {
            id: 123456789,
            date_time: '2 March 2021, 13:45 PM',
            amount: 50036,
            status: "pending",
        },
        {
            id: 123456789,
            date_time: '2 March 2021, 13:45 PM',
            amount: 50036,
            status: "cancelled",
        },
        {
            id: 123456789,
            date_time: '2 March 2021, 13:45 PM',
            amount: 50036,
            status: "completed",
        },
        {
            id: 123456789,
            date_time: '2 March 2021, 13:45 PM',
            amount: 50036,
            status: "completed",
        },
        {
            id: 123456789,
            date_time: '2 March 2021, 13:45 PM',
            amount: 50036,
            status: "completed",
        },
    ]

    return (
        <div className={styles.finance__tablesSection}>
            <div className={styles.finance__tablesSection__unpaidStudentIntuitionWrapper}>
                <UnpaidStudentIntuition/>
            </div>
            <div className={styles.finance__tablesSection__schoolExpenseWrapper}>
                <SchoolExpense title='School Expense' isDateTimeColumnSeparate={false} tableData={tableData}/>
            </div>
        </div>
    );
}
 
export default TableSection;