//styles
import styles from "@/app/_styles/chat.module.scss"

//types
import { chat } from "@/types/chat"

const Chat = (props: chat) => {
    return (
        <div className={styles.chatItem}>
            <div className={`${styles.chatItem__avatar} ${styles[`chatItem__avatar--grey2`]}`}></div>
            <div className={styles.chatItem__info}>
                <div className={styles.chatItem__info__nameAndMessageWrapper}>
                    <p className={`text-semibold-1 ${styles.chatItem__info__nameAndMessageWrapper__name}`}>{props.name}</p>
                    <p className={`text-regular-2 ${styles.chatItem__info__nameAndMessageWrapper__message}`}>{props.message}</p>
                </div>
                <div className={styles.chatItem__info__timeAndNumUnreadMessageWrapper}>
                    <p className={`text-regular-2 ${styles.chatItem__info__timeAndNumUnreadMessageWrapper__time}`}>{props.time}</p>
                    {   props.numOfUnreadMessage > 0 && <p className={`text-regular-2 ${styles.chatItem__info__timeAndNumUnreadMessageWrapper__numOfUnreadMessage}`}>{props.numOfUnreadMessage}</p> }
                </div>
            </div>
        </div>
    );
}
 
export default Chat;