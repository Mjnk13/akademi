//styles
import styles from "@/app/_styles/user_dashboard.module.scss"

//icons
import SearchIcon from "../icon/SearchIcon"
import { contact } from "@/types/contact"

//components
import StudentContactItem from "../contact_and_chat/StudentContactItem"

const Contact = () => {
    const contacts:contact[] = [
        {
            name: "Samantha William",
            class: "VII A",
            isNotify: false
        },
        {
            name: "Tony Soap",
            class: "VII A",
            isNotify: true
        },
        {
            name: "Karen Hope",
            class: "VII A",
            isNotify: false
        },
        {
            name: "Jordan Nico",
            class: "VII B",
            isNotify: false
        },
        {
            name: "Nadila Adja",
            class: "VII B",
            isNotify: false
        },
    ]
    
    return (
        <div className={styles.userDashboard__mainSection__contactMessageSection__contactWrapper__contactSection}>
            <div className={styles.userDashboard__mainSection__contactMessageSection__contactWrapper__contactSection__header}>
                <div className={styles.userDashboard__mainSection__contactMessageSection__contactWrapper__contactSection__header__wrapper}>
                    <h4 className={styles.userDashboard__mainSection__contactMessageSection__contactWrapper__contactSection__header__wrapper__title}>Contacts</h4>
                    <p className={`text-regular-2 ${styles.userDashboard__mainSection__contactMessageSection__contactWrapper__contactSection__header__wrapper__info}`}>You have <span className={`text-semibold-2 ${styles["userDashboard__mainSection__contactMessageSection__contactWrapper__contactSection__header__wrapper__info--number"]}`}>741</span> contacts</p>
                </div>
                <button className={styles.userDashboard__mainSection__contactMessageSection__contactWrapper__contactSection__header__addBtn}>+</button>
            </div>
            <div className={styles.userDashboard__mainSection__contactMessageSection__contactWrapper__contactSection__search}>
                <input type="text" id="dashboard-search" placeholder=""/>
                <label htmlFor="dashboard-search">
                    <SearchIcon/>Search here...
                </label>
            </div>
            <div className={styles.userDashboard__mainSection__contactMessageSection__contactWrapper__contactSection__list}>
                { contacts.map((student:contact, index:number) => (
                    <StudentContactItem key={`recent-student-${index}`} name={student.name} class={student.class} isNotify={student.isNotify} />
                ))}
            </div>
            <button className={styles.userDashboard__mainSection__contactMessageSection__contactWrapper__contactSection__viewMoreBtn}>View More</button>
        </div>
    );
}
 
export default Contact;