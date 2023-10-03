//styles
import styles from "@/app/_styles/chat.module.scss"

//icons
import SearchIcon from "../../icon/SearchIcon"

//types
import { chat, group } from "@/types/chat"

//components
import Group from "./Group"
import Chat from "./Chat"

const LeftSide = () => {
    const groups:group[] = [
        {
            name: "Class History VII-A",
            message: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            time: "12:45 PM",
            numOfUnreadMessage: 2,
            colorAvatar: "purple"
        },
        {
            name: "Class VII-A",
            message: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            time: "12:45 PM",
            numOfUnreadMessage: 2,
            colorAvatar: "orange"
        },
        {
            name: "All Students VII",
            message: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            time: "12:45 PM",
            numOfUnreadMessage: 0,
            colorAvatar: "yellow"
        }
    ]

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
        }
    ]


    return (
        <div className={styles.chat__messageSection__leftSide}>
            <div className={styles.chat__messageSection__leftSide__wrapper}>
                <h4 className={styles.chat__messageSection__leftSide__wrapper__mainTitle}>Message</h4>
                <div className={styles.chat__messageSection__leftSide__wrapper__search}>
                    <input type="text" id="dashboard-search" placeholder=""></input>
                    <label htmlFor="dashboard-search">
                        <SearchIcon/>Search here...
                    </label>
                </div>
                <div className={styles.chat__messageSection__leftSide__wrapper__groupList}>
                    <p className={`text-semibold-1 ${styles.chat__messageSection__leftSide__wrapper__groupList__title}`}>Groups</p>
                    { groups.map((item:group) => (
                            <Group key={`group-${item.name}`} {...item}/>
                    )) }
                </div>
                <div className={styles.chat__messageSection__leftSide__wrapper__chatList}>
                    <p className={`text-semibold-1 ${styles.chat__messageSection__leftSide__wrapper__chatList__title}`}>Chats</p>
                    { chats.map((item:chat) => (
                            <Chat key={`chat-${item.name}`} {...item}/>
                    )) }
                </div>
                <button className={styles.chat__messageSection__leftSide__wrapper__viewMoreBtn}>View More</button>
            </div>
        </div>
    );
}
 
export default LeftSide;