//styles
import styles from "@/app/_styles/user_dashboard.module.scss"

//icons
import SearchIcon from "../icon/SearchIcon"
import { chat } from "@/types/chat"

//components
import ChatItem from "../contact_and_chat/ChatItem"

const Message = () => {
    const chats:chat[] = [
        {
            name: "Samantha William",
            message: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            time: "12:45 PM",
            numOfUnreadMessage: 2
        },
        {
            name: "Tony Soap",
            message: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            time: "12:45 PM",
            numOfUnreadMessage: 2
        },
        {
            name: "Karen Hope",
            message: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            time: "12:45 PM",
            numOfUnreadMessage: 0
        },
        {
            name: "Jordan Nico",
            message: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            time: "12:45 PM",
            numOfUnreadMessage: 2
        },
        {
            name: "Nadila Adja",
            message: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            time: "12:45 PM",
            numOfUnreadMessage: 0
        }
    ]
    
    return (
        <div className={styles.userDashboard__mainSection__contactMessageSection__messageWrapper__messageSection}>
            <h4 className={styles.userDashboard__mainSection__contactMessageSection__messageWrapper__messageSection__title}>Messages</h4>
            <div className={styles.userDashboard__mainSection__contactMessageSection__messageWrapper__messageSection__search}>
                <input type="text" id="dashboard-search" placeholder=""/>
                <label htmlFor="dashboard-search">
                    <SearchIcon/>Search here...
                </label>
            </div>
            <div className={styles.userDashboard__mainSection__contactMessageSection__messageWrapper__messageSection__list}>
                { chats.map((chat:chat, index:number) => (
                    <ChatItem key={`recent-student-${index}`} {...chat} />
                ))}
            </div>
            <button className={styles.userDashboard__mainSection__contactMessageSection__messageWrapper__messageSection__viewMoreBtn}>View More</button>
        </div>
    );
}
 
export default Message;