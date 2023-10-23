'use client'

//react
import { useState } from "react"
import Link from "next/link"

//components
import Paginate from "../paginate/Paginate"

//style
import styles from "@/app/_styles/teachers.module.scss"

//types
import { teacher } from "@/types/teacher"

//data
import { Teachers } from "@/raw_data/teacher"

//icons
import DotsIcon from "../icon/DotsIcon"
import PhoneIcon from "../icon/PhoneIcon"
import MailIcon from "../icon/MailIcon"

const TeacherList = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected)
    };

    return (
        <div className={styles.teachers__list}>
            { Teachers.map((item:teacher) => (
                <Link href={`/teachers/${item.id}`} key={`teacher-${item.name}`} className={styles.teachers__list__itemWrapper}>
                    <div className={styles.teachers__list__itemWrapper__item}>
                        <button className={styles.teachers__list__itemWrapper__item__option}><DotsIcon/></button>
                        <div className={styles.teachers__list__itemWrapper__item__avatar}></div>
                        <h4 className={styles.teachers__list__itemWrapper__item__name}>{item.name}</h4>
                        <p className={`text-regular-1 ${styles.teachers__list__itemWrapper__item__major}`}>{item.major}</p>
                        <div className={styles.teachers__list__itemWrapper__item__contact}>
                            <button className={styles.teachers__list__itemWrapper__item__contact__phone}><PhoneIcon/></button>
                            <button className={styles.teachers__list__itemWrapper__item__contact__mail}><MailIcon/></button>
                        </div>
                    </div>
                </Link>
            ))}
            <div className={styles.teachers__paginate}>
                <Paginate handlePageClick={handlePageClick} pageCount={3} currentPage={currentPage}/>
            </div>
        </div>
    );
}
 
export default TeacherList;