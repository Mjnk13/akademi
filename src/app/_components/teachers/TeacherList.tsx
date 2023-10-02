'use client'

//react
import { useState } from "react";

//components
import Paginate from "../paginate/Paginate";

//style
import styles from "@/app/_styles/teachers.module.scss"

//types
import { teacher } from "@/types/teacher"

//icons
import DotsIcon from "../icon/DotsIcon"
import PhoneIcon from "../icon/PhoneIcon";
import MailIcon from "../icon/MailIcon";

const TeacherList = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = (data: { selected: number }) => {
        setCurrentPage(data.selected);
    };

    const teacher:teacher[] = [
        {
            name: "Dimitres Viga",
            major: "Mathematics"
        },
        {
            name: "Tom Housenburg",
            major: "Science"
        },
        {
            name: "Dana Benevista",
            major: "Art"
        },
        {
            name: "Salvadore Morbeau",
            major: "Biology"
        },
        {
            name: "Maria Historia",
            major: "History"
        },
        {
            name: "Jack Sally",
            major: "Physics"
        },
        {
            name: "Lula Beatrice",
            major: "Algorithm"
        },
        {
            name: "Nella Vita",
            major: "Engilsh"
        },
        {
            name: "Nadia Laravela",
            major: "Programming"
        },
        {
            name: "Dakota Farral",
            major: "Science"
        },
        {
            name: "Miranda Adila",
            major: "Art"
        },
        {
            name: "Indiana Barker",
            major: "Biology"
        }
    ]

    return (
        <div className={styles.teachers__list}>
            { teacher.map((item:teacher) => (
                <div key={`teacher-${item.name}`} className={styles.teachers__list__itemWrapper}>
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
                </div>
            ))}
            <div className={styles.teachers__paginate}>
                <Paginate handlePageClick={handlePageClick} pageCount={3} currentPage={currentPage}/>
            </div>
        </div>
    );
}
 
export default TeacherList;