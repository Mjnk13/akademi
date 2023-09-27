'use client'

//react
import { useState } from "react";

//styles
import styles from "@/app/_styles/dashboard.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//icons
import UserIcon from "../icon/UserIcon";
import PrintIcon from "../icon/PrintIcon";
import DotsIcon from "../icon/DotsIcon";
import Paginate from "../paginate/Paginate";

const UnpaidStudentIntuition = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const name:string[] = [ "Samantha William", "Tony Soap", "Jordan Nico", "Karen Hope", "Nadila Adja" ];
    function handlePageClick(event: {selected: number}) {
        setCurrentPage(event.selected)
    }

    return (
        <div className={styles.dashboard__mainSection__unpaidStudentIntuition}>
            <h2 style={{color: variables.colorText}}>Unpaid Student Intuition</h2>

            {/* table start */}
            <table className={styles.dashboard__mainSection__unpaidStudentIntuition__table}>
                <tbody>
                    { name.map((item:string) => (
                        <tr key={`unpaid-student-intuition-${item}`} className={styles.dashboard__mainSection__unpaidStudentIntuition__table__row}>
                            <td><p className="text-semibold-1" style={{color: variables.colorText}}>{item}</p></td>
                            <td><p className="text-semibold-1" style={{color: variables.colorPurple}}>ID 123456789</p></td>
                            <td>
                                <div className={styles.dashboard__mainSection__unpaidStudentIntuition__table__row__class}>
                                    <div className={styles.dashboard__mainSection__unpaidStudentIntuition__table__row__class__iconWrapper}>
                                        <UserIcon/>
                                    </div>
                                    <div>
                                        <p className="text-regular-2" style={{color: variables.colorGrey3, marginBottom: "0.25rem"}}>Class</p>
                                        <p className="text-semibold-1" style={{color: variables.colorText, margin: "0"}}>VII A</p>
                                    </div>
                                </div>
                            </td>
                            <td><p className="text-semibold-1">$ 50,036</p></td>
                            <td>
                                <button className={styles.dashboard__mainSection__unpaidStudentIntuition__table__row__printBtn}>
                                    <PrintIcon/>
                                </button>
                            </td>
                            <td>
                                <button className={styles.dashboard__mainSection__unpaidStudentIntuition__table__row__optionBtn}>
                                    <DotsIcon/>
                                </button>
                            </td>
                        </tr>
                    )) }
                </tbody>
            </table>
            {/* table end */}

            <div className={styles.dashboard__mainSection__unpaidStudentIntuition__paginate}>
                <Paginate handlePageClick={handlePageClick} pageCount={3} currentPage={currentPage}/>
            </div>
        </div>
    );
}
 
export default UnpaidStudentIntuition;