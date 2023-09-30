'use client'

//react
import { useState } from "react";

//style
import styles from "@/app/_styles/students.module.scss"
import variables from "@/app/_styles/utils/variables.module.scss"

//types
import { student } from "@/types/student";

//icons
import PhoneIcon from "../icon/PhoneIcon";
import MailIcon from "../icon/MailIcon";
import DotsIcon from "../icon/DotsIcon";
import CheckedIcon from "../icon/CheckedIcon";

//component
import Paginate from "../paginate/Paginate";

const Table = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const students:student[] = [
        {
            name: "Samanta William",
            parentName: "Mana William",
            grade: "VII A"
        },
        {
            name: "Tony Soap",
            parentName: "James Soap",
            grade: "VII B"
        },
        {
            name: "Karen Hope",
            parentName: "Justin Hope",
            grade: "VII C"
        },
        {
            name: "Jordan Nico",
            parentName: "Amanda Nico",
            grade: "VII B"
        },
        {
            name: "Nadila Adja",
            parentName: "Jack Adja",
            grade: "VII A"
        },
        {
            name: "Johnny Ahmad",
            parentName: "Danny Ahmad",
            grade: "VII B"
        }
    ]

    const labelColors = {
        "VII A": "orange",
        "VII B": "yellow",
        "VII C": "purple"
    }

    function handlePageClick(event: {selected: number}) {
        setCurrentPage(event.selected)
    }

    return (
        <div className={styles.students__tableWrapper}>
            <table className={styles.students__tableWrapper__table}>
                <thead>
                    <tr style={{color: variables.colorText, textAlign: "left"}}>
                        <td>
                            <label className={styles.students__tableWrapper__table__inputWrapper}>
                                <input type="checkbox"/>
                                <span className={styles.students__tableWrapper__table__inputWrapper__checkmark}><CheckedIcon/></span>
                            </label>
                        </td>
                        <th><p className="text-semibold-2">Name</p></th>
                        <th><p className="text-semibold-2">ID</p></th>
                        <th><p className="text-semibold-2">Date</p></th>
                        <th><p className="text-semibold-2">Parent Name</p></th>
                        <th><p className="text-semibold-2">City</p></th>
                        <th><p className="text-semibold-2">Contact</p></th>
                        <th><p className="text-semibold-2">Grade</p></th>
                        <th><p className="text-semibold-2">Action</p></th>
                    </tr>
                </thead>
                <tbody>
                    { students.map((student:student) => (
                        <tr key={`student-${student.name}`} className={styles.students__tableWrapper__table__item}>
                            <td>
                                <label className={styles.students__tableWrapper__table__inputWrapper}>
                                    <input type="checkbox"/>
                                    <span className={styles.students__tableWrapper__table__inputWrapper__checkmark}><CheckedIcon/></span>
                                </label>
                            </td>
                            <td>
                                <div className={styles.students__tableWrapper__table__item__name}>
                                    <div className={styles.students__tableWrapper__table__item__name__avatar}></div>
                                    <h4>{student.name}</h4>
                                </div>
                            </td>
                            <td><p className="text-semibold-1" style={{color: variables.colorPurple}}>#123456789</p></td>
                            <td><p className="text-regular-2" style={{color: variables.colorGrey3}}>March 25, 2021</p></td>
                            <td><p className="text-regular-2" style={{color: variables.colorText}}>{student.parentName}</p></td>
                            <td><p className="text-regular-2" style={{color: variables.colorText}}>Jakarta</p></td>
                            <td>
                                <div className={styles.students__tableWrapper__table__item__contact}>
                                    <button className={styles.students__tableWrapper__table__item__contact__phone}><PhoneIcon/></button>
                                    <button className={styles.students__tableWrapper__table__item__contact__mail}><MailIcon/></button>
                                </div>
                            </td>
                            <td><p className={`text-regular-2 ${styles.students__tableWrapper__table__item__grade} ${styles[`students__tableWrapper__table__item__grade--${labelColors[student.grade as keyof {}]}`]}`}>{student.grade}</p></td>
                            <td><button className={styles.students__tableWrapper__table__item__option}><DotsIcon/></button></td>
                        </tr>
                    )) }
                </tbody>
            </table>
            <div className={styles.students__paginate}>
                <Paginate handlePageClick={handlePageClick} pageCount={3} currentPage={currentPage}/>
            </div>
        </div>
    );
}
 
export default Table;