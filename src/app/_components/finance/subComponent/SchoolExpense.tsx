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

type props = {
    title: string,
    isDateTimeColumnSeparate?: boolean,
    tableData: shool_expense[]
}

const SchoolExpense = (props: props) => {
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick(event: {selected: number}) {
        setCurrentPage(event.selected)
    }
    
    return (
        <div className={styles.finance__tablesSection__schoolExpenseWrapper__content}>
            <h2 className={styles.finance__tablesSection__schoolExpenseWrapper__content__title}>{props.title}</h2>
            <table className={styles.finance__tablesSection__schoolExpenseWrapper__content__table}>
                <tbody>
                    {props.tableData.map((data, index) => (
                        <tr key={index}>
                            <td className={styles.finance__tablesSection__schoolExpenseWrapper__content__table__mainInfo}>
                                <div className={styles.finance__tablesSection__schoolExpenseWrapper__content__table__mainInfo__icon}>
                                    <TrendingIcon/>
                                </div>
                                <div className={styles.finance__tablesSection__schoolExpenseWrapper__content__table__mainInfo__text}>
                                    <p className={`text-semibold-1 ${styles.finance__tablesSection__schoolExpenseWrapper__content__table__mainInfo__text__id}`}>#{data.id}</p>
                                    {!props.isDateTimeColumnSeparate && <p className={`text-regular-2 ${styles.finance__tablesSection__schoolExpenseWrapper__content__table__time}`}>{data.date_time}</p> }
                                </div>
                            </td>
                            {props.isDateTimeColumnSeparate &&
                                <td>
                                    <p className={`text-regular-2 ${styles.finance__tablesSection__schoolExpenseWrapper__content__table__time}`}>{data.date_time}</p>
                                </td>
                            }
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