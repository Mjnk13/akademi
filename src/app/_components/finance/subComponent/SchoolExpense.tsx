'use client'

//react
import { useState } from "react"

//styles
import styles from '@/app/_styles/finance.module.scss'

//types
import { shool_expense } from '@/types/schoolexpense'

//icons
import TrendingIcon from "../../icon/TrendingIcon"

//component
import Paginate from "../../paginate/Paginate"

const SchoolExpense = () => {
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick(event: {selected: number}) {
        setCurrentPage(event.selected)
    }

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
        <div className={styles.finance__tablesSection__schoolExpenseWrapper__content}>
            <h2 className={styles.finance__tablesSection__schoolExpenseWrapper__content__title}>School Expense</h2>
            <table className={styles.finance__tablesSection__schoolExpenseWrapper__content__table}>
                <tbody>
                    {tableData.map((data, index) => (
                        <tr key={index}>
                            <td className={styles.finance__tablesSection__schoolExpenseWrapper__content__table__mainInfo}>
                                <div className={styles.finance__tablesSection__schoolExpenseWrapper__content__table__mainInfo__icon}>
                                    <TrendingIcon/>
                                </div>
                                <div className={styles.finance__tablesSection__schoolExpenseWrapper__content__table__mainInfo__text}>
                                    <p className={`text-semibold-1 ${styles.finance__tablesSection__schoolExpenseWrapper__content__table__mainInfo__text__id}`}>#{data.id}</p>
                                    <p className={`text-regular-2 ${styles.finance__tablesSection__schoolExpenseWrapper__content__table__mainInfo__text__time}`}>{data.date_time}</p>
                                </div>
                            </td>
                            <td>
                                <p className={`text-semibold-1 ${styles.finance__tablesSection__schoolExpenseWrapper__content__table__amount}`}>$ {data.amount.toLocaleString('en-US')}</p>
                            </td>
                            <td>
                                <p className={`text-semibold-1 ${styles[`finance__tablesSection__schoolExpenseWrapper__content__table__status--${data.status}`]}`}>{data.status}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.finance__tablesSection__schoolExpenseWrapper__content__paginate}>
                <Paginate handlePageClick={handlePageClick} pageCount={3} currentPage={currentPage}/>
            </div>
        </div>
    );
}
 
export default SchoolExpense;