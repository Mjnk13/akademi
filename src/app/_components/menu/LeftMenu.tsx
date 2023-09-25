'use client'

//styles
import styles from "@/app/_styles/left_menu.module.scss";

//icon
import HomeIcon from "../icon/HomeIcon";
import StudentIcon from "../icon/StudentIcon";
import TeacherIcon from "../icon/Teacher";
import CalendarIcon from "../icon/CalendarIcon";
import FinanceIcon from "../icon/FinanceIcon";
import RestaurantIcon from "../icon/RestaurantIcon";
import UserIcon from "../icon/UserIcon";
import ChatIcon from "../icon/ChatIcon";
import ActivityIcon from "../icon/ActivityIcon";

//next
import Link from "next/link";
import { usePathname } from "next/navigation";

//types
import { left_menu } from "@/types/leftmenu"

const LeftMenu = () => {
    const patchName = usePathname()

    const menuList:left_menu[] = [
        {
            text: "Dashboard",
            icon: <HomeIcon/>,
            link: "/"
        },
        {
            text: "Students",
            icon: <StudentIcon/>,
            link: "/students"
        },
        {
            text: "Teachers",
            icon: <TeacherIcon/>,
            link: "/teachers"
        },
        {
            text: "Event",
            icon: <CalendarIcon/>,
            link: "/event"
        },
        {
            text: "Finance",
            icon: <FinanceIcon/>,
            link: "/finance"
        },
        {
            text: "Food",
            icon: <RestaurantIcon/>,
            link: "/food"
        },
        {
            text: "User",
            icon: <UserIcon/>,
            link: "/user"
        },
        {
            text: "Chat",
            icon: <ChatIcon/>,
            link: "/chat"
        },
        {
            text: "Latest Activity",
            icon: <ActivityIcon/>,
            link: "/latest-activity"
        }
    ]

    return ( 
        <div className={styles.leftMenu}>
            <div className={styles.leftMenu__logo}>
                <div className={styles.leftMenu__logo__A}>
                    <h3>A</h3>
                </div>
                <h3>Akademi</h3>
            </div>
            <ul className={styles.leftMenu__menuList}>
                {menuList.map((item:left_menu, index:number) => (
                        <li key={`menu-item-${index}`} className={styles.leftMenu__menuList__menuItem}>
                            <Link href={item.link} scroll={false} className={ styles.leftMenu__menuList__menuItem__link + `${ patchName === item.link ? " " + styles["leftMenu__menuList__menuItem__link--active"] : "" }` }>
                                {item.icon}
                                {item.text}
                            </Link>
                        </li>
                    )
                )}
            </ul>
            <h6 className={styles.leftMenu__description}>Akademi - School Admission Dashboard</h6>
        </div>
    );
}
 
export default LeftMenu;