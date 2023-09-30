'use client'

//react
import { useState } from "react";

//style
import styles from "@/app/_styles/teachers.module.scss"

//types
import { teacher } from "@/types/teacher"

//icons
import DotsIcon from "../icon/DotsIcon"
import PhoneIcon from "../icon/PhoneIcon";
import MailIcon from "../icon/MailIcon";

const TeacherList = () => {
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
            <div className={styles.teachers__list__item}>
                <button className={styles.teachers__list__item__option}><DotsIcon/></button>
                <div className={styles.teachers__list__item__avatar}></div>
                <h3 className={styles.teachers__list__item__name}>awegsdfws</h3>
                <p className={`text-regular-1 ${styles.teachers__list__item__major}`}>hjewfbqjbch</p>
                <div className={styles.teachers__list__item__contact}>
                    <button className={styles.teachers__list__item__contact__phone}><PhoneIcon/></button>
                    <button className={styles.teachers__list__item__contact__mail}><MailIcon/></button>
                </div>
            </div>
        </div>
    );
}
 
export default TeacherList;